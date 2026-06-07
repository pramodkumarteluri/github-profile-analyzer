# GitHub Profile Analyzer API

A backend API project built using Node.js, Express.js, MySQL, and GitHub Public API.

This application fetches public GitHub profile data, analyzes useful insights, and stores the results in a MySQL database.

---

# Live API URL

https://github-profile-analyzer-api-thr4.onrender.com

---

# Tech Stack

* Node.js
* Express.js
* MySQL
* Railway MySQL Cloud Database
* Render Deployment
* GitHub Public API

---

# Features

* Fetch GitHub public profile data using username
* Store profile insights in MySQL database
* Avoid duplicate usernames using unique constraint
* Update existing profile data automatically
* Fetch all analyzed profiles
* Fetch single profile by ID
* Cloud database integration using Railway
* Live backend deployment using Render

---

# API Endpoints

## 1. Analyze GitHub Profile

GET

/api/github/analyze/:username

### Example

https://github-profile-analyzer-api-thr4.onrender.com/api/github/analyze/octocat

---

## 2. Get All Profiles

GET

/api/github/profiles

### Example

https://github-profile-analyzer-api-thr4.onrender.com/api/github/profiles

---

## 3. Get Single Profile

GET

/api/github/profiles/:id

### Example

https://github-profile-analyzer-api-thr4.onrender.com/api/github/profiles/1

---

# Project Structure

github-profile-analyzer/

├── config/

│   └── db.js

├── controllers/

│   └── githubController.js

├── routes/

│   └── githubRoutes.js

├── .gitignore

├── package.json

├── package-lock.json

├── README.md

└── server.js

---

# Installation & Setup

## Step 1 - Clone Repository

git clone https://github.com/pramodkumarteluri/github-profile-analyzer.git

---

## Step 2 - Install Dependencies

npm install

---

## Step 3 - Create .env File

Create a .env file in project root folder.

Add:

PORT=5000

DB_HOST=YOUR_DATABASE_HOST

DB_USER=YOUR_DATABASE_USER

DB_PASSWORD=YOUR_DATABASE_PASSWORD

DB_NAME=YOUR_DATABASE_NAME

DB_PORT=YOUR_DATABASE_PORT

---

## Step 4 - Run Server

npm run dev

---

# Database Table Schema

CREATE TABLE github_profiles (

```
id INT AUTO_INCREMENT PRIMARY KEY,

username VARCHAR(255) UNIQUE,

name VARCHAR(255),

bio TEXT,

public_repos INT,

followers INT,

following INT,

profile_url VARCHAR(500),

avatar_url VARCHAR(500),

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

);

---

# Sample Stored Insights

* Username
* Name
* Bio
* Public Repository Count
* Followers Count
* Following Count
* GitHub Profile URL
* Avatar URL

---

# Deployment

* Backend deployed on Render
* MySQL database hosted on Railway

---

# Author

Pramod Kumar

GitHub:

https://github.com/pramodkumarteluri
