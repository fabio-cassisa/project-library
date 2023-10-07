//Create some variables and get the relative data related to the HTML page.

const container = document.getElementById("container");
const card = document.getElementsByClassName("card");
const cart = document.getElementById("cart");
const filterDropDown = document.getElementById("filterDropDown");
// const

const addedToCart = [];
//const addToCart = () => {};

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

const filterBooks = () => {
    // Get the selected value from the filter dropdown.
    const value = filterDropDown.value;
  
    if (value === "All") {
      loadBooks(books);
    } else {
      // Otherwise, filter books by genre and show the right one.
      const filteredDropDown = books.filter((book) => book.genre === value);
      loadBooks(filteredDropDown);
      
      // A log to see which array has been created and shown.
      console.log(filteredDropDown);
    }
  };

  // Event listener to call the function filterBooks() when there's a change detected
  // dropdown menu.
  filterDropDown.addEventListener("change", filterBooks);
  
  // Initial display of all books.
  loadBooks(books);