# Login & Registration Testing — Manual Testing Portfolio

โปรเจกต์ Manual Testing สำหรับนักศึกษา / ผู้เริ่มต้นสาย QA — ทดสอบระบบสมัครสมาชิกและเข้าสู่ระบบ (Login & Registration) ของเว็บไซต์ตัวอย่าง ครบตั้งแต่ Scenario → Test Case → ทดสอบ → Bug Report → สรุปผล โดยไม่มีการเขียนโค้ด

## Project Overview

ทดสอบเว็บไซต์ตัวอย่างที่มี 2 หน้า คือ Registration (Name, Email, Password, Confirm Password) และ Login (Email, Password) โดยออกแบบ Test Scenario และ Test Case ครอบคลุมทั้ง Positive และ Negative Testing จากนั้นทดสอบด้วยตนเองผ่าน Web Browser บันทึกผล รายงาน Bug และสรุปผลการทดสอบ เพื่อฝึกกระบวนการทดสอบซอฟต์แวร์ตั้งแต่ต้นจนจบเหมือนที่ QA ทำในงานจริง

## My Role

- Software Tester

## Testing

- Manual Testing
- Functional Testing
- Positive Testing
- Negative Testing

## Tools

- Excel / Google Sheets
- Web Browser (Chrome)

## สิ่งที่ทำในโปรเจกต์นี้

1. อ่าน Requirement และออกแบบ **Test Scenario** 10 รายการ
2. เขียน **Test Cases** 15 เคส พร้อม Test Data, Steps, Expected Result
3. ทดสอบ **Positive Testing** (5 เคส) และ **Negative Testing** (10 เคส)
4. บันทึกผลและเขียน **Bug Report** 3 รายการ ตามรูปแบบมาตรฐาน
5. สรุปผลใน **Test Summary Report**

## What I Learned

- การออกแบบ Test Scenario จาก Requirement
- การเขียน Test Case ให้ครบถ้วน (Test Data, Steps, Expected Result)
- การทดสอบ Positive Case และ Negative Case
- การเขียน Bug Report ที่มี Steps to Reproduce ชัดเจน
- การกำหนด Severity ของ Bug
- การสรุปผลการทดสอบ (Test Summary) ให้ทีมเข้าใจ

## Test Results

| รายการ | จำนวน |
|--------|-------|
| Test Scenarios | 10 |
| Test Cases | 15 |
| Passed | 12 |
| Failed | 3 |
| Bugs Found | 3 (High 1 / Medium 1 / Low 1) |
| Pass Rate | 80% |

**สรุป:** ระบบสามารถทำงานตาม Requirement ส่วนใหญ่ได้ (ฟังก์ชันหลักผ่านทั้งหมด) แต่พบปัญหา 3 จุดที่ควรแก้ไขก่อนนำระบบไปใช้งานจริง — โดยเฉพาะ BUG-003 (หน้าเว็บว่างเมื่อสมัครด้วย Email ซ้ำ, Severity: High) ที่ควรแก้เป็นอันดับแรก

## โครงสร้างโปรเจกต์

```
docs/
├── 01_Test_Scenarios.md      Test Scenario 10 รายการ + Requirements
├── 02_Test_Cases.md          Test Cases 15 เคส (Positive 5 / Negative 10)
├── 03_Positive_Testing.md    ตัวอย่าง Positive Testing 5 เคส
├── 04_Negative_Testing.md    ตัวอย่าง Negative Testing 5 เคส
├── 05_Bug_Reports.md         Bug Report 3 รายการ
└── 06_Test_Summary.md        สรุปผลการทดสอบ
Login_Registration_Test_Suite.xlsx   ไฟล์ Excel รวมชุดทดสอบทั้งหมด
```

> ไฟล์ `Login_Registration_Test_Suite.xlsx` เปิดได้ด้วย Excel หรือนำเข้า Google Sheets ได้ทันที
