# 01 — Test Scenarios

โปรเจกต์: Login & Registration Testing (Manual Testing)
ระบบที่ทดสอบ: เว็บไซต์ตัวอย่างที่มี 2 หน้า — Registration (Name, Email, Password, Confirm Password) และ Login (Email, Password)

## Requirement ของระบบ (สมมติ)

| ID | Requirement |
|----|-------------|
| R-01 | กรอกข้อมูลถูกต้องครบทุกช่องแล้วสมัครสมาชิกได้สำเร็จ |
| R-02 | ทุกช่องเป็นช่องบังคับกรอก (Required) — ไม่กรอกต้องแจ้งเตือน |
| R-03 | Email ต้องมีรูปแบบถูกต้อง (มี @ และ . เช่น test@gmail.com) |
| R-04 | Password ต้องมีความยาวอย่างน้อย 6 ตัวอักษร |
| R-05 | Password ต้องตรงกับ Confirm Password |
| R-06 | Email ที่สมัครต้องไม่ซ้ำกับ Email ที่มีในระบบแล้ว |
| R-07 | Login สำเร็จเมื่อ Email และ Password ถูกต้อง |
| R-08 | Login ไม่สำเร็จต้องแจ้งเตือนสาเหตุ และห้ามเข้าสู่ระบบ |

## Test Scenarios (10 Scenarios)

| Scenario ID | Module | Test Scenario | Type |
|-------------|--------|---------------|------|
| TS-01 | Registration | สมัครสมาชิกด้วยข้อมูลถูกต้องทุกช่อง | Positive |
| TS-02 | Registration | สมัครสมาชิกโดยไม่กรอก Email | Negative |
| TS-03 | Registration | สมัครสมาชิกด้วย Email ผิดรูปแบบ (ไม่มี @) | Negative |
| TS-04 | Registration | สมัครสมาชิกที่ Password ไม่ตรงกับ Confirm Password | Negative |
| TS-05 | Registration | สมัครสมาชิกด้วย Email ที่มีในระบบแล้ว | Negative |
| TS-06 | Login | Login ด้วย Email และ Password ที่ถูกต้อง | Positive |
| TS-07 | Login | Login ด้วย Password ที่ผิด | Negative |
| TS-08 | Login | Login โดยไม่กรอก Email | Negative |
| TS-09 | Login | Login โดยไม่กรอก Password | Negative |
| TS-10 | Login | Login ด้วย Email ที่ยังไม่ได้สมัครสมาชิก | Negative |
