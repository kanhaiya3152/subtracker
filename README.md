# 📆 Subscription Tracker

> **SubTrackr** is a smart backend service for managing recurring subscriptions, tracking renewals, and sending automated email reminders — built with Node.js, MongoDB, and Upstash Workflows. It also leverages Arcjet to block bots and rate-limit abusive requests.

---

## 📌 Features

- ✅ **User Authentication**
  - JWT-based secure login and signup
- 📬 **Automated Email Reminders**
  - Sends alerts at 7, 5, 2, and 1 day(s) before subscription renewal
- 🧠 **Smart Workflow Engine**
  - Utilizes `@upstash/workflow` to schedule future reminders
- 📡 **Bot & Rate Limiting Protection**
  - Secured using Arcjet to protect from spam, abuse, and DDoS attacks
- 🗂️ **Subscriptions Management**
  - Create, fetch, and list all subscriptions tied to a user
- 📨 **Email Integration**
  - Nodemailer used for sending rich HTML emails

---

## 🛠️ Tech Stack

| Tech | Use |
|------|-----|
| **Node.js** | Backend server |
| **Express.js** | API framework |
| **MongoDB + Mongoose** | Database and schema modeling |
| **JWT** | Authentication |
| **Day.js** | Date manipulation |
| **Upstash Workflow** | Email scheduling engine |
| **Nodemailer** | Email delivery |
| **Arcjet** | Request protection and bot detection |

---

## ⚙️ Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/subscription-tracker.git
cd subscription-tracker
