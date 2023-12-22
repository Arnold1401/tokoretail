// app.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

var cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const books = [
  { id: 1, title: "Node.js Guide", author: "John Doe" },
  { id: 2, title: "Express.js Basics", author: "Jane Smith" },
];

// Define a simple route
app.get("/", (req, res) => {
  res.send("A Monk in Cloud");
  // res.write("Hello, this is a simple Express.js app!");
});

app.get("/api/books", (req, res) => {
  res.send(books);
});

// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running at http://localhost:${port}`);
});
