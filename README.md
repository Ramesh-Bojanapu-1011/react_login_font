# React_login

Here is an example of a full stack login page using React for the frontend and Node.js with Express for the backend:

1. Create a new React project by running the following command:
bash
npx create-react-app login-page


2. Install Axios for making HTTP requests in React:
bash
npm install axios


3. Create a form component for the login page (LoginForm.js):
js
import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;


4. Create a backend server using Node.js and Express (server.js):
js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check username and password
  if (username === "admin" && password === "admin") {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});


5. Start the backend server by running the following command:
bash
node server.js


6. Update the App.js file in the React project to include the LoginForm component:
js
import React from "react";
import "./App.css";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="App">
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
}

export default App;


7. Start the React frontend by running the following command in the project directory:
bash
npm start


Now you should have a full stack login page with React frontend and Node.js Express backend. Users can enter their username a
