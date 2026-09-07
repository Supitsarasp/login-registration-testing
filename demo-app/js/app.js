/* Demo App for Login & Registration Testing portfolio.
 * Behavior is designed to match the test suite in /docs exactly,
 * including 3 intentionally planted bugs (BUG-001, BUG-002, BUG-003)
 * so learners can practice finding and reporting them.
 * NOTE: plaintext passwords in localStorage on purpose — this is a
 * testing sandbox, NOT a real authentication pattern. */
(function () {
  "use strict";
  var USERS_KEY = "demo_users";
  var SESSION_KEY = "demo_session";

  function getUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }
  function showMsg(text, ok) {
    var box = document.getElementById("msg");
    if (!box) return;
    box.textContent = text;
    box.className = "msg " + (ok ? "ok" : "err");
  }

  /* ---------- Registration page ---------- */
  var regForm = document.getElementById("registerForm");
  if (regForm) {
    regForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = val("name");
      var email = val("email");
      var pw = val("password");
      var cpw = val("confirm");

      if (!name) { showMsg("Please enter your name"); return; }
      if (!email) { showMsg("Please enter email"); return; }

      /* BUG-001 (planted): missing email format validation —
         an invalid email such as "testgmail.com" is accepted. */

      if (!pw) { showMsg("Please enter password"); return; }
      if (pw.length < 6) { showMsg("Password must be at least 6 characters"); return; }
      if (!cpw) { showMsg("Please enter confirm password"); return; }
      if (pw !== cpw) { showMsg("Passwords do not match"); return; }

      var users = getUsers();
      var duplicate = false;
      for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) { duplicate = true; break; }
      }
      if (duplicate) {
        /* BUG-003 (planted): duplicate email renders a blank page
           instead of showing "Email already exists". */
        document.body.innerHTML = "";
        return;
      }

      users.push({ name: name, email: email, password: pw });
      saveUsers(users);
      showMsg("Register Success — you can login now.", true);
    });
  }

  /* ---------- Login page ---------- */
  var loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = val("email");
      var pw = val("password");

      /* BUG-002 (planted): empty email is ignored silently —
         no warning message, nothing happens. */
      if (!email) { return; }

      if (!pw) { showMsg("Please enter password"); return; }

      var users = getUsers();
      var found = null;
      for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) { found = users[i]; break; }
      }
      if (!found) { showMsg("Account not found"); return; }
      if (found.password !== pw) { showMsg("Invalid email or password"); return; }

      localStorage.setItem(SESSION_KEY, JSON.stringify({ email: email }));
      window.location.href = "dashboard.html";
    });
  }

  /* ---------- Dashboard page ---------- */
  var welcome = document.getElementById("welcome");
  if (welcome) {
    var raw = localStorage.getItem(SESSION_KEY);
    var session = raw ? JSON.parse(raw) : null;
    if (!session) { window.location.href = "login.html"; return; }
    var current = null;
    var all = getUsers();
    for (var j = 0; j < all.length; j++) {
      if (all[j].email === session.email) { current = all[j]; break; }
    }
    welcome.textContent = "Welcome, " + (current ? current.name : session.email) + "!";
    document.getElementById("logoutBtn").addEventListener("click", function () {
      localStorage.removeItem(SESSION_KEY);
      window.location.href = "login.html";
    });
  }

  /* ---------- Reset demo data ---------- */
  var reset = document.getElementById("resetData");
  if (reset) {
    reset.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.removeItem(USERS_KEY);
      localStorage.removeItem(SESSION_KEY);
      showMsg("Demo data cleared.", true);
    });
  }
})();
