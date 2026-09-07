# 05 — Bug Reports (3 Bugs)

พบข้อผิดพลาดจากการทดสอบ 3 รายการ จาก Test Cases ที่ FAIL ทั้งหมด 3 เคส

## BUG-001 — ระบบอนุญาตให้สมัครสมาชิกด้วย Email ที่ไม่ถูกต้อง

| ฟิลด์ | รายละเอียด |
|-------|------------|
| Bug ID | BUG-001 |
| Bug Title | ระบบอนุญาตให้สมัครสมาชิกด้วย Email ที่ไม่ถูกต้อง (ไม่มีเครื่องหมาย @) |
| Related Test Case | TC-REG-005 |
| Steps to Reproduce | 1) เปิดหน้า Registration 2) กรอก Name 3) กรอก Email เป็น testgmail.com 4) กรอก Password และ Confirm Password 5) กดปุ่ม Register |
| Expected Result | ระบบควรแจ้งเตือนว่ารูปแบบ Email ไม่ถูกต้อง และไม่ให้สมัครสำเร็จ |
| Actual Result | ระบบไม่แจ้งเตือน และสมัครสมาชิกสำเร็จด้วย Email ที่ผิดรูปแบบ |
| Severity | Medium |
| Priority | Medium |
| Status | Open |

## BUG-002 — ไม่แสดงข้อความแจ้งเตือนเมื่อไม่กรอก Email ในหน้า Login

| ฟิลด์ | รายละเอียด |
|-------|------------|
| Bug ID | BUG-002 |
| Bug Title | กดปุ่ม Login โดยไม่กรอก Email แล้วไม่มีข้อความแจ้งเตือน และไม่มีอะไรเกิดขึ้น |
| Related Test Case | TC-LOGIN-004 |
| Steps to Reproduce | 1) เปิดหน้า Login 2) เว้นช่อง Email ว่าง 3) กรอก Password 4) กดปุ่ม Login |
| Expected Result | ระบบควรแจ้งเตือน "กรุณากรอก Email" เพื่อบอกผู้ใช้ว่าข้อมูลยังไม่ครบ |
| Actual Result | ไม่มีข้อความแจ้งเตือนใด ๆ กดปุ่มแล้วเหมือนไม่มีอะไรเกิดขึ้น ผู้ใช้ไม่ทราบสาเหตุ |
| Severity | Low |
| Priority | Low |
| Status | Open |

## BUG-003 — สมัครสมาชิกด้วย Email ซ้ำ แล้วหน้าเว็บว่าง (Blank Page)

| ฟิลด์ | รายละเอียด |
|-------|------------|
| Bug ID | BUG-003 |
| Bug Title | สมัครสมาชิกด้วย Email ที่มีในระบบแล้ว ระบบแสดงหน้าเว็บว่าง (Blank Page) แทนข้อความแจ้งเตือน |
| Related Test Case | TC-REG-008 |
| Steps to Reproduce | 1) สมัครสมาชิกด้วย Email somchai.test@gmail.com ให้สำเร็จ 2) สมัครอีกครั้งด้วย Email เดิม 3) กดปุ่ม Register |
| Expected Result | ระบบควรแจ้งเตือน "Email นี้ถูกใช้งานแล้ว" และไม่ให้สมัครซ้ำ |
| Actual Result | หน้าเว็บกลายเป็นหน้าว่าง (Blank Page) ไม่แสดงข้อความใด ๆ ผู้ใช้ไม่ทราบว่าสมัครสำเร็จหรือไม่ |
| Severity | High |
| Priority | High |
| Status | Open |

## สรุป Bugs

| Bug ID | Severity | Status |
|--------|----------|--------|
| BUG-003 | High | Open |
| BUG-001 | Medium | Open |
| BUG-002 | Low | Open |
