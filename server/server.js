import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./models/User.js"; // Make sure this path is correct
import db from './dbconnect/mydb.js';
import cors from 'cors';

const app = express();
app.use(express.json()); // Middleware to parse JSON request body
app.use(cors({ origin: "http://localhost:5173" })); // Allow only this frontend

// Alternative: Allow all origins (not recommended for production)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

app.post("/register", (req, res) => {
    res.json({ message: "Registration successful" });
});


// Start server
mongoose.connect(db)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(3000, () => console.log("Server running on port 3000"));
    })
    .catch(err => console.error("Database connection error:", err));

app.post("/register", async (req, res) => {
    try {
        const { user_id, fname, lname, email, password, role } = req.body;

        // Validate required fields
        if (!user_id || !fname || !lname || !email || !password || !role) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = new User({ user_id, fname, lname, email, role, password: hashedPassword });
        await user.save();
        console.log("Succesfuly registered new user");
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});