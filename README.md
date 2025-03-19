# ecommerce

# SimpliShop E-commerce Website

A lightweight, responsive e-commerce website template with core shopping functionality.

![SimpliShop Screenshot](https://via.placeholder.com/800x400/4a69bd/ffffff?text=SimpliShop+E-commerce)

## Features

- 📱 Fully responsive design
- 🛒 Working shopping cart functionality
- 🏷️ Product catalog with demo products
- ➕ Add/remove items from cart
- 🔢 Adjust product quantities
- 💰 Real-time cart total calculation
- 🔄 Smooth animations and transitions

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (No frameworks)

## Project Structure

```
simplishop/
│
├── index.html         # Main HTML file
├── styles.css         # CSS styles
├── script.js          # JavaScript functionality
└── README.md          # Project documentation
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/simplishop.git
```

2. Navigate to the project directory:
```bash
cd simplishop
```

3. Open the project in VSCode or your preferred code editor.

## Running the Application

### Method 1: Using VSCode Live Server
1. Install the "Live Server" extension in VSCode
   - Click on Extensions in the sidebar (or press Ctrl+Shift+X)
   - Search for "Live Server" and install the one by Ritwick Dey
2. Right-click on `index.html` and select "Open with Live Server"
3. The website will open in your default browser

### Method 2: Opening the HTML File Directly
- Simply open the `index.html` file in any web browser

## How to Use

1. **Browse Products**: Scroll through the available demo products on the homepage
2. **Add to Cart**: Click the "Add to Cart" button on any product to add it to your shopping cart
3. **View Cart**: Click the cart icon (🛒) in the header to view your cart
4. **Adjust Quantities**: Use the + and - buttons in the cart to adjust product quantities
5. **Checkout**: Click the "Checkout" button to complete your purchase (demo functionality)

## Customization

### Adding New Products

To add new products, edit the `products` array in the `script.js` file:

```javascript
const products = [
    {
        id: 7,  // Use a unique ID
        title: "New Product",
        price: 99.99,
        image: "https://via.placeholder.com/250x200/4a69bd/ffffff?text=New+Product",
        description: "Description of the new product."
    },
    // Add more products as needed
];
```

### Changing Colors

The main color scheme can be modified in the `styles.css` file. Look for the color variables (especially `#4a69bd` for the primary color).

## Future Enhancements

- User authentication system
- Product categories and filters
- Product detail pages
- Wishlist functionality
- Payment gateway integration
- Order history
- Admin dashboard

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Placeholder images provided by [placeholder.com](https://placeholder.com)
- Icons used are native emoji characters

---

**Note**: This is a demo project for educational purposes. In a production environment, you would want to implement proper backend functionality, user authentication, and secure payment processing.
