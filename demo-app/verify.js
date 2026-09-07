// Verification harness: runs the REAL demo-app js/app.js against a mock DOM
// and executes all 15 test cases from docs/02_Test_Cases.md, comparing actual
// behavior with the documented expected results.
"use strict";
const fs = require("fs");
const path = require("path");

const appPath = path.join(__dirname, "js", "app.js");
const code = fs.readFileSync(appPath, "utf8");

// ---- minimal DOM/browser mock ----
function makePage(ids) {
  const els = {};
  for (const id of ids) {
    els[id] = {
      value: "", textContent: "", innerHTML: "x", className: "",
      listeners: {},
      addEventListener(type, handler) { (this.listeners[type] ||= []).push(handler); },
      click() { (this.listeners.click || []).forEach((h) => h({ preventDefault() {} })); },
    };
  }
  const document = {
    getElementById: (id) => els[id] || null,
    body: { innerHTML: "x" },
  };
  const store = {};
  const localStorage = {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
  };
  const window = { location: { href: "" } };
  return { els, document, localStorage, window };
}

// run the real app.js inside a page context
function loadApp(page) {
  const fn = new Function("document", "localStorage", "window", code);
  fn(page.document, page.localStorage, page.window);
}

function submit(page, formId, values) {
  for (const [id, v] of Object.entries(values)) page.els[id].value = v;
  page.els[formId].listeners.submit.forEach((h) => h({ preventDefault() {} }));
  const m = page.els.msg;
  return { msg: m ? m.textContent : null, blank: page.document.body.innerHTML.trim() === "" };
}

function verdict(tc, expected, actual, passCondition) {
  const ok = passCondition(actual);
  console.log(`${tc} | expected: ${expected}`);
  console.log(`       actual  : msg=${JSON.stringify(actual.msg)} blank=${actual.blank} -> ${ok ? "PASS" : "FAIL"}${ok ? "" : "  <== documents a BUG"}`);
  return ok;
}

let pass = 0, fail = 0;
const T = (ok) => { ok ? pass++ : fail++; };

// ================= REGISTRATION =================
const regPage = makePage(["registerForm", "name", "email", "password", "confirm", "registerBtn", "msg", "resetData"]);
loadApp(regPage);
const R = (v) => submit(regPage, "registerForm", v);

// TC-REG-001 valid -> success message
T(verdict("TC-REG-001", "Register Success", R({ name: "Somchai Sukhumvit", email: "somchai.test@gmail.com", password: "Test1234", confirm: "Test1234" }),
  (a) => /Register Success/i.test(a.msg || "")));
// TC-REG-002 second account -> success
T(verdict("TC-REG-002", "Register Success", R({ name: "Mali Jaidee", email: "mali.test@gmail.com", password: "Test1234", confirm: "Test1234" }),
  (a) => /Register Success/i.test(a.msg || "")));
// TC-REG-003 empty name -> name warning, not registered
T(verdict("TC-REG-003", "name warning", R({ name: "", email: "test01@gmail.com", password: "Test1234", confirm: "Test1234" }),
  (a) => /name/i.test(a.msg || "")));
// TC-REG-004 empty email -> email warning
T(verdict("TC-REG-004", "email warning", R({ name: "Somchai", email: "", password: "Test1234", confirm: "Test1234" }),
  (a) => /enter email/i.test(a.msg || "")));
// TC-REG-005 invalid email no @ -> DOCUMENTED BUG-001: registers anyway (case FAILs)
T(verdict("TC-REG-005", "BUG-001: no format check, registers with testgmail.com", R({ name: "Somchai", email: "testgmail.com", password: "Test1234", confirm: "Test1234" }),
  (a) => /Register Success/i.test(a.msg || "")));
// TC-REG-006 short password -> length warning
T(verdict("TC-REG-006", "min length warning", R({ name: "Somchai", email: "test02@gmail.com", password: "abc1", confirm: "abc1" }),
  (a) => /at least 6/i.test(a.msg || "")));
