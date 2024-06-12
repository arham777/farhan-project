function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideBar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none"
}






document.addEventListener("DOMContentLoaded", (event) => {
  // Select the cart value element and the add to cart button
  const cartValueElement = document.getElementById("cart-value");
  const addToCartButton = document.getElementById("add-to-cart-btn");

  // Initialize the cart value
  let cartValue = 0;

  // Add event listener for the add to cart button
  addToCartButton.addEventListener("click", () => {
    // Increase the cart value
    cartValue += 1;

    // Update the cart value displayed on the webpage
    cartValueElement.textContent = cartValue;
  });
});


function signUp() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
      alert('Thank you for signing up!');
      emailInput.value = ''; // Clear the input field
  } else {
      alert('Please enter a valid email address.');
  }
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}