# Forge Site - AI Website Builder 🚀

An intelligent, AI-powered platform that allows users to seamlessly generate, preview, edit, and publish complete web projects through natural language interactions. Built with a modern tech stack (MERN + Vite + Tailwind + AI SDK).

## 🌟 Features

- **AI Code Generation**: Leverage the power of OpenAI to build full web components and pages just by describing what you want.
- **Live Preview Environment**: Integrated browser-based code sandboxing using `@codesandbox/sandpack-react` to instantly preview your AI-generated React applications.
- **Project Management**: Save, edit, and manage multiple projects seamlessly.
- **Publishing System**: Easily publish and share your creations.
- **Authentication**: Secure user authentication using JWT and bcrypt.
- **Modern UI/UX**: Beautiful, responsive interface built with React 19, Tailwind CSS v4, and Lucide React icons.

## 🛠️ Tech Stack

### Frontend (Client)
- **Framework**: React 19 (with Vite)
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM
- **State Management/Data Fetching**: Axios
- **Live Code Execution**: Sandpack (`@codesandbox/sandpack-react`)
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

### Backend (Server)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JSON Web Tokens (JWT) & bcrypt
- **AI Integration**: Vercel AI SDK (`ai`, `@ai-sdk/openai`)
- **Validation**: Zod

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or a MongoDB Atlas URI)

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd ForgeSite
   ```

2. **Install Server Dependencies**:
   ```bash
   cd server
   npm install
   ```

3. **Install Client Dependencies**:
   ```bash
   cd ../client
   npm install
   ```

### Environment Variables

You'll need to set up environment variables for both the server and the client.

**Server (`server/.env`)**
Create a `.env` file in the `server` directory and add the following keys (replace with your actual values):
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
ORIGINS=http://localhost:5173
```

**Client (`client/.env`)**
Create a `.env` file in the `client` directory:
```env
VITE_API_URL=http://localhost:3000
```

### Running the Application

You can run the client and server in separate terminal windows.

**Start the Server (Development Mode):**
```bash
cd server
npm run dev
```
The server will start on `http://localhost:3000`.

**Start the Client:**
```bash
cd client
npm run dev
```
The client will be available at `http://localhost:5173`.

## 📂 Project Structure

```text
ForgeSite/
├── client/                 # Frontend React Application
│   ├── src/
│   │   ├── api/            # Axios API configurations
│   │   ├── components/     # Reusable React components
│   │   ├── context/        # React Context providers
│   │   ├── pages/          # Application pages (Auth, Builder, Home, etc.)
│   │   └── utils/          # Utility functions
│   └── package.json
└── server/                 # Backend Node.js/Express Application
    ├── config/             # Database connection & configurations
    ├── controllers/        # Route controllers (Auth, Project, Chat)
    ├── middleware/         # Custom Express middlewares
    ├── models/             # Mongoose schemas
    ├── routes/             # API routes
    ├── services/           # Business logic & AI services
    └── package.json
```

## 📄 License
This project is licensed under the ISC License.
