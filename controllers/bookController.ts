import { Application, Context } from "https://deno.land/x/abc@v1.3.1/mod.ts";
import { Book } from "../Models/boookModel.ts";
import { db } from "../DB/index.ts";

export const getAllBooks = (ctx: Context) => {
  const books: Book[] = [...db.query("SELECT * FROM books;")].map(
    (book: any) => {
      book.shift();
      return book;
    }
  );
  ctx.json(books, 200);
};

export const getBook = (ctx: Context) => {
  const { id } = ctx.params;
  const book = [...db.query(`SELECT * FROM books WHERE id == ${id}`)][0];
  if (book) {
    return ctx.json(book);
  } else {
    return ctx.json({ error: "Book not found for id " + id });
  }
};

export const createBook = async (ctx: Context) => {
  const { title, author, pageNumber } = await ctx.body as any;

  try {
    db.query("INSERT INTO books (title, author, pageNumber) VALUES (?, ?, ?)", [
      title,
      author,
      pageNumber,
    ]);
  
    ctx.json({
      book: { title, author, pageNumber },
      sccess: "Book created successflly",
    });
  } catch(err) {
    ctx.json({ error: err })
  }
};

export const deleteBook = (ctx: Context) => {
  const { id } = ctx.params;

  try {
    db.query(`DELETE FROM books WHERE id == ${id}`)
    ctx.json({ success: "Deleted successfully!" })
  } catch(err) {
    ctx.json({ error: err })
  }
};
