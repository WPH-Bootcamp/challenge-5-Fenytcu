// Don't delete code bellow and this code must be at the bottom of the file

type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

const books: Book[] = [];

function addBook(title: string, author: string, publicationYear: number): void {
  books.push({ title, author, publicationYear });
  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

function listBooks(): void {
  console.log('All Books:');

  if (books.length === 0) {
    console.log('No books available.'); // ✅ FIX: Tambah penanganan kosong
    return;
  }

  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

function searchBook(title?: string): void {
  if (!title) {
    console.log('Please provide a title to search.');
    return;
  }

  const results = books.filter((book) => book.title.includes(title));

  console.log(`Search Results for "${title}":`); // ✅ Pindah ke sini (selalu print)

  if (results.length > 0) {
    results.forEach((book) => {
      console.log(
        `- ${book.title} by ${book.author} (${book.publicationYear})`
      );
    });
  } else {
    console.log(`No books found with title containing "${title}".`);
  }
}

export { addBook, listBooks, searchBook };
