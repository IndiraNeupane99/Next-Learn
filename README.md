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
backend/

│
├── controllers/          # Business logic for routes
│   ├── authController.js       # Login/Register logic
│   ├── courseController.js     # Create, update, list courses
│   ├── paymentController.js    # Track course payments
│   └── userController.js       # Manage students, teachers, admin
│
├── models/               # Database schemas
│   ├── User.js           # Student, Teacher, Admin schema
│   ├── Course.js         # Course schema
│   └── Payment.js        # Payment schema
│
├── routes/               # API endpoints
│   ├── authRoutes.js     # /api/auth
│   ├── courseRoutes.js   # /api/courses
│   ├── paymentRoutes.js  # /api/payments
│   └── userRoutes.js     # /api/users
│
├── middlewares/          # Auth & validation middlewares
│   ├── authMiddleware.js     # JWT verification
│   └── roleMiddleware.js     # Role-based access
│
├── utils/                # Utility functions
│   └── email.js          # Optional email notifications
│
├── config/               # Config files
│   └── db.js             # MongoDB connection
│
├── server.js             # Express server setup
└── package.json


frontend/
│
├── public/
│   └── index.html        # Main HTML file
│
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── CourseCard.js
│   │   └── PaymentForm.js
│   │
│   ├── pages/            # Main pages
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── StudentDashboard.js
│   │   ├── TeacherDashboard.js
│   │   ├── AdminDashboard.js
│   │   ├── CourseDetail.js
│   │   └── PurchaseSuccess.js
│   │
│   ├── services/         # API calls
│   │   ├── authService.js
│   │   ├── courseService.js
│   │   └── paymentService.js
│   │
│   ├── context/          # React Context for auth & state
│   │   └── AuthContext.js
│   │
│   ├── App.js
│   ├── index.js
│   └── styles/           # CSS / Tailwind / Bootstrap
│       └── main.css
│
└── package.json
