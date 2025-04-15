# 🤖 ChatBot API – Node.js + OpenAI + JWT Auth + Node -v 20.x

An intelligent chatbot API using **OpenAI**'s GPT model, built with **Node.js**, **Express**, and **MongoDB**. Includes full **Sign Up / Login** authentication with JWT. Easily deployable on **Vercel**.

---

## 🗂️ Project Structure
---

## 🧰 Tech Stack

- 🌐 Node.js + Express
- 🔐 JWT Authentication
- 🧠 OpenAI (GPT)
- 🗃️ MongoDB + Mongoose
- ☁️ Vercel Deployment

---

## ⚙️ Setup Instructions

### 1. 🔻 Clone the Repo

```bash
git clone https://github.com/VijaySaratkar/Chat-Bot-API.git
cd chatbot-node
npm install

### 2. 🔻 setup all keys in .env file
MONGO_URI=your_mongo_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret_key

npm start


chatbot-node/ ├── src/ │ ├── api/ │ ├── controllers/ │ ├── models/ │ ├── routes/ │ └── utils/ ├── .env ├── .gitignore ├── vercel.json ├── package.json └── README.md
