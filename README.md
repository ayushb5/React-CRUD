React CRUD Application

A simple CRUD (Create, Read, Update, Delete) web application built using React, Axios, and JSON Server.

This project allows users to add, edit, and delete user records through a clean and responsive interface.

---

Features:

- Add new users
- View users in a scrollable table
- Edit user details using a modal
- Delete user records with confirmation
- API integration using Axios
- Simple backend simulation using JSON Server
- Responsive interface using Bootstrap

---

Technologies Used:

- Bootstrap
- React (Vite)
- React Router DOM
- Axios
- JSON Server

---

What is Axios?

Axios is a JavaScript HTTP client library used to communicate with APIs.

It allows React applications to send requests such as:

- GET – fetch data
- POST – create new data
- PUT – update existing data
- DELETE – remove data

Example request used in this project:

axios.get("/users")

Axios makes API communication easier compared to the native fetch() method and provides features like:

- automatic JSON parsing
- request/response interception
- better error handling

---

What is JSON Server?

JSON Server is a lightweight tool that creates a fake REST API from a simple JSON file.

It allows developers to simulate a backend without creating a real server.

Example db.json file:

{
"users": [
{
"id": 1,
"name": "John",
"email": "john@gmail.com",
"mobile": "9999999999"
}
]
}

---

Alternatives to JSON Server:

You can use other API options:

1. MockAPI

A cloud service that lets you create mock REST APIs easily.

Website:
https://mockapi.io

2. Create Your Own API (Node.js + Express / Java , etc.)

3. Firebase

Website:
https://firebase.google.com

---

Installation

1. Clone the repository
   git clone https://github.com/ayushb5/React-CRUD.git
2. Navigate to the project folder
   cd React-CRUD
3. Install dependencies
   npm install

This installs all required packages including:

- React
- React Router DOM
- Axios

---

Install JSON Server

You can install JSON Server globally:
npm install -g json-server

or locally:
npm install json-server

---

Run the Backend Server

Start JSON Server:
npx json-server --watch db.json --port 5000

API will run at:
http://localhost:5000/users

---

Run the React Application

Start the development server:

npm run dev

Open the application in browser:
http://localhost:5173

Developed as a practice project to understand React CRUD operations and API integration.

---

🚀 Live Preview:

https://github.com/user-attachments/assets/20bd98b9-0716-4e95-9e5a-cdee5a92ccfc

Preview Screenshots:

<img width="1919" height="897" alt="Image" src="https://github.com/user-attachments/assets/5c659c34-c9f2-4322-924d-f812390a22e8" />

<img width="1919" height="895" alt="Image" src="https://github.com/user-attachments/assets/b018ae91-71f8-45eb-a4d1-6f7c81e51f13" />

<img width="1919" height="897" alt="Image" src="https://github.com/user-attachments/assets/a5073ca6-927d-4049-b249-cc1a4e175c0e" />

<img width="1919" height="494" alt="Image" src="https://github.com/user-attachments/assets/05d2dee9-5ac5-421b-8238-0c1ef064db85" />

<img width="1919" height="533" alt="Image" src="https://github.com/user-attachments/assets/90180b3c-0be5-4cae-965b-e4fed1cfa3fe" />

<img width="1919" height="739" alt="Image" src="https://github.com/user-attachments/assets/1dc28631-c784-40e4-8171-a18a7e361a0b" />
