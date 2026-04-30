import express from "express";
import cors from "cors";
import { usersRouter } from "./routes";

const app = express();
app.use(express.json()); // parse incoming requests with JSON payloads
app.use(cors()); // disabled CORS for all routes

app.use("/users", usersRouter);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}...`);
});
