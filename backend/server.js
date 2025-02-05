import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "accusim_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    return;
  }
  console.log("Connected to AccuSim database!");
});

app.post("/enroll", async (req, res) => {
  console.log("Received Enrollment Request:", req.body);

  let { username, email, phone, password, ssn_last4, date_of_birth, address } = req.body;

  if (!username || !email || !phone || !password || !ssn_last4 || !date_of_birth || !address) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Ensure phone contains only numbers
  phone = phone.replace(/\D/g, "");

  // Hash the password before storing
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = "INSERT INTO users (username, email, phone, password_hash, ssn_last4, date_of_birth, address) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [username, email, phone, hashedPassword, ssn_last4, date_of_birth, address];

  console.log("SQL Query:", sql);
  console.log("Values:", values);

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Database insert error:", err);
      return res.status(500).json({ message: "Database error occurred" });
    }
    res.status(201).json({ message: "Enrollment successful" });
  });
});

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});
