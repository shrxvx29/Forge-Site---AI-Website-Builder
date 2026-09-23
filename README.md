# ⚡ Forge Site — AI Website Builder

> **Build websites with natural language. Generate. Preview. Edit. Publish.**

**Forge Site** is an AI-powered website builder that transforms natural-language prompts into functional web applications. Instead of starting from an empty codebase, users can describe what they want and let AI generate the corresponding React components and pages.

The platform combines **AI code generation, live code execution, project management, authentication, and publishing** into a single developer-focused workspace.

---

## ✨ Overview

Forge Site is designed to make web development faster by turning ideas into working interfaces through conversational AI.

Users can:

- 💬 Describe a website or feature using natural language
- 🤖 Generate React code using OpenAI
- ⚡ Preview generated applications instantly
- ✏️ Edit and iterate on generated projects
- 💾 Save and manage multiple projects
- 🚀 Publish completed projects
- 🔐 Secure accounts with JWT authentication

### Example

```text
"Create a modern SaaS landing page with a dark theme,
pricing cards, testimonials, and a responsive navbar."
```

Forge Site processes the request and generates the corresponding UI/code that can be previewed and refined immediately.

---

## 🚀 Key Features

### 🤖 AI-Powered Code Generation

Generate React components and complete pages using natural-language instructions.

- OpenAI-powered generation
- Conversational development workflow
- Component/page generation
- Iterative AI-assisted development
- Structured project generation

---

### 🖥️ Live Preview Environment

Preview generated applications without leaving the builder.

Powered by:

**Sandpack — `@codesandbox/sandpack-react`**

The generated React code runs inside an isolated browser-based environment, allowing users to see changes immediately.

---

### 📁 Project Management

Keep multiple projects organized in one place.

- Create projects
- Save generated code
- Open existing projects
- Edit projects
- Manage multiple builds

---

### 🚀 Project Publishing

Turn completed projects into shareable web experiences.

The publishing workflow allows users to move from:

```text
Idea
  ↓
AI Generation
  ↓
Live Preview
  ↓
Editing
  ↓
Publish
  ↓
Share
```

---

### 🔐 Authentication & Security

Forge Site includes account-based authentication using:

- JWT
- bcrypt
- Protected API routes
- Secure password hashing
- Token-based authorization

---

### 🎨 Modern UI/UX

Built with a modern frontend stack focused on responsiveness and usability.

- React 19
- Tailwind CSS v4
- Responsive layouts
- Lucide React icons
- React Hot Toast notifications
- Component-based architecture

---

## 🧠 How Forge Site Works

```text
┌──────────────────────┐
│    User Prompt       │
│ "Build a SaaS page"  │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│    AI Processing     │
│      OpenAI API      │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│   Code Generation    │
│   React Components   │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│   Sandpack Preview   │
│   Live Application   │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Edit → Save → Publish│
└──────────────────────┘
```

---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| **React 19** | UI development |
| **Vite** | Frontend build tool |
| **Tailwind CSS v4** | Styling |
| **React Router DOM** | Client-side routing |
| **Axios** | API communication |
| **Sandpack** | Live React code execution |
| **Lucide React** | Icons |
| **React Hot Toast** | Notifications |

## Backend

| Technology | Purpose |
|---|---|
| **Node.js** | Server runtime |
| **Express.js** | REST API framework |
| **MongoDB** | Database |
| **Mongoose** | MongoDB ODM |
| **JWT** | Authentication |
| **bcrypt** | Password hashing |
| **OpenAI** | AI code generation |
| **Vercel AI SDK** | AI integration |
| **Zod** | Schema validation |

---

# 🏗️ Architecture

Forge Site follows a client-server architecture:

```text
                    ┌─────────────────┐
                    │     User        │
                    └────────┬────────┘
                             │
                             ↓
                 ┌──────────────────────┐
                 │    React + Vite      │
                 │      Frontend        │
                 └──────────┬───────────┘
                            │
                       REST API
                            │
                            ↓
                 ┌──────────────────────┐
                 │   Express.js Server  │
                 └───────┬───────┬──────┘
                         │       │
             ┌───────────┘       └────────────┐
             ↓                                ↓
     ┌───────────────┐                ┌──────────────┐
     │    MongoDB    │                │    OpenAI    │
     │   + Mongoose  │                │      AI      │
     └───────────────┘                └──────────────┘
```

---

# 📂 Project Structure

