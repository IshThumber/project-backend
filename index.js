require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = require("./prisma/prismaClient")
const app = express();

const seed = require("./prisma/seed")

const PORT = process.env.PORT || 5003;

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/router'));

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.listen(PORT, async () => {
  try {
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.log(error)
  }
});
