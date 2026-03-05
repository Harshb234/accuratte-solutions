# Accuratte Solutions 🚀

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

Accuratte Solutions is a modern, high-performance corporate web application designed to showcase enterprise-grade solutions with a premium user experience. Built with a focus on speed, aesthetics, and user engagement, the platform features seamless animations and a fully responsive design.

## ✨ Features

- **Dynamic Homepage**: Captivating hero section with integrated process transitions and CTA modules.
- **Enterprise Services**: Comprehensive breakdown of service offerings with high-impact visuals.
- **Case Studies**: In-depth showcase of successful client projects and performance metrics.
- **Interactive Auth**: Secure Login and Sign Up flows with integrated authentication context.
- **Premium UI/UX**: Powered by Framer Motion for smooth transitions and Tailwind CSS for a modern, mesh-gradient aesthetic.
- **Responsive Navigation**: State-of-the-art navigation bar with mobile optimization and "Scroll to Top" functionality.

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Backend**: Node.js & Express
- **Database**: MongoDB (via Mongoose)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS / Vanilla CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Routing**: React Router DOM v6
- **Context API**: Custom Auth Provider for state management

## 📂 Project Structure

```text
accuratte-solutions/
├── server/             # Node.js/Express Backend
│   ├── config/         # Database configuration
│   ├── middleware/     # Auth & validation middleware
│   ├── models/         # Database schemas (Mongoose)
│   ├── routes/         # API endpoints
│   └── server.js       # Entry point
├── src/                # React Frontend
│   ├── components/     # Reusable UI components
│   ├── context/        # React Context (Auth, etc.)
│   ├── pages/          # Main application pages
│   ├── App.jsx         # Main application component & routes
│   └── main.jsx        # Entry point
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

### Installation

1. Install Frontend dependencies:
   ```bash
   npm install
   ```

2. Install Backend dependencies:
   ```bash
   cd server
   npm install
   ```

3. Configure Environment:
   - Create `server/.env` based on the provided defaults (MongoDB URI, JWT Secret).

### Running the Application

**Run Backend (from root):**
```bash
cd server
npm run dev
```

**Run Frontend (from root):**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📄 License

This project is [Private](LICENSE). All rights reserved.

---


