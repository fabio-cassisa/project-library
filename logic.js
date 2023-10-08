//Create some variables and get the relative data related to the HTML page.
const booksSection = document.getElementById("booksSection");
const card = document.getElementsByClassName("card");
const filterDropDown = document.getElementById("filterDropDown");
const byNewest = document.getElementById("byNewest");
const byOldest = document.getElementById("byOldest");
const searchInput = document.getElementById("searchInput"); 
const cartItemsContainer = document.getElementById("cartItems");

// Empty array for the cart option
const cartItems = [];

// Function for "adding to cart"
function addToCart(bookId) {
    const book = books.find((b) => b.id === bookId);
    if (book) {
      cartItems.push(book);
      updateCartDisplay();
    }
  }
  
  function updateCartDisplay() {
    cartItemsContainer.innerHTML = "";
    cartItems.forEach((book) => {
      cartItemsContainer.innerHTML += `
        <div class="cart-item">
          <h3>${book.title}</h3>
          <button class="remove-from-cart" data-id="${book.id}">Remove</button>
        </div>
      `;
    });
  }

const loadBooks = (books) => {
    booksSection.innerHTML = "";

    books.forEach((book) => { 
        booksSection.innerHTML +=
        `
        <div class="card">
            <h2>${book.title}</h2>
            <h5>by ${book.author}</h5>
            <button class="add-to-cart" data-id="${book.id}">Add to Cart</button>
            <img src="${book.image}" art="${book.title}">
            <section>
                <p>Genre: ${book.genre}, Year: ${book.year}</p>
                <p>${book.description}</p>
            </section>
            <p>Rating: ${book.rating}</p>
        </div>
        `;
        const addToCartButtons = document.querySelectorAll(".add-to-cart");
        addToCartButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
              const bookId = event.target.getAttribute("data-id");
              addToCart(bookId);
            });
          });
    });
};

// Function to listen and remove a card if "Remove" is being clicked:
cartItemsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-from-cart")) {
      const bookId = event.target.getAttribute("data-id");
      removeFromCart(bookId);
    }
  });
  
  function removeFromCart(bookId) {
    const index = cartItems.findIndex((book) => book.id === bookId);
    if (index !== -1) {
      cartItems.splice(index, 1);
      updateCartDisplay();
    }
  }

// Function to filter books by genre: 
const filterBooks = () => {
    // Get the selected value from the filter dropdown.
    const value = filterDropDown.value;
  
    if (value === "All") {
      loadBooks(books);
    } else {
      // Otherwise, filter books by genre and show the right one.
      const filteredDropDown = books.filter((book) => book.genre === value);
      loadBooks(filteredDropDown);
    }
  };

// Function to sort books by newest to oldest:
function sortByNewest() {
    const sortedBooksNew = books.sort((a, b) => (b.year - a.year))
    loadBooks(sortedBooksNew)
};

// Function to sort books by oldest to newest:
function sortByOldest() {
    const sortedBooksOld = books.sort((a, b) => (a.year - b.year))
    loadBooks(sortedBooksOld)
};

// Function to filter books by title:
function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase();
  
    if (searchTerm === "") {
      // If the search input is empty, display all books.
      loadBooks(books);
    } else {
      // Filter books whose titles contain the search term.
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
      );
      loadBooks(filteredBooks);
    }
  }

// (EXTRA) Function to sort by alphabetical order: 


// Function to sort books by rating:
  // Highest to lowest:

  // Lowest to highest: 



// EVENT LISTENERS SECTION HERE BELOW:
  // Event listener to call the function filterBooks() when there's a change detected
  // dropdown menu:
  filterDropDown.addEventListener("change", filterBooks);
  // sort by newest:
  byNewest.addEventListener("click", sortByNewest);
  // sort by oldest:
  byOldest.addEventListener("click", sortByOldest);
  // search option:
  searchInput.addEventListener("input", searchBooks);

// Initial display of all books.
loadBooks(books);
