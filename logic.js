//Create some variables and get the relative data related to the HTML page.

const container = document.getElementById("container");
const card = document.getElementsByClassName("card");
const cart = document.getElementById("cart");
// const

const addedToCart = [];
const addToCart = () => {};

const loadBooks = (booksArray) => {
    container.innerHTML = "";

    booksArray.forEach((books) => { 
        container.innerHTML +=
        `
        <div class="card">
            <h2>${books.title}</h2>
            <button onclick="addToCart('${books.title}')">Add to cart</button>
            <img src="${books.image} art=${books.title}"
            <p>Rating: ${books.rating}</p>
        `;        
    });
};

loadBooks(books);