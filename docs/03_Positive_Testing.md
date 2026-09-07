# 03 — Positive Testing

## Positive Testing คืออะไร

Positive Testing คือการทดสอบโดยใช้ **ข้อมูลที่ถูกต้อง** ตามที่ Requirement กำหนด แล้วคาดว่า **ระบบควรทำงานสำเร็จ** ตามปกติ เช่น กรอกข้อมูลครบถ้วนถูกต้องแล้วต้องสมัครสมาชิกได้ หรือ Login ด้วยรหัสผ่านที่ถูกต้องแล้วต้องเข้าสู่ระบบได้

## Positive Test Cases (5 Test Cases)

| Test Case ID | Test Case | Test Data | Expected Result | Status |
|--------------|-----------|-----------|-----------------|--------|
| TC-REG-001 | สมัครสมาชิกด้วยข้อมูลถูกต้องทุกช่อง | Name: Somchai Sukhumvit, Email: somchai.test@gmail.com, Password: Test1234, Confirm: Test1234 | สมัครสำเร็จ ขึ้นข้อความยืนยัน | PASS |
| TC-REG-002 | สมัครสมาชิกบัญชีที่สอง (ผู้ใช้หลายคน) | Name: Mali Jaidee, Email: mali.test@gmail.com, Password: Test1234, Confirm: Test1234 | สมัครสำเร็จ รองรับหลายบัญชี | PASS |
| TC-LOGIN-001 | Login ด้วย Email และ Password ที่ถูกต้อง | Email: somchai.test@gmail.com, Password: Test1234 | เข้าสู่ระบบสำเร็จ ไปหน้า Dashboard | PASS |
| TC-LOGIN-002 | Login สำเร็จ → Logout → Login ซ้ำอีกครั้ง | Email: somchai.test@gmail.com, Password: Test1234 | Logout และ Login ซ้ำได้ทุกครั้ง | PASS |
| TC-LOGIN-003 | ผู้ใช้ที่เพิ่งสมัครใหม่ Login ได้ทันที | Email: mali.test@gmail.com, Password: Test1234 | Login สำเร็จทันทีหลังสมัคร | PASS |

## สรุปผล Positive Testing

Positive Test Cases ทั้ง 5 เคส **ผ่านทั้งหมด (5/5 PASS)** — ฟังก์ชันหลักของระบบ (สมัครสมาชิกและเข้าสู่ระบบ) ทำงานได้ถูกต้องตาม Requirement เมื่อผู้ใช้ใช้งานอย่างถูกต้อง
