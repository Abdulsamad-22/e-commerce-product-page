const addToCart = document.getElementById('add-to-cart');
const cartNumber = document.getElementById('cart-number');
const cart = document.getElementById('cart');
const cartSection = document.getElementById('open-cart');
const menu = document.getElementById('menu');
const navBar = document.getElementById('nav-bar');

menu.addEventListener('click', () => {
    navBar.classList.toggle('hidden');

    if (navBar.classList.contains('hidden')) {
        menu.src = 'images/icon-menu.svg';
    } else {
        menu.src = 'images/icon-close.svg';
    }
});

cart.addEventListener('click', () => {
    const cartDetails = document.querySelector('.cart-details');
    cartSection.classList.remove('hidden');

    if (cartQuantity === 0) {
        cartDetails.innerHTML = 'Your cart is empty';
    }
});

let cartCount = document.getElementById('cart-count');
const qty = document.getElementById('qtyAndPrice');
let cartQuantity = 0
function addMinuscart() {
//const container = document.getElementById('addMinusContainer');
const add = document.getElementById('plus-btn');
const decrease = document.getElementById('minus-btn');
add.addEventListener('click', () => {
    cartQuantity ++;
    cartCount.innerText = cartQuantity;
});

decrease.addEventListener('click', () => {
    console.log('add');
    if (cartQuantity <= 0) {
        return;
    }
    cartQuantity --;
    cartCount.innerText = cartQuantity;
});

    // container.addEventListener('click', (event) => {
    //     if (event.target.classList.contains('plus-btn')) {
    //         cartQuantity ++;
    //         cartCount.innerText = cartQuantity;
    //         console.log('plus');
    //     } else if (event.target.classList.contains('minus-btn')) {
    //         cartQuantity --;
    //         cartCount.innerText = cartQuantity;
    //         console.log(cartQuantity);
    //     }
    // });
}

addMinuscart();

addToCart.addEventListener('click', () => {
    cartNumber.classList.remove('hidden');

    if (cartQuantity === 0) {
        cartNumber.classList.add('hidden');
    }
    cartNumber.innerText = cartQuantity;
});

const products = [{
    product1: {
        id: '1',
        Image: 'images/image-product-1.jpg',
    },
        product2: {
            id: '2',
            image: 'images/image-product-2.jpg'
    } ,  
    product3: {
        id: '3',
        image: 'images/image-product-3.jpg'
    },
    product4: {
        id: '4',
        image: 'images/image-product-4.jpg'
    } 
}];

const thumbnail = document.querySelectorAll('.product-thumbnail');
const productImage = document.getElementById('product-image');

productImage.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    const overlaySection = document.getElementById('overlay-section');
    //overlay.classList.remove('hidden');
    //overlaySection.classList.remove('hidden');
});

thumbnail.forEach((btn, index) => {
    // btn.forEach(btn => btn.remove.classList('active'));
    btn.addEventListener('click', () => {
        if (index === 0) {
            productImage.src = 'images/image-product-1.jpg';
            btn.classList.add('active');
        } else if (index === 1) {
            productImage.src = 'images/image-product-2.jpg';
            btn.classList.add('active');
        } else if (index === 2) {
            productImage.src = 'images/image-product-3.jpg';
            btn.classList.add('active');
        } else if (index === 3) {
            productImage.src = 'images/image-product-4.jpg';
            btn.classList.add('active');
        } else {
            console.log("can't find product");
        }
    });
});