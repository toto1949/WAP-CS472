"use strict";

let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
  { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
  { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
];

function addBook(title, author, ID) {
  const existingBook = libraryBooks.find(book => book.ID === ID);
  if (existingBook) {
    console.log(`Book with ID ${ID} already exists.`);
    return null;
  }
  const newBook = { title, author, ID };
  libraryBooks.push(newBook);
  console.log("Book added successfully.");
  return newBook;
}

function getTitles() {
  return libraryBooks.map(book => book.title).sort();
}

function findBooks(keyword) {
  return libraryBooks
    .filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()))
    .sort((a, b) => a.ID - b.ID);
}

addBook("The Great Gatsby", "F. Scott Fitzgerald", 6789);
addBook("The Road Ahead", "Bill Gates", 1235);

console.log(getTitles());

console.log(findBooks("Road"));