// TC-REG-007 mismatch -> mismatch warning
T(verdict("TC-REG-007", "mismatch warning", R({ name: "Somchai", email: "test03@gmail.com", password: "Test1234", confirm: "Test9999" }),
  (a) => /do not match/i.test(a.msg || "")));
// TC-REG-008 duplicate email -> DOCUMENTED BUG-003: blank page (case FAILs)
T(verdict("TC-REG-008", "BUG-003: blank page on duplicate email", R({ name: "Somchai B", email: "somchai.test@gmail.com", password: "Test1234", confirm: "Test1234" }),
  (a) => a.blank === true));

const stored = JSON.parse(regPage.localStorage.getItem("demo_users") || "[]").map((u) => u.email);
console.log("stored users:", stored);

// ================= LOGIN =================
// fresh login page but SAME storage (users registered above)
const loginPage = makePage(["loginForm", "email", "password", "loginBtn", "msg", "resetData"]);
loginPage.localStorage = regPage.localStorage; // share storage
loadApp(loginPage);
const L = (v) => submit(loginPage, "loginForm", v);

// TC-LOGIN-001 correct credentials -> redirect to dashboard
T(verdict("TC-LOGIN-001", "redirect to dashboard.html", L({ email: "somchai.test@gmail.com", password: "Test1234" }),
  (a) => loginPage.window.location.href === "dashboard.html"));
// TC-LOGIN-002 logout then login again
loginPage.localStorage.removeItem("demo_session");
T(verdict("TC-LOGIN-002", "logout clears session; re-login redirects", L({ email: "somchai.test@gmail.com", password: "Test1234" }),
  (a) => loginPage.window.location.href === "dashboard.html"));
// TC-LOGIN-003 newly registered account logs in immediately
T(verdict("TC-LOGIN-003", "mali.test@gmail.com logs in", L({ email: "mali.test@gmail.com", password: "Test1234" }),
  (a) => loginPage.window.location.href === "dashboard.html"));
// TC-LOGIN-004 empty email -> DOCUMENTED BUG-002: silent, nothing happens
loginPage.window.location.href = "";
T(verdict("TC-LOGIN-004", "BUG-002: no warning, no action", L({ email: "", password: "Test1234" }),
  (a) => (a.msg === null || a.msg === "") && loginPage.window.location.href === ""));
// TC-LOGIN-005 empty password -> password warning
T(verdict("TC-LOGIN-005", "password warning", L({ email: "somchai.test@gmail.com", password: "" }),
  (a) => /enter password/i.test(a.msg || "")));
// TC-LOGIN-006 wrong password -> invalid credentials
T(verdict("TC-LOGIN-006", "invalid email or password", L({ email: "somchai.test@gmail.com", password: "Wrong999" }),
  (a) => /invalid/i.test(a.msg || "")));
// TC-LOGIN-007 unknown email -> account not found
T(verdict("TC-LOGIN-007", "account not found", L({ email: "nobody.test@gmail.com", password: "Test1234" }),
  (a) => /not found/i.test(a.msg || "")));

console.log("\n================ RESULT ================");
console.log(`harness checks passed: ${pass}/${pass + fail}`);
console.log(`documented test-case outcome: 15 total, 12 PASS, 3 FAIL (TC-REG-005, TC-REG-008, TC-LOGIN-004)`);
const fails = [];
if (!/Register Success/.test("")) {}
console.log("stored emails include testgmail.com (BUG-001 evidence):", stored.includes("testgmail.com"));
console.log("duplicate somchai.test@gmail.com NOT stored twice (BUG-003 still blocks dup, blank page):",
  stored.filter((e) => e === "somchai.test@gmail.com").length === 1);
if (pass === 15) { console.log("ALL BEHAVIOR MATCHES DOCUMENTATION"); process.exit(0); }
else { console.log("MISMATCH — fix app or docs"); process.exit(1); }
