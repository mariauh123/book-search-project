# Book Search Project

Simple book search app built with HTML, CSS, and JavaScript.  
Users can search for books by keyword and see live results from the Open Library API.

🔗 **Live demo:** https://mariauh123.github.io/book-search-project/

---

## Features

- Search for books by title or keyword.
- Uses the public **Open Library Search API**.
- Displays book title and author(s) in a clean list.
- Clears old results on each new search.
- Basic input validation (prevents empty searches).
- Shows a **"NO RESULTS FOUND..."** message when there are no matches.

---

## Tech Stack

- **HTML5** – page structure and layout.
- **CSS3** – custom styling (gradients, typography, card-style results).
- **JavaScript (ES6)** – form handling, `fetch`, async/await, DOM updates.
- **Open Library API** – `https://openlibrary.org/search.json`.

---

## How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/mariauh123/book-search-project.git
   cd book-search-project
   ```
2. Open `index.html` with a Live Server extension (VS Code) or any static server.
3. Type a search term and hit **Search**.

---

## Possible Improvements

- Limit the number of displayed results.
- Improve the layout of each result (separate title/author styling, more metadata).
- Add loading states or error messages for network issues.