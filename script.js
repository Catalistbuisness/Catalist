function showProfile(name) {
    alert('You clicked on ' + name + ' profile!');
}

function subscribe(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    document.getElementById('subscribe-msg').textContent = 'Thank you for subscribing, ' + email + '!';
    document.getElementById('email').value = '';
}
let cart = [];

function toggleCart() {
    const container = document.getElementById('cart-items-container');
    container.style.display = container.style.display === 'block' ? 'none' : 'block';
}

function addToCart(itemName) {
    cart.push(itemName);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });
    const count = document.getElementById('cart-count');
    if (cart.length > 0) {
        count.style.display = 'inline-block';
        count.textContent = cart.length;
    } else {
        count.style.display = 'none';
    }
}