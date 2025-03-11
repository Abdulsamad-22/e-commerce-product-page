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

let cartCount = document.getElementById('cart-count');
const qty = document.querySelector('.qtyAndPrice');
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
    console.log('remove');
    if (cartQuantity <= 0) {
        return;
    }
    cartQuantity --;
    cartCount.innerText = cartQuantity;
});

}

addMinuscart();

const totalHtml = document.querySelector('.total-price');
const qtyAmount = document.querySelector('.qtyAndPrice');
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
const overlay = document.getElementById('overlay');
const overlaySection = document.getElementById('overlay-section');

document.addEventListener('DOMContentLoaded', () => {
    let currentProduct = 0;
    const {image} = products[currentProduct];
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
});


productImage.addEventListener('click', (event) => {
    console.log('slider');
    // if (event.target.classList.contains('next')) {
    //     console.log('next');
    //     currentProduct = (currentProduct + 1) % products.length;
    //     productImage.src = currentProduct;
    // } else if (event.target.classList.contains('prev')) {
    //     console.log('previous');
    //     currentProduct = (currentProduct - 1 + products.length) % length;
    // }
    overlay.classList.remove('hidden');
    overlaySection.classList.remove('hidden');
});

thumbnail.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        thumbnail.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        if (index === 0) {
            productImage.src = 'images/image-product-1.jpg';
            console.log('item 1');
        } else if (index === 1) {
            productImage.src = 'images/image-product-2.jpg';
            console.log('item 2');
        } else if (index === 2) {
            productImage.src = 'images/image-product-3.jpg';
            console.log('item 3');
        } else if (index === 3) {
            productImage.src = 'images/image-product-4.jpg';
            console.log('item 4');
        } else {
            console.log("can't find product");
        }
    });
});

// window.addEventListener('click', () => {
//     overlay.classList.add('hidden');
// })

const cartDetails = document.querySelector('.cart-details');
cart.addEventListener('click', () => {
    cartSection.classList.toggle('hidden');

    if (cartDetails) {
        if (cartQuantity === 0) {
            // const totalPrice = ;
        cartDetails.innerHTML = `
            Your Cart is Empty
        `;
        } else if (cartQuantity > 0) {
            let HTML = `
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center gap-3">
                        <div class="w-[15%]">
                            <img src="images/image-product-1-thumbnail.jpg">
                        </div>
        
                        <div>
                            <p>
                                Fall Limited Edition Sneakers
                            </p>
            
                            <p><span class="qtyAndPrice">$125.00 x${cartQuantity}</span> <span class="total-price font-semibold">$${(Number(125 * cartQuantity)).toFixed(2)}</span>
                            </p>
                        </div>
                    </div>
        
                    <div class="delete-cart">
                        <img class="delete-cart cursor-pointer" src="images/icon-delete.svg">
                    </div>
                </div>
    
                  <button id="checkout-btn" class="rounded-lg bg-[#ff7d1a] w-full py-2 font-semibold cursor-pointer">Checkout</button>
            `;
            cartDetails.innerHTML = HTML;

                const deleteCart = document.querySelector('.delete-cart');
                deleteCart.addEventListener('click', () => {
                    console.log('delete cart');
                    cartDetails.innerHTML = '';    
                    cartQuantity = 0;
                    cartNumber.classList.add('hidden');
                    cartCount.innerText = 0;
                    cartSection.classList.add('hidden');
                });
            
                const checkout = document.getElementById('checkout-btn');
            
                checkout.addEventListener('click', () => {
                    cartDetails.innerHTML = '';    
                    console.log('checkout');
                    cartQuantity = 0;
                    cartNumber.classList.add('hidden');
                    cartCount.innerText = 0;
                    cartSection.classList.add('hidden');
                });
            
        }
    }

    // if (cartQuantity === 0) {
    //     cartDetails.innerHTML = 'Your cart is empty';
    // }
});
