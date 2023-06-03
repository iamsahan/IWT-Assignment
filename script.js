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
