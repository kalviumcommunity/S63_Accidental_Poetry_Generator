const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json()); // Middleware to parse JSON

// Define /ping route
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Sample in-memory data
let items = [];
let idCounter = 1;

// Create (POST)
app.post("/items", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  const newItem = { id: idCounter++, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read All (GET)
app.get("/items", (req, res) => {
  res.json(items);
});

// Read One (GET)
app.get("/items/:id", (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });

  res.json(item);
});

// Update (PUT)
app.put("/items/:id", (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  if (!item) return res.status(404).json({ error: "Item not found" });

  item.name = req.body.name || item.name;
  res.json(item);
});

// Delete (DELETE)
app.delete("/items/:id", (req, res) => {
  const index = items.findIndex(i => i.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Item not found" });

  items.splice(index, 1);
  res.json({ message: "Item deleted successfully" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
