const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "database",
    user: "root",
    password: "example",
    database: "company"
});

db.connect(err => {
    if (err) {
        console.log("Database connection error:", err);
        return;
    }
    console.log("Connected to MySQL");
});

app.post("/users", (req, res) => {
    const name = req.body.name;

    db.query(
        "INSERT INTO employees (name) VALUES (?)",
        [name],
        err => {
            if (err) {
                return res.status(500).json({ message: "Database error" });
            }

            res.json({ message: "Employee added successfully!" });
        }
    );
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Backend running on port 3000");
});
