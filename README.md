# 🔐 Login & Registration Testing

![Manual Testing](https://img.shields.io/badge/Testing-Manual_Testing-2EA44F)
![Functional](https://img.shields.io/badge/Type-Functional_Testing-1F4E79)
![Level](https://img.shields.io/badge/Level-Beginner-6F42C1)
![Tools](https://img.shields.io/badge/Tools-Excel_•_Google_Sheets_•_Browser-CD6600)

> โปรเจกต์ Manual Testing สำหรับผู้เริ่มต้นสาย QA — ทดสอบระบบ **สมัครสมาชิก (Registration)** และ **เข้าสู่ระบบ (Login)** ครบกระบวนการ: Test Scenario → Test Case → ทดสอบจริง → Bug Report → Test Summary  **ไม่มีการเขียนโค้ด**

---

## 📋 Project Overview

ทดสอบเว็บไซต์ตัวอย่างที่มี 2 หน้า คือหน้า Registration และหน้า Login โดยวิเคราะห์ Requirement ออกแบบ Test Scenario และเขียน Test Case ครอบคลุมทั้งกรณีที่ข้อมูลถูกต้อง (Positive) และไม่ถูกต้อง (Negative) จากนั้นทดสอบด้วยตนเองผ่าน Web Browser บันทึกผล รายงาน Bug และสรุปผลการทดสอบเป็นรายงานฉบับสมบูรณ์ — 

> 🚀 **Live Demo App:** ลองรันชุดทดสอบกับเว็บจริงได้ที่ **https://supitsarasp.github.io/login-registration-testing/** (แอปตัวอย่างในโฟลเดอร์ `demo-app/` — ปลูก bug ไว้ 3 ตัวตาม Bug Report เพื่อฝึกหาเอง)

> ** ผลการทดสอบ PASS/FAIL และ Bug ทั้ง 3 รายการ ถูก verify ความถูกต้องกับ **Demo App จริง** ที่สร้างมาพร้อม repo นี้ (สคริปต์ `demo-app/verify.js` ยืนยันพฤติกรรมตรง Test Cases 15/15 เคส) — แอปปลูก bug ไว้โดยตั้งใจเพื่อการฝึกฝน ส่วน Requirement, Test Scenario และ Test Case ทั้งหมดออกแบบตามหลักวิชาชีพ และนำไปใช้กับระบบ Register/Login จริงได้ทันที

## 🖥️ Application Under Test

| หน้า | ช่องกรอกข้อมูล |
|------|----------------|
| Registration | Name, Email, Password, Confirm Password, ปุ่ม Register |
| Login | Email, Password, ปุ่ม Login |

## 👤 My Role

**Software Tester** — ออกแบบและรันการทดสอบเองทั้งหมด ตั้งแต่วางแผนจนสรุปผล

## 🧪 Testing Types

| ประเภท | คำอธิบาย |
|--------|----------|
| Manual Testing | ทดสอบด้วยตนเองผ่าน Web Browser ทีละเคส ตาม Steps ใน Test Case |
| Functional Testing | ตรวจสอบว่าแต่ละฟังก์ชันทำงานตรงตาม Requirement |
| Positive Testing | ทดสอบด้วยข้อมูลที่**ถูกต้อง** คาดว่าระบบทำงานสำเร็จ |
| Negative Testing | ทดสอบด้วยข้อมูลที่**ไม่ถูกต้อง** เพื่อดูว่าระบบจัดการข้อผิดพลาดได้หรือไม่ |

## 🛠️ Tools

- **Excel / Google Sheets** — เขียน Test Scenario, Test Case และ Bug Report
- **Web Browser (Chrome)** — รันการทดสอบและบันทึกผล

## 📊 Test Coverage

| รายการ | จำนวน |
|--------|-------|
| Test Scenarios | 10 (Registration 5 / Login 5) |
| Test Cases | 15 (Registration 8 / Login 7) |
| Positive Test Cases | 5 |
| Negative Test Cases | 10 |
| Requirements ที่ครอบคลุม | R-01 ถึง R-08 (ครบทุกข้อ) |

## 🧾 Example Test Case

**TC-REG-005 — สมัครสมาชิกด้วย Email ผิดรูปแบบ (Negative)**

| ฟิลด์ | รายละเอียด |
|-------|------------|
| Test Data | Email: `testgmail.com` (ไม่มี @), ช่องอื่นถูกต้องครบ |
| Steps | 1) เปิดหน้า Registration → 2) กรอก Name → 3) กรอก Email ที่ผิดรูปแบบ → 4) กรอก Password/Confirm → 5) กด Register |
| Expected Result | แจ้งเตือน "รูปแบบ Email ไม่ถูกต้อง" และไม่สมัครสำเร็จ |
| Actual Result | ระบบ**ไม่แจ้งเตือน** และสมัครสำเร็จด้วย Email ที่ผิดรูปแบบ |
| Status | ❌ **FAIL** → รายงานเป็น BUG-001 |

