# 🚀 Milestone Learning – Frontend + CMS

This is the frontend implementation for the **Milestone Learning** platform, built as part of the onboarding task for **Flexforce.ai**. It is a responsive, pixel-perfect conversion of the provided Figma design and integrates with **Payload CMS Cloud** for dynamic content management.

---

## 📦 Tech Stack

| Tool          | Purpose                      |
|---------------|------------------------------|
| Vite + React  | Frontend Framework & Builder |
| TypeScript    | Static typing                |
| TailwindCSS   | Utility-first styling        |
| Payload CMS   | Headless CMS for content     |
| Vercel        | Hosting & Deployment         |

---

## ✨ Features

- ✅ Pixel-perfect Figma implementation
- ✅ CMS-integrated homepage content (testimonials, FAQs, articles, learning stages)
- ✅ Responsive across all screen sizes
- ✅ Login with Payload CMS Users
- ✅ Google/Apple button placeholders
- ✅ Graceful fallback for Sign Up (admin-controlled)
- ✅ Dynamic content pulled from CMS via REST API

---

## 📂 Folder Structure

```
src/
│
├── components/         # Reusable UI components (Navbar, Footer, etc.)
├── pages/              # Page-level components (Home, Login, Signup)
├── services/           # Payload API integration (payloadService.ts)
├── assets/             # Static files and image helpers
├── routes/             # Route config using react-router
└── App.tsx             # Root component
```

---

## 🔧 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/milestone-frontend.git
   cd milestone-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Setup environment variables**:
   Create a `.env` file:
   ```env
   VITE_PAYLOAD_API_BASE= CMS_API_URL
   ```

4. **Start the dev server**:
   ```bash
   npm run dev
   ```

---

## 🌐 Live URL

[Vercel Deployment →](https://milestone-lilac-six.vercel.app/)

---

## 👤 Auth Details (For Testing)

- Use the login form with an **existing CMS user**
- User logged in using cms api end point
- Token is saved in `localStorage` upon successful login

---

## ⚠️ Current Limitations

- Signup is disabled; only admin can create new users
- Google/Apple buttons are visual only (no auth yet)
- No role-based routing implemented

---
