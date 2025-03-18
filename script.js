const addToCart = document.getElementById('add-to-cart');
const cartNumber = document.getElementById('cart-number');
const cart = document.getElementById('cart');
const cartSection = document.getElementById('open-cart');

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const navBar = document.getElementById('nav-bar');


menuBtn.addEventListener('click', () => {
    navBar.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    navBar.classList.add('hidden');
    overlay.classList.add('hidden');
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

    if (cartDetails && (cartQuantity > 0 || cartQuantity === 0)) {
        cartSection.classList.add('hidden');
    }
});

const thumbnail = document.querySelectorAll('.product-thumbnail');
const productImage = document.getElementById('product-image');
const overlay = document.getElementById('overlay');
const overlaySection = document.getElementById('overlay-section');

const closeModal = document.getElementById('close-modal');

closeModal.addEventListener('click', () => {
    console.log('close modal');
    overlay.classList.add('hidden');
    overlaySection.classList.add('hidden');
});

const imageModal = document.getElementById('product2');

const thumbnailModal = document.querySelectorAll('.product-thumbnail-modal');

let i = 0;
const products = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
];
function changeProduct() {
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    //let i = 0;
    console.log(products[i]);

    next.addEventListener('click', () => {
        if (imageModal) {
            i = (i + 1) % products.length;
            imageModal.src = products[i];
        }
    });

    prev.addEventListener('click', () => {
        if (imageModal) {
            i = (i - 1 + products.length) % products.length;
            imageModal.src = products[i];
        }
    });
}

changeProduct();

const mainNext = document.getElementById('mainNext');
const mainPrev = document.getElementById('mainPrev');

mainNext.addEventListener('click', () => {
    activeBg.forEach(bg => bg.classList.remove('opacity-80'));
    
    const overlay = document.querySelector('.active-bg');
    if (overlay) {
        overlay.classList.add('opacity-80');
    }

    if (productImage) {
        i = (i + 1) % products.length;
        productImage.src = products[i];
    }
});

mainPrev.addEventListener('click', () => {
    if (productImage) {
        i = (i - 1 + products.length) % products.length;
        productImage.src = products[i];
    }
});

const modalActive = document.querySelectorAll('.modalActive');

const activeBg = document.querySelectorAll('.active-bg');

function displayCurrentImage(thumbnail, activeBg, productImage, className= ".active-bg") {
    thumbnail.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            thumbnail.forEach(btn => btn.classList.remove('active'));
            btn.classList.add('active');
    
            activeBg.forEach(bg => bg.classList.remove('opacity-80'));
    
            const overlay = btn.querySelector(className);
            if (overlay) {
                overlay.classList.add('opacity-80');
            }

            if (index < products.length) {
                productImage.src = products[index];
                console.log(index);
            } else {
                console.log("can't find product");
            }
        });
    });
}

displayCurrentImage(thumbnail, activeBg, productImage, className= ".active-bg");
displayCurrentImage(thumbnailModal, modalActive, imageModal, className= ".modalActive");

const cartDetails = document.querySelector('.cart-details');
cart.addEventListener('click', () => {
    cartSection.classList.toggle('hidden');

    if (cartDetails) {
        if (cartQuantity === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.classList.add('empty');
            emptyMessage.textContent = 'Your Cart is Empty';
            // const totalPrice = ;
        cartDetails.innerHTML = emptyMessage.textContent;
        } else if (cartQuantity > 0) {
            let HTML = `
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center gap-3">
                        <div class="w-[15%]">
                            <img class="rounded-lg" src="images/image-product-1-thumbnail.jpg">
                        </div>
        
                        <div>
                            <p class="text-[#818181]">
                                Fall Limited Edition Sneakers
                            </p>
            
                            <p><span class="qtyAndPrice text-[#818181]">$125.00 x${cartQuantity}</span> <span class="total-price font-semibold">$${(Number(125 * cartQuantity)).toFixed(2)}</span>
                            </p>
                        </div>
                    </div>
        
                    <div class="delete-cart w-[20px]">
                        <img class="delete-cart cursor-pointer" src="images/icon-delete.svg">
                    </div>
                </div>
    
                  <button id="checkout-btn" class="rounded-lg bg-[#ff7d1a] w-full py-3 font-semibold cursor-pointer">Checkout</button>
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

});

const image = document.getElementById('bg-image');
function resizeWindow() {
    if (window.innerWidth <= 768) {
        overlay.classList.add('hidden');
        overlaySection.classList.add('hidden');
        if (productImage) {
            productImage.removeEventListener('click', () => {
                console.log('slider');
                overlay.classList.remove('hidden');
                overlaySection.classList.remove('hidden');
            });
        }    
    } else if (window.innerWidth >= 768) {
        if (productImage) {
            productImage.addEventListener('click', (event) => {
                console.log('slider');
                overlay.classList.remove('hidden');
                overlaySection.classList.remove('hidden');
            });
        } 
    }
}

if (productImage) {
    resizeWindow();

    let resizeTimer;
    window.addEventListener('resize', () => { 
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeWindow, 250)
    });
} else {
    console.log('background not found');
}
