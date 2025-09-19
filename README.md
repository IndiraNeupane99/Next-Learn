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

**Backend / Database:**  
- **Firebase Authentication** – for secure login and role management  
- **Firebase Firestore** – store users, courses, and payments  

**Optional Tools / APIs:**  
- Stripe / Razorpay (Online payment)  
- Firebase Storage – for course videos/documents  

---

## 🧩 Features & Modules

### 1. Student Module
- Register & login via Firebase Authentication  
- Browse available courses  
- Purchase courses (manual or online)  
- Access purchased courses  
- Track learning progress

### 2. Teacher Module
- Register & login via Firebase Authentication  
- Upload courses (videos, PDFs, quizzes) to Firebase Storage  
- Manage own courses  
- Track enrolled students  
- View course payment summary

### 3. Admin Module
- Admin login via Firebase Authentication  
- Approve/reject teacher-uploaded courses  
- Manage all users (students & teachers)  
- Track payments and purchases  
- Generate reports (e.g., most popular courses)

---

## 🗂 Firebase Database Structure (Example)

### Users (Firestore Collection: `users`)
```json
{
  "uid": "firebase_user_id",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "student | teacher | admin"
}

frontend/
│
├── public/
│   └── index.html             # Main HTML file
│
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── CourseCard.js
│   │   └── PaymentForm.js
│   │
│   ├── pages/                 # Role-based pages
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── StudentDashboard.js
│   │   ├── TeacherDashboard.js
│   │   ├── AdminDashboard.js
│   │   ├── CourseDetail.js
│   │   └── PurchaseSuccess.js
│   │
│   ├── services/              # API calls to Firebase
│   │   ├── authService.js
│   │   ├── courseService.js
│   │   └── paymentService.js
│   │
│   ├── context/               # React Context for auth & global state
│   │   └── AuthContext.js
│   │
│   ├── firebase/              # Firebase config & helpers
│   │   └── config.js
│   │
│   ├── App.js
│   ├── index.js
│   └── styles/                # CSS / Tailwind / Bootstrap
│       └── main.css
│
└── package.json
