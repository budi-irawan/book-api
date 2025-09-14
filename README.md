# book-api

# 📚 Book API (Node.js + Express + Sequelize + PostgreSQL)

A simple RESTful API for managing a book collection, built with **Node.js**, **Express**, **Sequelize ORM**, and **PostgreSQL**.  
The API allows you to perform CRUD operations (Create, Read, Update, Delete) on books, following RESTful best practices.  

---

## 🚀 Features
- Create a new book
- Retrieve all books
- Retrieve a book by ID
- Update an existing book
- Delete a book
- PostgreSQL database with Sequelize ORM
- Object-Oriented Programming (OOP) structure (Models + Controllers + Routes)
- Postman collection for testing

## 📦 Setup & Run 
1. Clone this repository:
   ```bash
   git clone https://github.com/budi-irawan/book-api.git
   cd book-api

2. Copy .env file and adjust if needed (default values should work):

3. Create a PostgreSQL database:
   CREATE DATABASE bookdb;

4. Install dependencies:
   npm install

5. Run application:
   node app.js


📖 API Endpoints
POST /books
Add a new book.

GET /books
Retrieve all books.

GET /books/:id
Retrieve a single book by ID.

PUT /books/:id
Update an existing book.

DELETE /books/:id
Delete a book by ID.


🧪 Postman Documentation

You can test the API using the provided Postman collection:

👉 Book API Postman Documentation

https://documenter.getpostman.com/view/11119755/2sB3HoqLCo