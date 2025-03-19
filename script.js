// Demo products data
const products = [
    {
        id: 1,
        title: "Wireless Headphones",
        price: 79.99,
        image: "https://via.placeholder.com/250x200/4a69bd/ffffff?text=Headphones",
        description: "Premium wireless headphones with noise cancellation."
    },
    {
        id: 2,
        title: "Smart Watch",
        price: 129.99,
        image: "https://via.placeholder.com/250x200/4a69bd/ffffff?text=Smart+Watch",
        description: "Track your fitness and stay connected with this smart watch."
    },
    {
        id: 3,
        title: "Laptop Backpack",
        price: 49.99,
        image: "https://via.placeholder.com/250x200/4a69bd/ffffff?text=Backpack",
        description: "Stylish and durable backpack with laptop compartment."
    },
    {
        id: 4,
        title: "Bluetooth Speaker",
        price: 39.99,
        image: "https://via.placeholder.com/250x200/4a69bd/ffffff?text=Speaker",
        description: "Portable Bluetooth speaker with crisp sound quality."
    },
    {
        id: 5,
        title: "Coffee Mug",
        price: 14.99,
        image: "https://via.placeholder.com/250x200/4a69bd/ffffff?text=Coffee+Mug",
        description: "Ceramic coffee mug with elegant design."
    },
    {
        id: 6,
        title: "Desk Lamp",
        price: 29.99,
        image: "https://via.placeholder.com/250x200/4a69bd/ffffff?text=Desk+Lamp",
        description: "LED desk lamp with adjustable brightness."
    }
];

// Cart functionality
let cart = [];

// DOM elements
const productGrid = document.getElementById('productGrid');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const cartIcon = document.querySelector('.cart-icon');
const closeCart = document.querySelector('.close-cart');
const checkoutBtn = document.querySelector('.checkout-btn');

// Display products
function displayProducts() {
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
    
    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Add to cart
function addToCart(event) {
    const productId = parseInt(event.target.dataset.id);
    const product = products.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCart();
    showCart();
}

// Update cart display
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        count += item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.title}</h4>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="qty-btn decrease" data-id="${item.id}">-</button>
                    <span class="qty-value">${item.quantity}</span>
                    <button class="qty-btn increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = count;
    
    // Add event listeners to quantity buttons
    const decreaseButtons = document.querySelectorAll('.decrease');
    const increaseButtons = document.querySelectorAll('.increase');
    
    decreaseButtons.forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    
    increaseButtons.forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
}

// Decrease quantity
function decreaseQuantity(event) {
    const productId = parseInt(event.target.dataset.id);
    const item = cart.find(item => item.id === productId);
    
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    
    updateCart();
}

// Increase quantity
function increaseQuantity(event) {
    const productId = parseInt(event.target.dataset.id);
    const item = cart.find(item => item.id === productId);
    
    item.quantity += 1;
    updateCart();
}

// Show cart modal
function showCart() {
    cartModal.classList.add('open');
}

// Hide cart modal
function hideCart() {
    cartModal.classList.remove('open');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
    hideCart();
}

// Event listeners
cartIcon.addEventListener('click', showCart);
closeCart.addEventListener('click', hideCart);
checkoutBtn.addEventListener('click', checkout);

// Initialize the app
displayProducts();