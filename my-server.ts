import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT ?? 5173; // Allow dynamic PORT setting (Heroku)

app.use(cors());

// Array of 5-letter words
const words: string[] = ["APPLE", "BEACH", "CHAIR", "DANCE", "FLUFF", "CANNY", "SPOON", "DOLLY"];
// Define GET endpoint to return random word
app.get("/", (req: Request, res: Response) => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const secretWord = words[randomIndex];
  res.send({ secret: secretWord});
});

app.listen(PORT, () => {
});