```text
ForgeSite/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   │   └── Axios configurations
│   │   │
│   │   ├── components/
│   │   │   └── Reusable UI components
│   │   │
│   │   ├── context/
│   │   │   └── Global state/context
│   │   │
│   │   ├── pages/
│   │   │   ├── Auth/
│   │   │   ├── Builder/
│   │   │   ├── Home/
│   │   │   └── Projects/
│   │   │
│   │   └── utils/
│   │       └── Helper utilities
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── Database & application configuration
│   │
│   ├── controllers/
│   │   ├── Auth
│   │   ├── Project
│   │   └── Chat
│   │
│   ├── middleware/
│   │   └── Authentication & request middleware
│   │
│   ├── models/
│   │   └── Mongoose schemas
│   │
│   ├── routes/
│   │   └── API routes
│   │
│   ├── services/
│   │   └── AI & business logic
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙️ Getting Started

## Prerequisites

Make sure you have the following installed:

- **Node.js 18+**
- **npm**
- **MongoDB** or MongoDB Atlas
- **OpenAI API Key**

---

## 1. Clone the Repository

```bash
git clone https://github.com/shrxvx29/Forge-Site---AI-Website-Builder.git

cd Forge-Site---AI-Website-Builder
```

---

## 2. Install Backend Dependencies

```bash
cd server
npm install
```

---

## 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

# 🔐 Environment Variables

## Server

Create:

```text
server/.env
```

Add:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENAI_API_KEY=your_openai_api_key

ORIGINS=http://localhost:5173
```

> ⚠️ Never commit your `.env` file or expose your OpenAI API key publicly.

---

## Client

Create:

```text
client/.env
```

Add:

```env
VITE_API_URL=http://localhost:3000
```

---

# ▶️ Running Locally

### Start Backend

```bash
cd server
npm run dev
```

Backend:

```text
http://localhost:3000
```

### Start Frontend

Open another terminal:

```bash
cd client
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 🧪 Development Workflow

A typical development session looks like:

```text
1. Start MongoDB
       ↓
2. Start Express backend
       ↓
3. Start Vite frontend
       ↓
4. Login/Register
       ↓
5. Create a project
       ↓
6. Enter an AI prompt
       ↓
7. Generate code
       ↓
8. Preview with Sandpack
       ↓
9. Iterate on the project
       ↓
10. Save / Publish
```

---

# 🔒 Security Considerations

Forge Site uses several mechanisms to protect user accounts and application data.

### Authentication

JWT tokens are used to authenticate users and protect private API endpoints.

### Password Security

Passwords are hashed using **bcrypt** before being stored.

### Environment Variables

Sensitive credentials such as:

- Database connection strings
- JWT secrets
- OpenAI API keys

are stored in environment variables instead of source code.

### Request Validation

**Zod** is used to validate structured input before processing requests.

---

# 🌐 Deployment

Forge Site can be deployed using a separate frontend/backend architecture.

### Frontend

Suitable platforms include:

- Netlify
- Vercel

### Backend

Suitable platforms include:

- Render
- Railway
- Fly.io

### Database

Recommended:

- MongoDB Atlas

### Production Architecture

```text
                 ┌──────────────────┐
                 │     Netlify      │
                 │ React + Vite App │
                 └────────┬─────────┘
                          │
                          ↓
                 ┌──────────────────┐
                 │ Render / Railway │
                 │ Express Backend  │
                 └───────┬─────┬────┘
                         │     │
               ┌─────────┘     └──────────┐
               ↓                          ↓
        ┌──────────────┐          ┌──────────────┐
        │ MongoDB Atlas│          │   OpenAI API │
        └──────────────┘          └──────────────┘
```

> For production deployment, make sure your backend CORS configuration allows your deployed frontend domain rather than relying on `localhost`.

---

# 📌 Current Capabilities

| Capability | Status |
|---|:---:|
| AI Code Generation | ✅ |
| React Project Generation | ✅ |
| Live Sandpack Preview | ✅ |
| User Authentication | ✅ |
| JWT Authorization | ✅ |
| MongoDB Persistence | ✅ |
| Project Management | ✅ |
| AI Chat Workflow | ✅ |
| Project Publishing | ✅ |
| Responsive UI | ✅ |

---

# 🔮 Future Improvements

Potential improvements for future versions include:

- [ ] Multi-file AI code editing
- [ ] AI-powered debugging
- [ ] Version history
- [ ] Project rollback
- [ ] GitHub integration
- [ ] One-click deployment
- [ ] Custom domains
- [ ] Template marketplace
- [ ] Team collaboration
- [ ] Real-time collaborative editing
- [ ] AI image generation
- [ ] More framework support beyond React
- [ ] Usage analytics
- [ ] Subscription / credit system

---

# 🎯 Why Forge Site?

Traditional website development often requires switching between:

```text
IDE → Browser → Terminal → Git → Hosting → Database
```

Forge Site aims to bring much of that workflow into a single environment:

```text
Prompt → Generate → Preview → Edit → Publish
```

The goal isn't to eliminate developers. It's to **reduce the repetitive work involved in turning an idea into a working web interface**.
---

# 🧑‍💻 Author

**Saravanan K**

Backend / Full Stack Developer

Interested in:

- React
- Node.js
- Java
- Spring Boot
- AI-powered applications
- Full-stack development

---

# 📄 License

This project is licensed under the **ISC License**.

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

Your feedback and contributions are welcome.

---

<p align="center">
  Built with ⚡ React, Node.js, MongoDB & AI
</p>
