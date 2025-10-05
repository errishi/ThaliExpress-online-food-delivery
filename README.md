# 🍛 ThaliExpress

ThaliExpress is an online food delivery platform inspired by India’s traditional thali culture — offering wholesome meals with multiple dishes on a single platter.

---

## 🚀 Features
- 🥘 Browse diverse Indian cuisines  
- 🛒 Add items to cart  
- 💳 Secure Stripe payment integration  
- 📦 Track order status (Processing → Ready to Ship → Out for Delivery → Delivered)  
- 👤 User authentication using JWT  
- ⚙️ Admin panel for managing menu & orders  

---

## 🧰 Tech Stack
**Frontend:** React, Axios, CSS  
**Backend:** Node.js, Express.js, MongoDB, JWT, Stripe  
**Database:** MongoDB Atlas  

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/errishi/ThaliExpress-online-food-delivery.git
   cd ThaliExpress

2. Install dependencies:
   ```bash
   npm install

4. Create a .env file in the root directory:
   ```bash
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   STRIPE_SECRET_KEY=your_stripe_key

4. Start the backend server:(if nodemon is install)
   ```bash
   nodemon server.js

6. Start the frontend:
   ```bash
   cd frontend
   npm run dev
