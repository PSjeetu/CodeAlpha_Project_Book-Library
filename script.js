let books = [
    { title: "1984", author: "George Orwell", summary: "📖 A dystopian novel on totalitarian rule.", copies: 3 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", summary: "⚖️ A novel about racial injustice.", copies: 2 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", summary: "💔 A tragic story of Jay Gatsby's love.", copies: 4 },
    { title: "Sapiens", author: "Yuval Noah Harari", summary: "🌍 A brief history of humankind.", copies: 3 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", summary: "🎭 A story of teenage alienation.", copies: 2 },
    { title: "Murder on the Orient Express", author: "Agatha Christie", summary: "🕵️‍♂️ A detective solves a train mystery.", copies: 3 },
    { title: "Dune", author: "Frank Herbert", summary: "🚀 A sci-fi novel on desert politics.", copies: 4 },
    { title: "Steve Jobs", author: "Walter Isaacson", summary: "🍏 The biography of Apple’s co-founder.", copies: 2 },
    { title: "Atomic Habits", author: "James Clear", summary: "🔄 A book on habit formation.", copies: 3 },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", summary: "💰 A guide to financial literacy.", copies: 2 },
    { title: "The Alchemist", author: "Paulo Coelho", summary: "✨ A novel on following dreams.", copies: 5 },
    { title: "The 5 AM Club", author: "Robin Sharma", summary: "⏰ A guide to productivity and success.", copies: 3 },
    { title: "The Power of Now", author: "Eckhart Tolle", summary: "🧘‍♂️ A book on mindfulness and living in the present.", copies: 2 },
    { title: "Harry Potter", author: "J.K. Rowling", summary: "⚡ A wizard’s journey against evil.", copies: 4 },
    { title: "Lord of the Rings", author: "J.R.R. Tolkien", summary: "🗡️ An epic fantasy adventure.", copies: 3 },
];

let issuedBooks = [];
let returnedBooks = [];


function displayBooks(filteredBooks = books) {
    let bookCollection = document.getElementById("bookCollection");
    bookCollection.innerHTML = "";

    filteredBooks.forEach((book, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${book.title}</strong> (📦 ${book.copies}) 
                        <button class="issue-btn" onclick="issueBook(${index})">Issue</button>
                        <div class="tooltip">
                            <span class="author">👤 Author: ${book.author}</span>
                            <span class="summary">📝 Summary: ${book.summary}</span>
                        </div>`;
        bookCollection.appendChild(li);
    });
}

function issueBook(index) {
    if (books[index].copies > 0) {
        books[index].copies -= 1;
        issuedBooks.push({ title: books[index].title });
        displayBooks();
        displayIssuedBooks();
    } else {
        alert("No more copies available!");
    }
}

function returnBook(index) {
    returnedBooks.push(issuedBooks[index]);
    issuedBooks.splice(index, 1);
    displayIssuedBooks();
    displayReturnedBooks();
}

function restoreToLibrary(index) {
    let bookTitle = returnedBooks[index].title;

    let libraryBook = books.find(book => book.title === bookTitle);
    if (libraryBook) {
        libraryBook.copies += 1;
    }

    returnedBooks.splice(index, 1);
    displayBooks();
    displayReturnedBooks();
}

function displayIssuedBooks() {
    let issuedList = document.getElementById("issuedBooks");
    issuedList.innerHTML = "";

    issuedBooks.forEach((book, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${book.title}</strong> 
                        <button class="return-btn" onclick="returnBook(${index})">Return</button>`;
        issuedList.appendChild(li);
    });
}

function displayReturnedBooks() {
    let returnedList = document.getElementById("returnedBooks");
    returnedList.innerHTML = "";

    returnedBooks.forEach((book, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${book.title}</strong> 
                        <button class="restore-btn" onclick="restoreToLibrary(${index})">Add to Library</button>`;
        returnedList.appendChild(li);
    });
}

displayBooks();
