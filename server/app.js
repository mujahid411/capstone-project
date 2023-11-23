import express from "express";
import dotenv from "dotenv";
import videoRoutes from "./controllers/index.js";
import teacherRoutes from "./controllers/teacher/index.js"
import studentRoutes from "./controllers/student/index.js"
import loginRoutes from './controllers/login/index.js'
import courseRoutes from './controllers/course/index.js'
import chapterRoutes from './controllers/chapter/index.js'
import './dbConnect.js'


dotenv.config();

// Express App
const app = express();
const port = process.env.PORT || 5010;


app.use(express.json());

// Routes
app.use("/api/videos", videoRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/chapters", chapterRoutes);



app.listen(port, () => {
  console.log("Server started listening on port", port);
});

// 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
// git remote add origin https://github.com/mujahid411/lms.git