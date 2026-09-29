# 📊 Bireena TallyX

A modern web-based accounting and business management application inspired by traditional accounting workflows, with real-time reports, inventory management, and business analytics.

---

## 🌐 Live Demo

| Service | Link |
| :--- | :--- |
| **Frontend** | `ADD_YOUR_FRONTEND_URL_HERE` |
| **Backend API** | `ADD_YOUR_BACKEND_URL_HERE` |
| **GitHub Repository** | [https://github.com/Kumarchhotucoder/bi_reena_tallyX](https://github.com/Kumarchhotucoder/bi_reena_tallyX) |

> *Replace the placeholders above with your actual deployed URLs before submitting to 75way.*

---

## 📌 Project Overview

**Bireena TallyX** is a full-stack accounting and business management application designed to bring common accounting workflows to a modern web interface.

The application supports company management, ledgers, inventory, accounting vouchers, financial reports, authentication, and business analytics.

The project is built as a single repository containing both the frontend and backend.

---

## 🎯 Problem & Solution

Traditional accounting workflows can be difficult to access across different devices and can rely heavily on desktop-based software.

**Bireena TallyX provides a browser-based approach that allows users to:**
- Manage companies and financial information
- Create and manage ledgers
- Maintain inventory and stock information
- Record accounting transactions
- View financial reports
- Access business analytics
- Use the application from desktop and mobile browsers

---

## ✨ Key Features

### 🏢 Company Management
- Create and manage multiple companies
- Store company information such as GSTIN, PAN, state, PIN, and financial year
- Switch between supported company records

### 💼 Accounts & Ledgers
- Manage accounting groups
- Create and update ledgers
- Maintain opening balances
- Support party, bank, cash, income, and expense accounts

### 📦 Inventory Management
- Manage stock items
- Store SKU and opening quantity
- Configure units such as Pcs, Box, Kg, etc.
- Manage stock categories and godowns

### 📝 Accounting Vouchers
Supported voucher workflows include:
- **F4** — Contra
- **F5** — Payment
- **F6** — Receipt
- **F7** — Journal
- **F8** — Sales
- **F9** — Purchase
- **Credit Notes**
- **Debit Notes**

### 📊 Financial Reports
- Balance Sheet
- Profit & Loss
- Trial Balance
- Day Book
- Receivables & Payables
- Cash-flow related analytics

### 📈 Business Analytics
- Interactive charts
- Receivables and payables visualization
- Cash-in and cash-out trends
- Dashboard-based business summaries

### 🔐 Authentication & Security
- JWT-based authentication
- Password hashing using bcrypt
- Protected API routes
- Environment-based configuration
- Password reset workflow using email service

### 📱 Responsive UI
The frontend is designed to work across:
- Desktop
- Laptop
- Tablet
- Mobile browsers

---

## 🔄 Application Workflow

```text
User Login
    ↓
Select / Create Company
    ↓
Set Up Ledgers & Stock Items
    ↓
Record Accounting Vouchers
    ↓
Process Debit / Credit Entries
    ↓
Generate Financial Reports
    ↓
View Business Analytics
```

---

## 🏗️ Architecture

```text
┌─────────────────────────────┐
│       User Browser          │
│     React + Vite Frontend   │
└──────────────┬──────────────┘
               │
               │ HTTPS / REST API
               ▼
┌─────────────────────────────┐
│       Express.js API        │
│        Node.js Backend      │
│                             │
│  Auth • Controllers • Routes│
│  Companies • Ledgers        │
│  Stocks • Vouchers          │
└──────────────┬──────────────┘
               │
               │ Mongoose
               ▼
┌─────────────────────────────┐
│       MongoDB Atlas         │
│ Users • Companies • Ledgers │
│ Stocks • Vouchers           │
└─────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
- **React 18**
- **Vite**
- **React Router DOM**
- **Recharts**
- **Framer Motion**
- **GSAP**
- **Vanilla CSS**
- **Lucide React**
- **FontAwesome**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT**
- **bcrypt.js**
- **Nodemailer**

### Deployment
- **Vercel** (Frontend & Serverless Backend)
- **MongoDB Atlas**

---

## 📁 Project Structure

```text
bi_reena_tallyX/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│   └── vercel.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── config.js
│   │   └── index.css
│   ├── .env.example
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
├── .gitignore
└── README.md
```

> `node_modules`, `.env`, and generated build output should remain excluded from the public repository through `.gitignore`.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have:
- **Node.js** 18+
- **npm** 9+
- **MongoDB Atlas** account or a local MongoDB instance

---

### 1. Clone the Repository

```bash
git clone https://github.com/Kumarchhotucoder/bi_reena_tallyX.git
cd bi_reena_tallyX
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create your environment file:
```bash
cp .env.example .env
```

Add the required values to `backend/.env`.

Then start the backend:
```bash
npm run dev
```

The backend runs on the port configured in your environment (`http://localhost:5001` by default).

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create the frontend environment file if required:
```bash
cp .env.example .env
```

Start the frontend:
```bash
npm run dev
```

Vite will display the local development URL in the terminal (`http://localhost:5173` by default).

---

## ⚙️ Environment Variables

### Backend
Use `backend/.env.example` as the template.

Example:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Frontend
Use `frontend/.env.example` as the template.

Example:
```env
VITE_API_URL=your_backend_api_url
```

---

## 🔒 Security Note

Never commit real:
- MongoDB credentials
- JWT secrets
- API keys
- Email credentials
- Production passwords
- Private tokens

Only `.env.example` files should be committed with placeholder values.

---

## 📡 API Overview

| Method | Endpoint | Purpose |
| :--- | :--- | :--- |
| `POST` | `/api/login` | User login |
| `POST` | `/api/users` | User registration |
| `GET` | `/api/me` | Current user profile |
| `POST` | `/api/password/forgot` | Request password reset |
| `PUT` | `/api/password/reset/:token` | Reset password |
| `GET` | `/api/companies` | Get companies |
| `POST` | `/api/companies` | Create company |
| `GET` | `/api/ledgers` | Get ledgers |
| `POST` | `/api/ledgers` | Create ledger |
| `GET` | `/api/stocks` | Get stock items |
| `POST` | `/api/stocks` | Create stock item |
| `GET` | `/api/vouchers` | Get vouchers |
| `POST` | `/api/vouchers` | Create voucher |
| `POST` | `/api/demo-requests` | Submit demo request |
| `POST` | `/api/pricing-inquiries` | Submit pricing inquiry |

> *Protected endpoints require the appropriate authentication token.*

---

## 🧪 Demo Access

For evaluation, provide demo credentials through the appropriate submission channel rather than publishing a real password in this README.

- **Demo Email:** `PROVIDED_SEPARATELY`
- **Demo Password:** `PROVIDED_SEPARATELY`
- **Role:** Administrator

---

## 🖼️ Screenshots

Add selected screenshots here before submission:

```text
docs/
├── dashboard.png
├── company-management.png
├── ledger-management.png
├── voucher-entry.png
└── reports.png
```

Example:
```markdown
![Dashboard](docs/dashboard.png)
```

---

## 👥 Contributors

This is a collaborative project:

- **Chhotu Kumar** — Full-Stack Development, Architecture, Responsive UI & Cloud Integration
- **Deepak** — Voucher Types, Frontend Features & Module Development

---

## 🔮 Future Improvements

Potential improvements include:
- Advanced role-based access control (RBAC)
- More detailed financial reports & GST returns
- Automated report exports (PDF / Excel)
- Additional inventory workflows & barcode scanning
- Improved audit logging
- Expanded mobile native app experience
- Additional business intelligence analytics

---

## 📄 License

This project is licensed under the MIT License unless a different license is specified by the project owners.

---

## ❤️ Acknowledgement

Built as a collaborative full-stack project to explore modern accounting workflows, business management, and web application development.
