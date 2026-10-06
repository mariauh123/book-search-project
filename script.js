const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const resultsList = document.getElementById('results');


form.addEventListener('submit', async (event) => {
  event.preventDefault(); // stop page reload

  const searchTerm = input.value.trim();
  if (searchTerm === ""){
    alert("Please enter a search term")
    return 
  }
  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}`;
  const response = await fetch(url);
  const data = await response.json();
  
  resultsList.innerHTML = '';

  if(data.docs.length === 0){
    const noResult = document.createElement('p');
    noResult.id = 'no-result';
    noResult.textContent = 'NO RESULTS FOUND...';
    resultsList.append(noResult);
  }

  for (const book of data.docs){
    if (!book.title){
        continue;
    }
    const item = document.createElement('li');
    const authors = book.author_name ? book.author_name.join(', ') : 'Unknown author';
    item.textContent = `Book: ${book.title} | Author(s): ${authors}`;
    resultsList.append(item);
  }

});