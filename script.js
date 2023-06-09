// Get the previous and next buttons
const previousButton = document.querySelector('.pre_button');
const nextButton = document.querySelector('.post_button');

// Get the product container and the width of a single product item
const productContainer = document.querySelector('.product-container');
const productItemWidth = document.querySelector('.product-item').offsetWidth;

// Add event listeners to the previous and next buttons
previousButton.addEventListener('click', scrollToPrevious);
nextButton.addEventListener('click', scrollToNext);

// Function to scroll to the previous item
function scrollToPrevious() {
  productContainer.scrollBy({
    left: -productItemWidth,
    behavior: 'smooth'
  });
}

// Function to scroll to the next item
function scrollToNext() {
  productContainer.scrollBy({
    left: productItemWidth,
    behavior: 'smooth'
  });
}

// Get the previous and next buttons
const preButton = document.querySelector('.pre_button1');
const postButton = document.querySelector('.post_button1');

// Get the product container and the width of a single product item
const pContainer = document.querySelector('.itemContainer');
const pItemWidth = document.querySelector('.b1').offsetWidth;

// Add event listeners to the previous and next buttons
preButton.addEventListener('click', scrollToPre);
postButton.addEventListener('click', scrollToNex);

// Function to scroll to the previous item
function scrollToPre() {
  pContainer.scrollBy({
    left: -pItemWidth,
    behavior: 'smooth'
  });
}

// Function to scroll to the next item
function scrollToNex() {
  pContainer.scrollBy({
    left: pItemWidth,
    behavior: 'smooth'
  });
}
