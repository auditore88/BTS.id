# To-Do List Application

A simple To-Do List application built with Express.js.

## Features

- User Registration and Login
- Create, Read, Update, and Delete (CRUD) operations for checklists and items
- JWT-based authentication

## Installation

1. Clone the repository:

   ```sh
   git clone <repository_url>
   ```

2. Install dependencies:

   ```sh
   cd to_do_list_app
   npm install
   ```

3. Start the server:
   ```sh
   node app.js
   ```

## API Endpoints

### Auth

- **POST /api/register**: Register a new user
- **POST /api/login**: Login an existing user

### Checklists

- **GET /api/checklist**: Get all checklists for the logged-in user
- **POST /api/checklist**: Create a new checklist
- **DELETE /api/checklist/:checklistId**: Delete a checklist by ID

### Items

- **GET /api/checklist/:checklistId/item**: Get all items for a checklist
- **POST /api/checklist/:checklistId/item**: Create a new item in a checklist
- **GET /api/checklist/:checklistId/item/:checklistItemId**: Get a specific item by ID
- **PUT /api/checklist/:checklistId/item/:checklistItemId**: Update the status of an item
- **DELETE /api/checklist/:checklistId/item/:checklistItemId**: Delete an item by ID
- **PUT /api/checklist/:checklistId/item/rename/:checklistItemId**: Rename an item by ID
