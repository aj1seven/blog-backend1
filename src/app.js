require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blog Backend API running 🚀");
});

sequelize.authenticate()
  .then(() => console.log("✅ MySQL connected"))
  .catch(err => console.error("❌ DB error:", err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
