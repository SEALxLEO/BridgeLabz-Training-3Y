// Library Management System
class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      return `${this.title} is already issued.`;
    }
    this.isIssued = true;
    return `${this.title} issued successfully.`;
  }

  returnBook() {
    this.isIssued = false;
    return `${this.title} returned successfully.`;
  }
}

const books = [
  new Book("Clean Code", "Robert C. Martin", "9780132350884"),
  new Book("JavaScript Guide", "David Flanagan", "9781491952023"),
  new Book("The Alchemist", "Paulo Coelho", "9780061122415", true),
  new Book("Atomic Habits", "James Clear", "9780735211292")
];

function displayAvailableBooks() {
  console.log("Available Books:");
  books
    .filter(book => !book.isIssued)
    .forEach(book => console.log(`${book.title} | ${book.author} | ${book.isbn}`));
}

function issueByISBN(isbn) {
  const book = books.find(book => book.isbn === isbn);
  if (!book) return "Book not found.";
  return book.issueBook();
}

displayAvailableBooks();

const isbn = prompt("Enter ISBN to issue a book:");
if (isbn !== null) {
  console.log(issueByISBN(isbn.trim()));
  displayAvailableBooks();
}
