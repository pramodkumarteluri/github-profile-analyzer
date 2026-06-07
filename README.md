# GitHub Profile Analyzer API

## Project Overview

This project is a backend REST API built using Node.js, Express.js, and MySQL.
It fetches public GitHub profile data using the GitHub Public API, analyzes useful profile insights, and stores the data in a MySQL database.

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub Public API
* Axios
* dotenv

---

## Features

* Fetch GitHub profile data using username
* Store analyzed profile details in MySQL
* Prevent duplicate profile entries
* Get all stored analyzed profiles
* Get single profile details
* REST API architecture

---

## API Endpoints

### Analyze GitHub Profile

GET `/api/github/analyze/:username`

Example:
`/api/github/analyze/octocat`

---

### Get All Profiles

GET `/api/github/profiles`

---

### Get Single Profile

GET `/api/github/profiles/:id`

---

## Database Table

Table Name:
`github_profiles`

Stored Fields:

* username
* name
* bio
* public_repos
* followers
* following
* profile_url
* avatar_url
* created_at

---

## Installation Steps

### Clone Repository

```bash
git clone https://github.com/pramodkumarteluri/github-profile-analyzer.git
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=github_analyzer
```

### Run Server

```bash
npm run dev
```

---

## Author

Pramod Kumar
