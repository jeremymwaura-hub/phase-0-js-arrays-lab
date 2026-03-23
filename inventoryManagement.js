// Write your code here
// inventoryManagement.js

// Step 1: Create an array called products with initial product names
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Step 2: Function to log the first product
function logFirstProduct() {
  console.log(products[0]);
}
// Step 3: Function to add a new product to the array
function addProduct(productName) {
  products.push(productName);
  console.log(`Added product: ${productName}`);
}

// Step 4: Function to update the name of a product at a specific position
function updateProductName(position, newName) {
  if (position >= 0 && position < products.length) {
    let oldName = products[position];
    products[position] = newName;
    console.log(`Updated product: ${oldName} → ${newName}`);
  } else {
    console.log("Error: Invalid position");
  }
}

// Step 5: Function to remove the last product from the array
function removeLastProduct() {
  let removed = products.pop();
  console.log(`Removed last product: ${removed}`);
}

// Testing the functions (optional, for debugging)
logFirstProduct();          // Should log "Laptop"
addProduct("Tablet");       // Adds "Tablet" to products
updateProductName(1, "Smartphone"); // Changes "Phone" to "Smartphone"
removeLastProduct();        // Removes "Tablet"

// To see the final state of the array
console.log("All products:", products);


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
