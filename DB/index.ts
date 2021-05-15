import { DB } from "https://deno.land/x/sqlite/mod.ts";

export const db = new DB("books.db");

export const initBookDB = () => {
  db.query(
    `
      CREATE TABLE IF NOT EXISTS
        books (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT UNIQUE,
          author TEXT,
          year INTEGER,
          pageNumber INTEGER
        )
      `
  );

  // const books = [
  //   { title: "Book One", author: "Author One", year: 1988, pageNumber: 568 },
  //   { title: "Book Two", author: "Author Two", year: 2001, pageNumber: 620 },
  //   {
  //     title: "Book Three",
  //     author: "Author Three",
  //     year: 2018,
  //     pageNumber: 433,
  //   },
  // ];

  // for (const book of books) {
  //   db.query(
  //     "INSERT INTO books (title, author, year, pageNumber) VALUES (?, ?, ?, ?)",
  //     [book.title, book.author, book.year, book.pageNumber]
  //   );
  // }
};

export const initDB = () => {
  initBookDB();
};
