# Notes Service API

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Local MongoDB Installation](#local-mongodb-installation)
  - [Online MongoDB Atlas](#online-mongodb-atlas)
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
   
2. Install dependencies:

   ```bash
    npm install

## Configuration

### Local MongoDB Installation

1. Install MongoDB locally on your machine. You can download it from [MongoDB Official Website](https://www.mongodb.com/try/download/community).
2. Start the MongoDB server.
3. Create a `.env` file and add the following string (Update the last part to match your database name)
    ```bash
    mongoDb_URL="mongodb://localhost:27017/outsized_notes_service_db"

4. Save the changes.

## Usage

### Run the API:
Use the following command

        npx tsc 
        npm start
       
The server will start at http://localhost:3000. You can test the API using tools like Postman or cURL.

## Testing
Run tests with:

    ```bash
       npm test

This will execute test cases using mock data and generate a test coverage report.

## API Endpoints

- Create a new note: `POST /api/notes`
- Get all notes: `GET /api/notes`
- Get a specific note by ID: `GET /api/notes/:id`
- Update a note by ID: `PUT /api/notes/:id`
- Delete a note by ID: `DELETE /api/notes/:id`

## Data Structure

A note has the following properties:

- id
- title
- content
- createdAt
- updatedAt
- tags (optional)

## Contributing

Feel free to contribute to the development of this API. Follow the standard GitHub Fork and Pull Request workflow.

## License

This project is licensed under the MIT License.
       
