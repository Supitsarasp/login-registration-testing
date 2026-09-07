# 02 — Test Cases (15 Test Cases)

ชุดทดสอบครอบคลุม Registration 8 เคส และ Login 7 เคส (Positive 5 / Negative 10)
ไฟล์ Excel ฉบับเต็ม: `Login_Registration_Test_Suite.xlsx` (ชีต Test Cases)

## Registration

### TC-REG-001 — สมัครสมาชิกด้วยข้อมูลถูกต้องทุกช่อง (Positive)
- **Test Data:** Name: Somchai Sukhumvit | Email: somchai.test@gmail.com | Password: Test1234 | Confirm: Test1234
- **Steps:** 1) เปิดหน้า Registration 2) กรอก Name 3) กรอก Email 4) กรอก Password 5) กรอก Confirm Password 6) กดปุ่ม Register
- **Expected Result:** สมัครสมาชิกสำเร็จ แสดงข้อความยืนยันการสมัคร และนำบัญชีไป Login ได้
- **Actual Result:** สมัครสำเร็จ ขึ้นข้อความ "Register Success"
- **Status:** PASS

### TC-REG-002 — สมัครสมาชิกบัญชีที่สอง (Positive)
- **Test Data:** Name: Mali Jaidee | Email: mali.test@gmail.com | Password: Test1234 | Confirm: Test1234
- **Steps:** 1) เปิดหน้า Registration 2) กรอกข้อมูลบัญชีใหม่ให้ครบ 3) กดปุ่ม Register
- **Expected Result:** รองรับผู้ใช้หลายบัญชี สมัครบัญชีที่สองสำเร็จ
- **Actual Result:** สมัครสำเร็จ
- **Status:** PASS

### TC-REG-003 — ไม่กรอก Name (Negative)
- **Test Data:** Name: (ว่าง) | Email: test01@gmail.com | Password: Test1234 | Confirm: Test1234
- **Steps:** 1) เปิดหน้า Registration 2) เว้นช่อง Name ว่าง 3) กรอกช่องที่เหลือให้ครบ 4) กดปุ่ม Register
- **Expected Result:** แสดงข้อความแจ้งเตือน "กรุณากรอกชื่อ" และไม่สมัครสำเร็จ (R-02)
- **Actual Result:** แจ้งเตือน "Please enter your name" ตามที่คาดหวัง
- **Status:** PASS

### TC-REG-004 — ไม่กรอก Email (Negative)
- **Test Data:** Name: Somchai | Email: (ว่าง) | Password: Test1234 | Confirm: Test1234
- **Steps:** 1) เปิดหน้า Registration 2) เว้นช่อง Email ว่าง 3) กรอกช่องที่เหลือให้ครบ 4) กดปุ่ม Register
- **Expected Result:** แสดงข้อความแจ้งเตือน "กรุณากรอก Email" และไม่สมัครสำเร็จ (R-02)
- **Actual Result:** แจ้งเตือน "Please enter email" ตามที่คาดหวัง
- **Status:** PASS

### TC-REG-005 — Email ผิดรูปแบบ ไม่มีเครื่องหมาย @ (Negative)
- **Test Data:** Name: Somchai | Email: testgmail.com | Password: Test1234 | Confirm: Test1234
- **Steps:** 1) เปิดหน้า Registration 2) กรอก Name 3) กรอก Email เป็น testgmail.com (ไม่มี @) 4) กรอก Password และ Confirm 5) กดปุ่ม Register
- **Expected Result:** แสดงข้อความแจ้งเตือนว่ารูปแบบ Email ไม่ถูกต้อง และไม่สมัครสำเร็จ (R-03)
- **Actual Result:** ระบบไม่แจ้งเตือน และสมัครสมาชิกสำเร็จด้วย Email ที่ผิดรูปแบบ
- **Status:** FAIL (Bug: BUG-001)

### TC-REG-006 — Password สั้นกว่า 6 ตัวอักษร (Negative)
- **Test Data:** Name: Somchai | Email: test02@gmail.com | Password: abc1 | Confirm: abc1
- **Steps:** 1) เปิดหน้า Registration 2) กรอกข้อมูลครบ โดย Password ใช้ abc1 (4 ตัว) 3) กดปุ่ม Register
- **Expected Result:** แจ้งเตือน "Password ต้องมีอย่างน้อย 6 ตัวอักษร" และไม่สมัครสำเร็จ (R-04)
- **Actual Result:** แจ้งเตือนตามที่คาดหวัง
- **Status:** PASS

### TC-REG-007 — Password ไม่ตรงกับ Confirm Password (Negative)
- **Test Data:** Name: Somchai | Email: test03@gmail.com | Password: Test1234 | Confirm: Test9999
- **Steps:** 1) เปิดหน้า Registration 2) กรอกข้อมูลครบ โดย Confirm Password ต่างจาก Password 3) กดปุ่ม Register
- **Expected Result:** แจ้งเตือน "Password ไม่ตรงกัน" และไม่สมัครสำเร็จ (R-05)
- **Actual Result:** แจ้งเตือน "Passwords do not match" ตามที่คาดหวัง
- **Status:** PASS

