# E-Learning Platform

## 📖 Project Overview

This E-Learning Platform is a **web application** designed for students, teachers, and admins. It allows:

- Students to register, login, browse courses, purchase courses, and access content.  
- Teachers to upload courses, manage them, and track enrolled students.  
- Admins to manage users, approve courses, track payments, and generate reports.

The platform includes a **payment tracking system** for course purchases.

---

## 🛠️ Tech Stack

**Frontend:**  
- React.js (UI Components)  
- React Router (Navigation)  
- CSS / Tailwind / Bootstrap (Styling)

**Backend:**  
- Node.js + Express.js (API)  
- JWT Authentication (Secure login)

**Database:**  
- MongoDB (Users, Courses, Payments)

**Optional Tools / APIs:**  
- Stripe / Razorpay (Online payment)  
- AWS S3 / Cloudinary (Course file storage)

---

## 🧩 Features & Modules

### 1. Student Module
- Register & login  
- Browse available courses  
- Purchase courses (manual or online)  
- Access purchased courses  
- Track learning progress

### 2. Teacher Module
- Register & login  
- Upload courses (videos, PDFs, quizzes)  
- Manage own courses  
- Track enrolled students  
- View course payment summary

### 3. Admin Module
- Admin login  
- Approve/reject teacher-uploaded courses  
- Manage all users  
- Track payments and purchases  
- Generate reports (e.g., popular courses)

---

## 🗂 Database Schema (Example)

### Users
```json
{
  "_id": "unique_id",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "hashed_password",
  "role": "student | teacher | admin"
}
