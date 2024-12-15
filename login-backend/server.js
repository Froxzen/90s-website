const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const app = express();
const port = 3000;

// In-memory database
const users = {};

app.use(bodyParser.json());
app.use(express.static("public")); // Serve static files from the 'public' directory

// Register endpoint
app.post("/register", async (req, res) => {
	const { email, password } = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);

	if (users[email]) {
		return res.status(400).json({ message: "User already exists" });
	}

	users[email] = { email, password: hashedPassword };
	res.status(201).json({
		message: "User registered successfully",
		redirectUrl: "html.html",
	});
});

// Login endpoint
app.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const user = users[email];

	if (user && (await bcrypt.compare(password, user.password))) {
		res.status(200).json({ message: "Login successful" });
	} else {
		res.status(401).json({ message: "Invalid email or password" });
	}
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