### TC-REG-008 — สมัครด้วย Email ที่มีในระบบแล้ว (Negative)
- **Test Data:** Name: Somchai B | Email: somchai.test@gmail.com (สมัครแล้วจาก TC-REG-001) | Password: Test1234 | Confirm: Test1234
- **Steps:** 1) เปิดหน้า Registration 2) กรอกข้อมูลครบโดยใช้ Email ที่สมัครไปแล้ว 3) กดปุ่ม Register
- **Expected Result:** แจ้งเตือน "Email นี้ถูกใช้งานแล้ว" และไม่สมัครสำเร็จ (R-06)
- **Actual Result:** เกิด error และหน้าเว็บว่าง (Blank page) ไม่มีข้อความแจ้งเตือนที่เข้าใจได้
- **Status:** FAIL (Bug: BUG-003)

## Login

### TC-LOGIN-001 — Login ด้วย Email และ Password ที่ถูกต้อง (Positive)
- **Test Data:** Email: somchai.test@gmail.com | Password: Test1234
- **Steps:** 1) เปิดหน้า Login 2) กรอก Email 3) กรอก Password 4) กดปุ่ม Login
- **Expected Result:** เข้าสู่ระบบสำเร็จ ไปที่หน้าหลัก (Dashboard)
- **Actual Result:** เข้าสู่ระบบสำเร็จ ไปที่หน้า Dashboard
- **Status:** PASS

### TC-LOGIN-002 — Login สำเร็จ ออกจากระบบ แล้ว Login ซ้ำได้อีกครั้ง (Positive)
- **Test Data:** Email: somchai.test@gmail.com | Password: Test1234
- **Steps:** 1) Login สำเร็จ 2) กด Logout 3) Login อีกครั้งด้วยข้อมูลเดิม
- **Expected Result:** Logout ได้ และ Login ซ้ำได้สำเร็จทุกครั้ง
- **Actual Result:** Logout และ Login ซ้ำได้ตามปกติ
- **Status:** PASS

### TC-LOGIN-003 — ผู้ใช้ที่เพิ่งสมัครใหม่ Login ได้ทันที (Positive)
- **Test Data:** Email: mali.test@gmail.com (เพิ่งสมัครจาก TC-REG-002) | Password: Test1234
- **Steps:** 1) สมัครสมาชิกใหม่ให้สำเร็จ 2) ไปหน้า Login 3) Login ด้วยบัญชีที่เพิ่งสมัคร
- **Expected Result:** ใช้บัญชีใหม่ Login ได้ทันทีโดยไม่ต้องรอ
- **Actual Result:** Login สำเร็จทันที
- **Status:** PASS

### TC-LOGIN-004 — Login โดยไม่กรอก Email (Negative)
- **Test Data:** Email: (ว่าง) | Password: Test1234
- **Steps:** 1) เปิดหน้า Login 2) เว้นช่อง Email ว่าง 3) กรอก Password 4) กดปุ่ม Login
- **Expected Result:** แจ้งเตือน "กรุณากรอก Email" และไม่เข้าสู่ระบบ (R-02, R-08)
- **Actual Result:** ไม่มีข้อความแจ้งเตือน กดปุ่ม Login แล้วไม่มีอะไรเกิดขึ้น ผู้ใช้งงว่าเกิดอะไรขึ้น
- **Status:** FAIL (Bug: BUG-002)

### TC-LOGIN-005 — Login โดยไม่กรอก Password (Negative)
- **Test Data:** Email: somchai.test@gmail.com | Password: (ว่าง)
- **Steps:** 1) เปิดหน้า Login 2) กรอก Email 3) เว้นช่อง Password ว่าง 4) กดปุ่ม Login
- **Expected Result:** แจ้งเตือน "กรุณากรอก Password" และไม่เข้าสู่ระบบ (R-02, R-08)
- **Actual Result:** แจ้งเตือน "Please enter password" ตามที่คาดหวัง
- **Status:** PASS

### TC-LOGIN-006 — Login ด้วย Password ที่ผิด (Negative)
- **Test Data:** Email: somchai.test@gmail.com | Password: Wrong999
- **Steps:** 1) เปิดหน้า Login 2) กรอก Email ถูกต้อง 3) กรอก Password ที่ผิด 4) กดปุ่ม Login
- **Expected Result:** แจ้งเตือน "Email หรือ Password ไม่ถูกต้อง" และไม่เข้าสู่ระบบ (R-08)
- **Actual Result:** แจ้งเตือน "Invalid email or password" ตามที่คาดหวัง
- **Status:** PASS

### TC-LOGIN-007 — Login ด้วย Email ที่ยังไม่ได้สมัครสมาชิก (Negative)
- **Test Data:** Email: nobody.test@gmail.com (ไม่มีในระบบ) | Password: Test1234
- **Steps:** 1) เปิดหน้า Login 2) กรอก Email ที่ไม่เคยสมัคร 3) กรอก Password 4) กดปุ่ม Login
- **Expected Result:** แจ้งเตือนว่าไม่พบบัญชีผู้ใช้ และไม่เข้าสู่ระบบ (R-08)
- **Actual Result:** แจ้งเตือน "Account not found" ตามที่คาดหวัง
- **Status:** PASS

## สรุปตารางผลรวม

| ผลรวม | จำนวน |
|--------|-------|
| ทั้งหมด | 15 Test Cases |
| ผ่าน (PASS) | 12 |
| ไม่ผ่าน (FAIL) | 3 (TC-REG-005, TC-REG-008, TC-LOGIN-004) |
