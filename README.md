Login & Registration Testing
ในโปรเจกต์นี้จะทดลองทดสอบระบบ สมัครสมาชิกและ Login ของเว็บไซต์ตัวอย่าง โดยเน้นการทดสอบแบบ Manual Testing และไม่ได้เขียนโปรแกรม

ทำอะไรในโปรเจกต์นี้

สิ่งที่ทดสอบมี 2 ส่วนหลัก

Registration

กรอกชื่อ
กรอก Email
กรอก Password
กรอก Confirm Password
กดสมัครสมาชิก

Login

กรอก Email
กรอก Password
กด Login

โดยจะลองทั้งกรณีที่กรอกข้อมูลถูกต้องและกรอกข้อมูลผิด เพื่อดูว่าระบบทำงานเป็นไปตามที่ควรจะเป็นหรือไม่

สิ่งที่ได้ทำ
เขียน Test Scenario 10 รายการ
เขียน Test Case 15 เคส
ทดสอบ Positive Case
ทดสอบ Negative Case
บันทึกผลการทดสอบ
เขียน Bug Report จากปัญหาที่พบ
สรุปผลการทดสอบ
ตัวอย่างการทดสอบ

Login ด้วยข้อมูลที่ถูกต้อง

กรอก Email และ Password ที่ถูกต้อง แล้วกด Login

Expected Result:
ผู้ใช้สามารถเข้าสู่ระบบได้

นอกจากนี้ยังมีการลองกรณีอื่น ๆ เช่น Password ผิด, ไม่กรอก Email หรือกรอก Email ไม่ถูกต้อง

ผลการทดสอบ
รายการ	จำนวน
Test Scenario	10
Test Case	15
Passed	12
Failed	3
Bug ที่พบ	3

Pass Rate: 80%

จากการทดสอบพบว่าระบบสามารถทำงานได้ตามที่กำหนดในหลายส่วน แต่ยังพบปัญหา 3 จุดที่ควรแก้ไข

Bug ที่พบ

ตัวอย่าง Bug ที่พบคือ เมื่อสมัครสมาชิกด้วย Email ที่มีอยู่แล้ว ระบบแสดงหน้าเว็บว่าง แทนที่จะแจ้งเตือนผู้ใช้ว่า Email นี้ถูกใช้งานแล้ว

รายละเอียดของ Bug และขั้นตอนการทดสอบอยู่ในไฟล์ Bug Reports

Tools ที่ใช้
Excel
Google Sheets
Google Chrome
Project Files
Login-Registration-Testing/
│
├── Test_Scenarios
├── Test_Cases
├── Positive_Testing
├── Negative_Testing
├── Bug_Reports
├── Test_Summary
└── Login_Registration_Test_Suite.xlsx
สิ่งที่ได้เรียนรู้

โปรเจกต์นี้ทำให้ได้ฝึกตั้งแต่การอ่าน Requirement แล้วนำมาคิด Test Case รวมถึงการลองคิดกรณีที่ผู้ใช้อาจกรอกข้อมูลผิด และการเขียน Bug Report ให้คนอื่นเข้าใจปัญหาได้ง่ายขึ้น

เป็นโปรเจกต์แรกที่ทำเพื่อฝึกด้าน Software Testing และนำไปใช้เป็นส่วนหนึ่งของ Portfolio สำหรับสมัครฝึกงาน
> ไฟล์ `Login_Registration_Test_Suite.xlsx` เปิดได้ด้วย Excel หรือนำเข้า Google Sheets ได้ทันที
