require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const loginRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:3000",
    } 
));

// routes
app.use("/login/admin_login", loginRoutes);
app.use("login/admin_signup", authRoutes);

const port = process.env.PORT || 4040;
app.listen(port, console.log(`Listening on port ${port}...`));
