document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from your GraphQL server
    fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: `
                {
                    books {
                        id
                        name
                        author {
                            name
                        }
                    }
                }
            `,
        }),
    })
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('bookList');

            // Loop through the fetched books and create <p> tags for each book
            data.data.books.forEach(book => {
                const bookInfo = document.createElement('p');
                const authorName = book.author ? book.author.name : 'Unknown Author';
                bookInfo.textContent = `${book.name} has an id of ${book.id} and made by: ${authorName}`;
                bookList.appendChild(bookInfo);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
