# 04 — Negative Testing

## Negative Testing คืออะไร

Negative Testing คือการทดสอบโดยใช้ **ข้อมูลที่ไม่ถูกต้อง** (เช่น เว้นว่าง กรอกผิดรูปแบบ ใช้รหัสผ่านผิด) เพื่อตรวจสอบว่า **ระบบสามารถจัดการข้อผิดพลาดได้หรือไม่** — ระบบที่ดีต้องแสดงข้อความแจ้งเตือนที่เข้าใจง่าย และห้ามให้ทำรายการสำเร็จเมื่อข้อมูลไม่ถูกต้อง

## Negative Test Cases (5 Test Cases หลัก)

| Test Case ID | Test Case | Test Data | Expected Result | Status |
|--------------|-----------|-----------|-----------------|--------|
| TC-REG-004 | สมัครสมาชิกโดยไม่กรอก Email | Email: (ว่าง), ช่องอื่นครบ | แจ้งเตือน "กรุณากรอก Email" ไม่สมัครสำเร็จ | PASS |
| TC-LOGIN-005 | Login โดยไม่กรอก Password | Email: somchai.test@gmail.com, Password: (ว่าง) | แจ้งเตือน "กรุณากรอก Password" ไม่เข้าสู่ระบบ | PASS |
| TC-REG-005 | สมัครสมาชิกด้วย Email ผิดรูปแบบ | Email: testgmail.com (ไม่มี @) | แจ้งเตือน "รูปแบบ Email ไม่ถูกต้อง" ไม่สมัครสำเร็จ | FAIL (BUG-001) |
| TC-LOGIN-006 | Login ด้วย Password ที่ผิด | Email: somchai.test@gmail.com, Password: Wrong999 | แจ้งเตือน "Email หรือ Password ไม่ถูกต้อง" ไม่เข้าสู่ระบบ | PASS |
| TC-REG-007 | Password ไม่ตรงกับ Confirm Password | Password: Test1234, Confirm: Test9999 | แจ้งเตือน "Password ไม่ตรงกัน" ไม่สมัครสำเร็จ | PASS |

> ชุดทดสอบเต็มมี Negative Test Cases รวม 10 เคส (เพิ่มเติม: ไม่กรอก Name, Password สั้นกว่า 6 ตัว, Email ซ้ำ, ไม่กรอก Email ตอน Login, Login ด้วย Email ที่ยังไม่ได้สมัคร) — ดูรายละเอียดทั้งหมดใน `02_Test_Cases.md`

## สรุปผล Negative Testing

Negative Test Cases ทั้ง 10 เคส ผ่าน 8 เคส และไม่ผ่าน 2 เคส (TC-REG-005 Email ผิดรูปแบบ, TC-REG-008 Email ซ้ำ) พร้อม TC-LOGIN-004 ที่ไม่ผ่านเช่นกัน รวมเป็น 3 FAIL — ระบบจัดการข้อมูลผิดพลาดส่วนใหญ่ได้ดี แต่ยังมีจุดที่ต้องแก้ไข (ดู Bug Report)
