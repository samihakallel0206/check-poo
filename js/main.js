//avec le console.log juste

// Product class to store properties for id, name, and price of the product
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ShoppingCartItem class to store properties for product and its quantity
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate the total price of the item
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// ShoppingCart class contains an array of ShoppingCartItem instances
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Method to get the total number of items inside the cart
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Method to add items to the cart
  addItem(item) {
    this.items.push(item);
  }

  // Method to remove items from the cart
  removeItem(itemId) {
    this.items = this.items.filter((item) => item.product.id !== itemId);
  }

  // Method to display cart items
  displayCart() {
    console.log("Shopping Cart Items:");
    this.items.forEach((item) => {
      console.log(`${item.product.name} - Quantity: ${item.quantity}`);
    });
    console.log(`Total Items: ${this.getTotalItems()}`);
  }
}

// Test the ability of objects
// Create products
const product1 = new Product(1, "Product 1", 10);
const product2 = new Product(2, "Product 2", 20);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
const item1 = new ShoppingCartItem(product1, 2);
const item2 = new ShoppingCartItem(product2, 3);

cart.addItem(item1);
cart.addItem(item2);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(1);

// Display the cart after removing an item
cart.displayCart();