## 🐞 Bugs Found (3)

| Bug ID | ชื่อ Bug | Severity | Status |
|--------|----------|----------|--------|
| BUG-003 | สมัครด้วย Email ซ้ำ แล้วหน้าเว็บว่าง (Blank Page) | 🔴 High | Open |
| BUG-001 | ระบบยอมให้สมัครด้วย Email ที่ไม่มีเครื่องหมาย @ | 🟡 Medium | Open |
| BUG-002 | Login โดยไม่กรอก Email แล้วไม่มีข้อความแจ้งเตือนใด ๆ | 🟢 Low | Open |

## 📈 Test Results

| รายการ | จำนวน |
|--------|-------|
| Test Cases ทั้งหมด | 15 |
| ✅ Passed | **12** |
| ❌ Failed | **3** |
| Pass Rate | **80%** |
| Bugs | 3 (High 1 / Medium 1 / Low 1) |

**สรุป:** ระบบทำงานตาม Requirement ส่วนใหญ่ — ฟังก์ชันหลักผ่านทั้งหมด (Positive 5/5) แต่พบปัญหา 3 จุดที่ควรแก้ไขก่อนใช้งานจริง โดยเฉพาะ **BUG-003 (High)** ที่ทำให้ผู้ใช้งงว่าสมัครสำเร็จหรือไม่ **คำแนะนำ:** แก้ BUG-003 ก่อน แล้วทดสอบซ้ำ (Regression Testing) เคสที่เคย FAIL ทั้ง 3 เคส

## 💡 What I Learned

- การอ่าน Requirement และออกแบบ **Test Scenario** ให้ครอบคลุมทุกฟังก์ชัน
- การเขียน **Test Case** ที่ดี — มี Test Data, Steps และ Expected Result ชัดเจน ใครก็รันตามได้
- การคิด **Positive และ Negative Cases** ให้ครบ ไม่ทดสอบแค่กรณีที่ข้อมูลถูกต้อง
- การเขียน **Bug Report** ที่มี Steps to Reproduce ชัดจนนักพัฒนาตามทำซ้ำได้
- การกำหนด **Severity/Priority** ของ Bug และตัดสินว่าตัวไหนต้องแก้ก่อน
- การสรุปผลเป็น **Test Summary Report** ให้ทีมเข้าใจคุณภาพของระบบได้เร็ว

## 📁 Project Structure

```
docs/
├── 01_Test_Scenarios.md        Test Scenarios 10 รายการ + Requirements (R-01 – R-08)
├── 02_Test_Cases.md            Test Cases 15 เคส พร้อม Steps และผลการทดสอบ
├── 03_Positive_Testing.md      Positive Testing — นิยาม + 5 เคส
├── 04_Negative_Testing.md      Negative Testing — นิยาม + 5 เคส
├── 05_Bug_Reports.md           Bug Reports 3 รายการ (High/Medium/Low)
└── 06_Test_Summary.md          Test Summary Report
Login_Registration_Test_Suite.xlsx   ชุดทดสอบทั้งหมดในไฟล์ Excel (4 ชีต)
```

> 💡 เปิดไฟล์ `.xlsx` ด้วย Excel หรือนำเข้า Google Sheets ได้ทันที

---

### 🔗 Portfolio อื่น ๆ

- [E-Commerce Software Testing](https://github.com/Supitsarasp/e-commerce-software-testing) — Full QA Project (Test Plan, API, SQL, Automation)
- [Todo API Testing Portfolio](https://github.com/Supitsarasp/todo-api-testing-portfolio) — API Testing ด้วย pytest
