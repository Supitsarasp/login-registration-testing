# Demo App — เว็บทดสอบ Login & Registration

เว็บไซต์ตัวอย่างสำหรับรันชุดทดสอบในโปรเจกต์นี้จริง ๆ — สร้างขึ้นให้พฤติกรรมตรงกับ Test Cases ทั้ง 15 เคสใน `docs/02_Test_Cases.md` และ**ปลูก bug จริง 3 ตัว**ตาม Bug Report (BUG-001, BUG-002, BUG-003) เพื่อให้ผู้เรียนได้ฝึกหา bug เหมือนงาน QA จริง

> ⚠️ เว็บนี้เป็น **แซนด์บ็อกซ์สำหรับฝึกทดสอบ** — เก็บข้อมูลใน localStorage ของเบราว์เซอร์ (ไม่มี server/database) และมี bug ถูกปลูกไว้โดยตั้งใจ ห้ามนำ pattern ไปใช้ทำระบบจริง

## เปิดใช้งาน

- **ออนไลน์ (GitHub Pages):** ลิงก์ใน README หลักของ repo
- **ออฟไลน์:** ดับเบิลคลิกไฟล์ `register.html` เพื่อเปิดในเบราว์เซอร์ได้เลย (ไม่ต้องติดตั้งอะไร)

## หน้าเว็บ

| ไฟล์ | หน้า | ฟีเจอร์ |
|------|------|---------|
| register.html | Registration | Name, Email, Password, Confirm Password, ปุ่ม Register |
| login.html | Login | Email, Password, ปุ่ม Login |
| dashboard.html | Dashboard | แสดงชื่อผู้ใช้หลัง Login สำเร็จ + ปุ่ม Logout |

ลิงก์ "Reset demo data" ที่ท้ายฟอร์มใช้ล้างบัญชีที่สมัครไว้ทั้งหมดเพื่อเริ่มทดสอบรอบใหม่

## วิธีรันชุดทดสอบ

1. เปิดหน้า Registration แล้วไล่ทำตาม Steps ใน `docs/02_Test_Cases.md` ทีละเคส (เริ่มจาก TC-REG-001)
2. เทียบสิ่งที่เกิดขึ้นกับ Expected Result แล้วบันทึก Actual Result + Status
3. 3 เคสจะ FAIL และเจอ bug ตามรายงาน: TC-REG-005 (BUG-001), TC-LOGIN-004 (BUG-002), TC-REG-008 (BUG-003)
4. ต้องการพิสูจน์ว่าแอปตรงเอกสารทุกเคส? รันสคริปต์ตรวจสอบอัตโนมัติ:

```
node demo-app/verify.js
```

ผลลัพธ์: `harness checks passed: 15/15 — ALL BEHAVIOR MATCHES DOCUMENTATION`

## โครงสร้างไฟล์

```
demo-app/
├── register.html      หน้าสมัครสมาชิก
├── login.html         หน้าเข้าสู่ระบบ
├── dashboard.html     หน้าหลักหลัง login
├── css/style.css      สไตล์
├── js/app.js          ตรรกะทั้งหมด (ระบุจุดปลูก bug ด้วย comment BUG-001/002/003)
└── verify.js          สคริปต์ verify ว่าพฤติกรรมตรง Test Cases 15 เคส
```

## Bug ที่ปลูกไว้ (อย่าอ่านก่อนทดสอบ ถ้าอยากฝึกหาเอง!)

<details>
<summary>คลิกเพื่อดูเฉลย bug</summary>

| Bug | จุดที่ปลูก | พฤติกรรม |
|-----|-----------|-----------|
| BUG-001 | `js/app.js` — ไม่มีการตรวจรูปแบบ Email ในหน้า Register | สมัครด้วย `testgmail.com` (ไม่มี @) ได้สำเร็จ |
| BUG-002 | `js/app.js` — หน้า Login ไม่แจ้งเตือนเมื่อ Email ว่าง | กด Login โดยไม่กรอก Email แล้วเงียบ ไม่มีอะไรเกิดขึ้น |
| BUG-003 | `js/app.js` — Email ซ้ำแล้วเคลียร์หน้าเว็บแทนการแจ้งเตือน | สมัครด้วย Email ซ้ำ หน้าเว็บกลายเป็นหน้าว่าง (Blank Page) |

</details>
