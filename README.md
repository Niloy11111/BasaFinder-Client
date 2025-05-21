# BasaFinder Web Application

## Setup Instructions

### 1. Installation and Environment Setup

1. Add the following variables in your `.env` file:

   - `PORT`: The port number you want to run the application on.
   - `DATABASE_URL`: The MongoDB URI.

### 2. Install Dependencies

Run the following command to install the required npm dependencies:

```
npm install
```

### 3. Run the Project

Start the development server with the following command:

#### run project

```
npm run dev
```

## How to Run Locally

#### Live Deployment Link

[https://basa-finder-client-two.vercel.app/](https://basa-finder-client-two.vercel.app/)

### 1. Admin Credentials to access dashboard admin activities

#### 1. Admin Email: admin@gmail.com

#### 2. Admin Password: 12345678

## 🏠 Property Rental Management Web Application

Welcome to the Property Rental Management platform — a fully functional web application built with a multi-role user system: **Tenant**, **Landlord**, and **Admin**. Below is a clear and organized walkthrough of how the platform works based on your role.

---

### 🔑 Getting Started with Live Link

- First, **register** as either a **Tenant** or **Landlord**.
- After registration, **log in** to access your personalized dashboard and features.

---

### 👤 If You Are a Landlord:

- You’ll have access to a **Landlord Dashboard**.
- From there, you can:
  - ✅ **Create new property listings** by filling out details like title, rent, address, images, etc.
  - ✏️ **Edit** any of your existing properties to update information.
  - 🗑️ **Delete** properties that are no longer available.
- When tenants apply to your properties:
  - 📩 You'll see all incoming applications.
  - ✔️ You can **accept** or ❌ **reject** each application.
  - ☎️ Upon acceptance, your **phone number** will be shared with the tenant for further contact.

---

### 👤 If You Are a Tenant:

- You’ll have access to a **Tenant Dashboard**.
- You can:
  - 🌍 **Browse all available properties** listed by landlords.
  - 📍 Use the **interactive map** to visually explore locations.
  - 🎯 Apply **advanced filters** (e.g., price, type, location) to find your ideal property.
  - 📝 **Apply** directly to properties you’re interested in.
- Once your application is accepted by a landlord:
  - 📞 You’ll be able to see the landlord’s **phone number** to get in touch.

---

### 👨‍💼 If You Are an Admin:

- You’ll have access to an **Admin Dashboard**.
- You can:
  - 👥 **View and manage all users** (Landlords and Tenants).
  - 🏘️ **Monitor and manage all property listings** to ensure quality and compliance.

---

### ⚙️ Profile Management for All Users

- No matter your role, you can:
  - 🔐 Visit the **Settings** page.
  - 🖊️ **Edit your profile information**, including name, email, and more.

---

This application ensures a smooth interaction between property owners and seekers, while keeping the platform secure and manageable for administrators.

## 1. User Roles:

- **Admin**:

  - Manage users (activate/deactivate accounts).
  - Manage rental house listings (CRUD).
  - Oversee the platform for compliance and quality.

- **Landlord**:

  - Register, log in, and manage their profile.
  - Post new rental listings and manage existing ones.
  - View and respond to rental requests.
  - Approve requests and share contact info with tenants after payment is enabled.

- **Tenant**:
  - Register, log in, and manage their profile.
  - Search rental houses and submit rental requests.
  - Track request status and make payments upon approval.

---

## 2. Authentication:

- **Register**:
  - Users can register with name, email, password, and role (Landlord/Tenant).
- **Login**:
  - Authenticates users and issues a JWT token.
- **Logout**:
  - Clears token and redirects to login page.

---

## 3. Public Routes:

- **Home Page**:

  - Navbar: Logo, navigation links (Home, About Us, Listings), Login/Register.
  - Hero Section: Catchy headline, call-to-action button.
  - Search Filter: Search by location, price, and number of bedrooms.
  - Rental Listings: Display house cards with image, brief info, and “View Details” button.
  - Extra Sections: Testimonials, renting tips.
  - Footer: Contact info, terms, and social links.

- **All Listed Rental Houses Page**:

  - Search by location, price, bedrooms.
  - Filter dynamically and show rental cards with basic details.
  - "View Details" button navigates to full listing page.

- **Rental House Details Page**:

  - Show full rental info including description, images, rent, amenities, and location.
  - “Request Rental” button for tenants.

- **About Us Page**:
  - Mission, team info, and contact details.

---

## 4. Private Routes:

- **Admin Dashboard**:

  - View, edit, and delete all users.
  - Change user roles (Tenant ↔ Landlord).
  - View and manage all rental listings.

- **Landlord Dashboard**:

  - Add/Edit/Delete rental listings.
  - View rental requests with status.
  - Approve requests to enable payment option and provide phone number.

- **Tenant Dashboard**:

  - View submitted rental requests.
  - Track status (Pending/Approved/Rejected).
  - If approved, complete payment and view landlord contact.

- **Post Rental House** (Landlord Only):

  - Add location, description, images, rent, bedrooms, amenities.

- **Rental House Request Page** (Tenant Only):

  - Submit request with move-in date, duration, and message.
  - Accept terms before submission.

- **Edit Profile / Change Password**:
  - Update personal info or change password securely.

---

## 5. Tech Stack:

- **Frontend**:

  - Next.js, TypeScript
  - Tailwind CSS for styling

- **Backend**:

  - Node.js, Express.js
  - MongoDB with Mongoose
  - JWT for authentication
  - bcrypt for password security

- **Payment Gateway**:

  - (Pluggable): Stripe, ShurjoPay, etc.

- **Deployment**:
  - Frontend: Vercel/Netlify
  - Backend: Heroku/AWS/Render

---

## 6. Security & Access Control:

- Role-based access using JWT and middleware.
- Passwords hashed with bcrypt.
- Protected API routes for Admin, Landlord, and Tenant.
