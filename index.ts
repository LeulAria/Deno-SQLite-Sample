import { Application, Context } from "https://deno.land/x/abc@v1.3.1/mod.ts";
import { initDB } from './DB/index.ts'
import { getAllBooks, getBook, createBook, deleteBook } from "./controllers/bookController.ts";

const app = new Application();
initDB();

app
  .get("/books", getAllBooks)
  .get("/books/:id", getBook)
  .post("/book", createBook)
  .delete("/books/:id", deleteBook);

const PORT = 4000;
app.start({ port: PORT });
