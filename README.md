# Notes Service API

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Testing](#testing)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to the Notes Service API! This API allows users to manage notes effectively with features like creating, updating, and deleting notes. It also supports a tagging system for organizing notes.

## Features

- Create a new note
- Get all notes
- Get a specific note by ID
- Update a note by ID
- Delete a note by ID
- Tagging system for notes
- Filtering notes by tags

## Requirements

To run this API, you need the following:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/notes-service-api.git
   cd notes-service-api
   ```
Install dependencies:

   ```bash
   npm install
   ```
## Configuration
Update the MongoDB connection string in src/db/config.ts to point to your MongoDB instance:
   ```bash
    // MongoDB Connection
    const dbConnection  = mongoose.connect(process.env.mongoDb_URL as string, {} as mongoose.ConnectOptions);

 ```
## Usage
Run the API:
   ```bash
      npm start
```
The server will start at http://localhost:3000. You can test the API using tools like Postman or cURL.

Create a new cluster:

Click on the "Build a Cluster" button.
Choose a Cloud Provider, Region, and additional settings as needed.
Click "Create Cluster."
Configure database access:

In the left sidebar, go to "Database Access" under the "Security" section.
Click on the "ADD NEW DATABASE USER" button.
Create a new user with a username and password. Note down these credentials.
Allowlist your IP address:

In the left sidebar, go to "Network Access" under the "Security" section.
Click on the "ADD IP ADDRESS" button.
Add your IP address to the allowlist.
Get your connection string:

In the left sidebar, click on "Clusters" and then on your cluster.
Click the "CONNECT" button.
Choose "Connect Your Application."
Copy the connection string provided.
Update the MongoDB connection string in src/app.ts:

Open src/app.ts in your code editor.
Replace the placeholder connection string with the one you copied.
typescript
Copy code
mongoose.connect('your-copied-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
Save the changes.

Environment Variables
Optionally, you can use environment variables to securely store sensitive information like database credentials. Create a .env file in the root of your project and add the following:

env
Copy code
MONGODB_URI=your-copied-connection-string
Remember to add .env to your .gitignore file to avoid exposing sensitive information.

Usage
Run the API:

bash
Copy code
npm start
The server will start at http://localhost:3000. You can test the API using tools like Postman or cURL.

Testing
Run tests with:

bash
Copy code
npm test
This will execute test cases using mock data and generate a test coverage report.

API Endpoints
Create a new note: POST /api/notes
Get all notes: GET /api/notes
Get a specific note by ID: GET /api/notes/:id
Update a note by ID: PUT /api/notes/:id
Delete a note by ID: DELETE /api/notes/:id
Data Structure
A note has the following properties:

id
title
content
createdAt
updatedAt
tags (optional)
Contributing
Feel free to contribute to the development of this API. Follow the standard GitHub Fork and Pull Request workflow.

License
This project is licensed under the MIT License.