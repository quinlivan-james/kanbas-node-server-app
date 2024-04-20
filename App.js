import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import mongoose from "mongoose";
import session from "express-session";
import "dotenv/config";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(express.json());
app.use(cors())   
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(4000)
