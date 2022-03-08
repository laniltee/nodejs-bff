// Dependancies
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

// Configuration
dotenv.config();

// Express
const app = express();

// Middleware
app.use(cors());
app.use(morgan("combined"));

// Routes
import routes from "routes";
app.use("/api", routes);

// App Startup
app.listen(process.env.PORT, () => {
  console.info(`BFF running on port ${process.env.PORT}`);
});
