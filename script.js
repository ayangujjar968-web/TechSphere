document.addEventListener('DOMContentLoaded', function() {
    // --- IMPORTANT: CONFIGURATION ---
    const WHATSAPP_NUMBER = '923490581384'; // <-- EDIT THIS with your full number (e.g., 923001234567)

    // --- SAMPLE PRODUCT DATA ---
    // In a real application, this would come from a database/API.
    // Prices are stored as original prices and discounted later.

    // --- DISCOUNT CONFIGURATION ---
    const DISCOUNT_PERCENTAGE = 25; // 25% off
    const DISCOUNT_MULTIPLIER = (100 - DISCOUNT_PERCENTAGE) / 100; // 0.75 for 25% off


    const products = [
        // --- Speakers (2) ---
       
    // --- Speakers (2) ---
    {
        id: 1,
        name: "Portable Audio Speaker",
        price: 1800,
        image: "products/Speaker1.jpeg",
        description: "A high-powered portable speaker with deep bass and crystal-clear audio. Perfect for parties and outdoor adventures.",
        category: "Speaker",
        featured: true,
        bestseller: true
    },
    {
        id: 2,
        name: "Mini Bluetooth Speaker",
        price: 1800,
        image: "products/Speaker2.jpeg",
        description: "A compact and lightweight Bluetooth speaker that delivers impressive sound for its size.",
        category: "Speaker",
        featured: false,
        bestseller: false
    },

    // --- Chargers (5) ---
    {
        id: 3,
        name: "USB-C Power Adapter",
        price: 1500,
        image: "products/charger1.jpeg",
        description: "High-speed USB-C power adapter for modern smartphones and tablets.",
        category: "Charging Accessories",
        featured: true,
        bestseller: false
    },
    {
        id: 4,
        name: "Wireless Charging Pad",
        price: 2500,
        image: "products/charger2.jpeg",
        description: "Simply place your compatible phone on the pad for easy wireless charging.",
        category: "Charging Accessories",
        featured: false,
        bestseller: true
    },
    {
        id: 5,
        name: "Travel Charger Kit",
        price: 2500,
        image: "products/charger3.jpeg",
        description: "A complete travel kit with a charger and multiple cable types.",
        category: "Charging Accessories",
        featured: false,
        bestseller: false
    },
    {
        id: 6,
        name: "Multi-Device Charging Station",
        price: 2000,
        image: "products/charger4.jpeg",
        description: "Organize and charge all your gadgets in one place with this station.",
        category: "Charging Accessories",
        featured: false,
        bestseller: false
    },

    // --- Holders (3) ---
    {
        id: 7,
        name: "Magnetic Car Holder",
        price: 1450,
        image: "products/Holder1.jpeg",
        description: "A strong magnetic holder that clips onto your car's air vent.",
        category: "Holders",
        featured: true,
        bestseller: true
    },
    {
        id: 8,
        name: "Adjustable Desk Stand",
        price: 1450,
        image: "products/Holder2.jpeg",
        description: "A sturdy and adjustable stand for your phone or tablet, perfect for your desk.",
        category: "Holders",
        featured: false,
        bestseller: false
    },
    {
        id: 9,
        name: "Dashboard Grip Mount",
        price: 1400,
        image: "products/Holder4.jpeg",
        description: "A secure grip mount that attaches to your car's dashboard.",
        category: "Holders",
        featured: false,
        bestseller: false
    },

    // --- Smart Watches (15) ---
    {
        id: 10,
        name: "Fitness Tracker Smart Watch",
        price: 2800,
        image: "products/SmartWatch1.jpeg",
        description: "Track your steps, heart rate, and workouts with this feature-packed smart watch.",
        category: "Smart Watches",
        featured: true,
        bestseller: true
    },
    {
        id: 11,
        name: "Classic Leather Smart Watch",
        price: 2800,
        image: "products/SmartWatch2.jpeg",
        description: "A stylish smart watch with a classic design and a genuine leather strap.",
        category: "Smart Watches",
        featured: true,
        bestseller: false
    },
    {
        id: 12,
        name: "Sport Edition Smart Watch",
        price: 8000,
        image: "products/SmartWatch3.jpeg",
        description: "A durable and water-resistant smart watch designed for an active lifestyle.",
        category: "Smart Watches",
        featured: false,
        bestseller: true
    },
    {
        id: 13,
        name: "Minimalist Smart Watch",
        price: 8000,
        image: "products/SmartWatch4.jpeg",
        description: "A sleek and minimalist smart watch with essential notification features.",
        category: "Smart Watches",
        featured: false,
        bestseller: false
    },
    {
        id: 14,
        name: "Adventure Series Smart Watch",
        price: 2200,
        image: "products/SmartWatch5.jpeg",
        description: "A rugged smart watch with GPS and long battery life, built for adventure.",
        category: "Smart Watches",
        featured: false,
        bestseller: false
    },
    {
        id: 15,
        name: "Elegant Gold Smart Watch",
        price: 4800,
        image: "products/SmartWatch6.jpeg",
        description: "An elegant smart watch with a gold finish and customizable watch faces.",
        category: "Smart Watches",
        featured: true,
        bestseller: false
    },
    {
        id: 16,
        name: "Kids' Smart Watch with GPS",
        price: 4000,
        image: "products/SmartWatch7.jpeg",
        description: "A fun and safe smart watch for kids, featuring GPS tracking and parental controls.",
        category: "Smart Watches",
        featured: false,
        bestseller: true
    },
    {
        id: 17,
        name: "Luxury Diamond Smart Watch",
        price: 4800,
        image: "products/SmartWatch8.jpeg",
        description: "A luxury smart watch adorned with diamonds, combining technology with high fashion.",
        category: "Smart Watches",
        featured: true,
        bestseller: false
    },
    {
        id: 18,
        name: "Outdoor Sports Smart Watch",
        price: 2800,
        image: "products/SmartWatch9.jpeg",
        description: "A smart watch designed for outdoor sports enthusiasts, with altimeter and barometer features.",
        category: "Smart Watches",
        featured: false,
        bestseller: false
    },
    {
        id: 19,
        name: "Classic Round Smart Watch",
        price: 4000,
        image: "products/SmartWatch10.jpeg",
        description: "A classic round-faced smart watch with a variety of customizable straps.",
        category:"Smart Watches",
        featured: false,
        bestseller: true
    },
    {
        id: 20,
        name: "Smart Watch with ECG Monitor",
        price: 8000,
        image: "products/SmartWatch11.jpeg",
        description: "A health-focused smart watch featuring an ECG monitor and advanced health tracking.",
        category: "Smart Watches",
        featured: true,
        bestseller: false
    },
    {
        id: 21,
        name: "Budget Friendly Smart Watch",
        price: 2800,
        image: "products/SmartWatch12.jpeg",
        description: "An affordable smart watch that covers all the basics without breaking the bank.",
        category: "Smart Watches",
        featured: false,
        bestseller: true
    },
    {
        id: 22,
        name: "Hybrid Smart Watch",
        price: 7000,
        image: "products/SmartWatch13.jpeg",
        description: "A hybrid smart watch that combines traditional analog design with smart features.",   
        category: "Smart Watches",
        featured: false,
        bestseller: false
    },
    {
        id: 23,
        name: "Smart Watch with Sleep Tracking",
        price: 7500,
        image: "products/SmartWatch14.jpeg",
        description: "A smart watch that offers advanced sleep tracking and wellness features.",
        category: "Smart Watches",
        featured: false,
        bestseller: true
    },

    // --- Microphone (1) ---
    {
        id: 25,
        name: "USB Condenser Microphone",
        price: 12000,
        image: "products/Mic1.jpeg", // TODO: Add product image
        description: "Laviosa Wireless Microphone offers crystal-clear, low-latency audio with omni-directional pickup and advanced noise reduction. Perfect for live performances, presentations, and professional audio needs with 8hrs battery life and real-time monitoring.",

        category: "Microphone",
        featured: false,
        bestseller: false
    },

    // --- Airpods (1) ---
    {
        id: 26,
        name: "Airpods Pro 2 copy",
        price: 1066,
        image: "products/Airpod1.jpeg", // TODO: Add product image
        description: "Experience sleek, wireless audio perfection with the white Beats earbuds – premium sound, stylish design, and seamless connectivity for your everyday vibe.",
        category: "Airpods",
        featured: false,
        bestseller: false
    },
     {
        id: 27,
        name: "Me&You 2 Wireless Earbuds",
        price: 3000,
        image: "products/Airpod2.jpeg",
        description: "Experience premium sound with the Me&You 2 Wireless Earbuds, featuring advanced ENC noise cancellation, Bluetooth 5.4 connectivity, and a sleek white design. Enjoy crystal-clear calls, high-definition audio, and a stable wireless connection wherever you go. The compact charging case provides all-day convenience, making these earbuds perfect for music lovers, commuters, and anyone seeking stylish, high-performance true wireless earphones.",
        category: "Airpods",
        featured: false,
        bestseller: false
    },
    {
        id: 28,
        name: "JBUDS AirExecutive True Wireless Earbuds",
        price: 3000,
        image: "products/Airpod3.jpeg",
        description: "JBUDS AirExecutive True Wireless Earbuds - sleek black Bluetooth earbuds with premium sound, 30+ hours of playtime, and crystal‑clear calling. Featuring custom DSP sound tuning, Cloud Foam eartips, and auto‑on & connect for seamless use. Ideal for business, travel, and everyday music lovers.",
        category: "Airpods",
        featured: true,
        bestseller: true
    },
    {
        id: 29,
        name: "TREBLE 3-in-1 Wireless Speaker, TWS Earbuds & Power Bank",
        price: 4000,
        image: "products/Speaker3.jpeg",
        description: "Unleash powerful sound with the TREBLE 3-in-1 Wireless Speaker, TWS Earbuds & Power Bank, featuring a sleek black design that combines a portable Bluetooth speaker, true wireless earbuds, and a built-in power bank—all in one compact device. Enjoy rich, immersive audio powered by a 5W high-performance driver, plus smooth Bluetooth connectivity for effortless music playback. With its integrated power bank, you can conveniently charge your phone or earbuds on the go, making it perfect for travel, outdoor use, study sessions, and everyday listening. This smart 3-in-1 system gives you loudspeaker audio, private earphone listening, and portable charging—all in one stylish package.",
        category: "Speaker",
        featured: false,
        bestseller: false
    },
    // --- HeadPhones (6) ---
   
    {
        id: 24,
        name: "Wireless Over-Ear Headphones",
        price: 1600,
        image: "products/HeadPhone1.jpeg",
        description: "Experience high-fidelity sound with these comfortable wireless over-ear headphones.",
        category: "HeadPhones",
        featured: true,
        bestseller: true
    },
    {
  id: 30,
  name: "Sikenai LY-G300 Bluetooth Headphones",
  price: 6800,
  image: "products/Headphone2.png",
  description: "High-Fidelity Audio with LED Visualizer Elevate your listening experience with the Sikenai LY-G300. These head-mounted Bluetooth earphones combine premium sound quality with a modern, tech-forward aesthetic.Premium Sound: Features Hi-Fi audio technology for crisp highs and deep, immersive bass.Dynamic LED Display: Stand out with a unique, built-in blue LED visualizer that pulses on the earcups.Advanced Features: Equipped with noise-cancellation technology to provide a focused listening environment.",
  category: "HeadPhones",
  featured: true,
  bestseller: false
    },
    {
        id: 31,
        name: "Lycander Gaming Headset",
        price: 4500,
        image: "products/Headphone3.png",
        description: "Bold Style, Total Control The Lycander gaming headset is built for players who want a reliable, high-performance audio solution with a striking visual edge.Integrated Controls: Easily adjust your audio on the fly with convenient on-ear volume control.Clear Communication: High-sensitivity microphone ensures your voice is heard clearly in every match.Vibrant LED Lighting: Features a signature red LED ring on the earcups for a pro-gaming look.Ergonomic Design: Padded ear cushions and a lightweight frame provide comfort for hours of continuous use.",
        category: "HeadPhones",
        featured: false,
        bestseller: true
    },
    {
        id: 32,
        name: "Onikuma K20 Professional Gaming Headset",
        price: 1800,
        image: "products/Headphone4.png",
        description: "Engineered for Competitive Play Dominating the game requires precision. The Onikuma K20 is a professional-grade gaming headset designed for comfort and tactical audio clarity.Audio Precision: Powered by 40mm directional drivers to help you hear every footstep and detail.Noise-Cancelling Mic: Features a high-quality, flexible microphone that filters out background noise for clear team communication.Built to Last: Designed with an adjustable steel slider for a custom, durable fit during long gaming sessions.Multi-Platform: Fully compatible with PC, consoles, and mobile devices.",
        category: "HeadPhones",
        featured: false,
        bestseller: false
    },
    {
        id: 33,
        name: "Kotion Each G9600 Camo Edition",
        price: 2400,
        image: "products/Headphone5.png",
        description: "Surround Yourself in the Action Gear up with the G9600. This heavy-duty gaming headset features a rugged camouflage design and immersive surround sound capabilities.Immersive Audio: Experience \"You're Surrounded\" sound quality that brings your games to life.Signature Look: Unique yellow camouflage pattern with glowing blue LED accents.Universal Connection: Features a standard 3.5mm jack for wide compatibility across all your favorite devices.Soft Comfort: Breathable mesh ear pads designed to keep you cool under pressure.",
        category: "HeadPhones",
        featured: false,
        bestseller: false
    },
    {
        id: 34,
        name: "Uenjoy UHP4 Wireless Headphones",
        price: 5400,
        image: "products/Headphone6.png",
        description: "Sophisticated Style & Silence The UHP4 is designed for the modern professional. These wireless headphones offer a sleek, minimalist look in a premium deep berry finish.Active Noise Cancellation (ANC): Block out the world and focus on your music with high-performance ANC technology.All-Day Battery: Enjoy up to 30 hours of continuous playtime on a single charge.Clear Calls: Perfect Calling technology ensures your voice stays clear during important wireless calls.Latest Tech: Powered by Bluetooth V5.4 for a fast, stable, and energy-efficient connection.",
        category: "HeadPhones",
        featured: true,
        bestseller: true
    }
    ];

    // --- OPTIMIZATION: Create a Map for faster product lookups (O(1) vs O(n)) ---
    const productMap = new Map(products.map(p => [p.id, p]));


    // --- CART MANAGEMENT ---
    const getCart = () => JSON.parse(localStorage.getItem('cart')) || [];
    const saveCart = (cart) => localStorage.setItem('cart', JSON.stringify(cart));

    const addToCart = (productId, quantity = 1) => {
        let cart = getCart();
        const existingProductIndex = cart.findIndex(item => item.id === productId);
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            cart.push({ id: productId, quantity });
        }
        saveCart(cart);
        updateCartCount();
    };

    const updateCartQuantity = (productId, quantity) => {
        let cart = getCart();
        const productIndex = cart.findIndex(item => item.id === productId);
        if (productIndex > -1) {
            if (quantity > 0) {
                cart[productIndex].quantity = quantity;
            } else {
                cart.splice(productIndex, 1); // Remove if quantity is 0 or less
            }
        }
        saveCart(cart);
        renderCartPage(); // Re-render the cart page to show changes
        updateCartCount();
    };

    const removeFromCart = (productId) => {
        let cart = getCart().filter(item => item.id !== productId);
        saveCart(cart);
        renderCartPage(); // Re-render the cart page
        updateCartCount();
    };

    const updateCartCount = () => {
        const cartCountElement = document.getElementById('cart-count');
        const stickyBar = document.getElementById('sticky-checkout-bar');
        const cart = getCart();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        if (cartCountElement) {
            cartCountElement.textContent = totalItems;
        }

        // --- Logic for the sticky checkout bar ---
        if (stickyBar) {
            if (totalItems > 0) {
                const total = cart.reduce((sum, item) => {
                    const product = productMap.get(item.id); // OPTIMIZED: Faster lookup
                    return sum + (product ? product.price * item.quantity : 0);
                }, 0) * DISCOUNT_MULTIPLIER; // Apply discount to total

                document.getElementById('sticky-cart-count').textContent = totalItems;
                document.getElementById('sticky-cart-total').textContent = `Rs ${total.toFixed(0)}`;
                stickyBar.classList.add('visible');
            } else {
                stickyBar.classList.remove('visible');
            }
        }
    };

    // --- RENDERING FUNCTIONS ---
    const createProductItemHTML = (product) => `
        <div class="product-item" data-id="${product.id}">
            <div class="sale-badge">${DISCOUNT_PERCENTAGE}% OFF</div>
            <div>
                <img src="${product.image}" alt="${product.name}" onclick="window.location.href='product.html?id=${product.id}'">
                <h3>${product.name}</h3>
                <div class="price">
                    <span>Rs ${(product.price * DISCOUNT_MULTIPLIER).toFixed(0)}</span>
                    <span class="original-price-list">Rs ${product.price.toFixed(0)}</span>
                </div>
            </div>
            <div class="btn-group">
                <button class="btn add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    `;

    const renderHomePage = () => {
        const featuredContainer = document.querySelector('.featured-products .product-slider');
        const bestSellersContainer = document.querySelector('.best-sellers .product-grid');
        if (featuredContainer) {
            featuredContainer.innerHTML = products.filter(p => p.featured).map(createProductItemHTML).join('');
        }
        if (bestSellersContainer) {
            bestSellersContainer.innerHTML = products.filter(p => p.bestseller).map(createProductItemHTML).join('');
        }
    };

    const renderShopPage = (filteredProducts = products) => {
        const productListContainer = document.getElementById('product-list');
        if (productListContainer) {
            if (filteredProducts.length === 0) {
                productListContainer.innerHTML = '<p style="text-align: center; width: 100%;">No products found.</p>';
                return;
            }
            productListContainer.innerHTML = filteredProducts.map(createProductItemHTML).join('');
        }
    };

    const renderProductDetailPage = () => {
        const params = new URLSearchParams(window.location.search);
        const productId = parseInt(params.get('id'));
        const product = productMap.get(productId); // OPTIMIZED: Faster lookup

        if (product) {
            document.title = `${product.name} - (Add your brand name here)`;
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-price').innerHTML = `Rs ${(product.price * DISCOUNT_MULTIPLIER).toFixed(0)} <span class="original-price">Rs ${product.price.toFixed(0)}</span>`;
            document.getElementById('product-description').textContent = product.description;
            
            document.querySelector('.add-to-cart-btn').dataset.id = product.id;
            document.querySelector('.whatsapp-order-btn').dataset.id = product.id;
        }
    };

    const renderCartPage = () => {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartSummaryContainer = document.querySelector('.cart-summary');
        if (!cartItemsContainer) return;

        const cart = getCart();
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
            if (cartSummaryContainer) cartSummaryContainer.style.display = 'none';
            return;
        }
        
        if (cartSummaryContainer) cartSummaryContainer.style.display = 'block';
        let total = 0;
        cartItemsContainer.innerHTML = cart.map(item => {
            const product = productMap.get(item.id); // OPTIMIZED: Faster lookup
            if (!product) return ''; // Skip if product not found
            total += product.price * item.quantity;
            return `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="cart-item-info">
                        <h4>${product.name}</h4>
                        <span class="price">Rs ${(product.price * DISCOUNT_MULTIPLIER).toFixed(0)}</span>
                    </div>
                    <div class="quantity-selector">
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                    </div>
                    <div class="item-total">Rs ${(product.price * item.quantity * DISCOUNT_MULTIPLIER).toFixed(0)}</div>
                    <button class="remove-btn" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            `;
        }).join('');

        document.getElementById('cart-total').textContent = `Rs ${total.toFixed(0)}`;
    };

    const renderCheckoutSummary = () => {
        const itemsContainer = document.getElementById('checkout-cart-items');
        const totalElement = document.getElementById('checkout-cart-total');
        const placeOrderBtn = document.getElementById('final-checkout-btn');

        if (!itemsContainer || !totalElement) return;

        const cart = getCart();

        if (cart.length === 0) {
            itemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            totalElement.textContent = 'Rs 0';
            if (placeOrderBtn) placeOrderBtn.disabled = true; // Disable button if cart is empty
            return;
        }

        let total = 0;
        itemsContainer.innerHTML = cart.map(item => {
            const product = productMap.get(item.id); // OPTIMIZED: Faster lookup
            if (!product) return '';
            total += product.price * item.quantity * DISCOUNT_MULTIPLIER; // Apply discount here
            // A simpler view for the checkout summary
            return `
                <div class="checkout-item" data-id="${item.id}">
                    <span>${product.name} (x${item.quantity})</span>
                    <button class="checkout-remove-btn" title="Remove item"><i class="fas fa-trash"></i></button>
                    <strong>Rs ${(product.price * item.quantity).toFixed(0)}</strong>
                </div>
            `;
        }).join('');

        totalElement.textContent = `Rs ${total.toFixed(0)}`;
    };

    const updateCheckoutTotal = () => {
        const totalElement = document.getElementById('checkout-cart-total');
        const placeOrderBtn = document.getElementById('final-checkout-btn');
        const cart = getCart();

        if (cart.length === 0) {
            document.getElementById('checkout-cart-items').innerHTML = '<p>Your cart is empty.</p>';
            if (placeOrderBtn) placeOrderBtn.disabled = true;
        }

        const total = cart.reduce((sum, item) => {
            const product = productMap.get(item.id); // OPTIMIZED: Faster lookup
            return sum + (product ? product.price * item.quantity * DISCOUNT_MULTIPLIER : 0); // Apply discount here
        }, 0);
        totalElement.textContent = `Rs ${total.toFixed(0)}`;
    };

    // --- EVENT HANDLERS ---
    const handleGeneralClicks = (event) => {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const productElement = event.target.closest('[data-id]');
            const productId = parseInt(productElement.dataset.id);
            const quantityInput = document.getElementById('quantity');
            const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
            
            addToCart(productId, quantity);
            event.target.textContent = 'Added!';
            setTimeout(() => { event.target.textContent = 'Add to Cart'; }, 1500);
        }

        if (event.target.classList.contains('whatsapp-order-btn')) {
            const productElement = event.target.closest('[data-id]');
            const productId = parseInt(productElement.dataset.id);
            const product = productMap.get(productId); // OPTIMIZED: Faster lookup
            const message = `Hi! I would like to order the "${product.name}" for Rs ${(product.price * DISCOUNT_MULTIPLIER).toFixed(0)}.`; // Apply discount here
            const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        }
    };

    const handleCartPageEvents = (event) => {
        const target = event.target;
        const productId = parseInt(target.closest('[data-id]')?.dataset.id);

        if (target.closest('.remove-btn')) {
            removeFromCart(productId);
        }
        
        if (target.classList.contains('quantity-input')) {
            const quantity = parseInt(target.value);
            updateCartQuantity(productId, quantity);
        }
    };

    const handleShopPageEvents = () => {
        const filterLinks = document.querySelectorAll('.category-filters a');
        filterLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                filterLinks.forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
                const category = e.target.dataset.category;
                const filtered = category === 'all' ? products : products.filter(p => p.category === category);
                renderShopPage(filtered);
            });
        });

        const searchButton = document.getElementById('search-button');
        const searchInput = document.getElementById('search-input');
        const searchHandler = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm));
            renderShopPage(filtered);
        };
        if(searchButton) searchButton.addEventListener('click', searchHandler);
        if(searchInput) searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') searchHandler();
        });
    };

    const handleCheckout = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.querySelector('#full-name').value;
        const phone = form.querySelector('#phone').value;
        const address = form.querySelector('#address').value;
        const email = form.querySelector('#email').value;
        const gmapsLink = form.querySelector('#gmaps-link').value;

        const cart = getCart();
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        let itemsText = '';
        let totalAmount = 0;
        cart.forEach(item => {
            const product = productMap.get(item.id); // OPTIMIZED: Faster lookup
            itemsText += `- ${product.name} (x${item.quantity}) - Rs ${(product.price * item.quantity * DISCOUNT_MULTIPLIER).toFixed(0)}\n  Image: ${product.image}\n`; // Apply discount here
            totalAmount += product.price * item.quantity;
        });

        const message = `
*New Order Received:*

*Name:* ${name}
*Phone:* ${phone}
*Address:* ${address}
${email ? `*Email:* ${email}\n` : ''}
${gmapsLink ? `*Location Link:* ${gmapsLink}\n` : ''}
*Items Ordered:*
${itemsText}
*Total Amount:* Rs ${(totalAmount * DISCOUNT_MULTIPLIER).toFixed(0)}
        `;

        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.trim())}`;
        
        localStorage.removeItem('cart');
        updateCartCount(); // clear the cart count after checkout
        window.open(whatsappURL, '_blank');
        alert("You will be redirected to WhatsApp to complete your order. Your cart has been cleared.");
        window.location.href = 'index.html';
    };

    // --- INITIALIZATION ---
    const init = () => {
        updateCartCount();
        const path = window.location.pathname.split("/").pop() || 'index.html';

        if (path === 'index.html') renderHomePage();
        if (path === 'shop.html') { renderShopPage(); handleShopPageEvents(); }
        if (path === 'product.html') renderProductDetailPage();
        if (path === 'cart.html') {
            renderCartPage();
            const cartItemsEl = document.getElementById('cart-items');
            if (cartItemsEl) {
                cartItemsEl.addEventListener('click', handleCartPageEvents);
                cartItemsEl.addEventListener('change', handleCartPageEvents);
            }
        }
        if (path === 'checkout.html') {
            const checkoutForm = document.getElementById('checkout-form');
            if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckout);
            renderCheckoutSummary();

            const checkoutItemsEl = document.getElementById('checkout-cart-items');
            if (checkoutItemsEl) {
                checkoutItemsEl.addEventListener('click', (event) => {
                    const removeButton = event.target.closest('.checkout-remove-btn');
                    if (removeButton) {
                        const itemElement = removeButton.closest('.checkout-item');
                        const productId = parseInt(itemElement.dataset.id);

                        // OPTIMIZED: Animate and remove the element from the DOM first for a faster perceived response.
                        itemElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        itemElement.style.opacity = '0';
                        itemElement.style.transform = 'translateX(20px)';
                        
                        setTimeout(() => {
                            itemElement.remove();
                        }, 300);

                        // Then, update the underlying data and totals.
                        let cart = getCart().filter(item => item.id !== productId);
                        saveCart(cart);
                        updateCheckoutTotal();
                        updateCartCount();
                    }
                });
            }
        }
        
        document.body.addEventListener('click', handleGeneralClicks);
    };

    const handleSliders = () => {
        const sliderContainer = document.querySelector('.featured-products .slider-container');
        if (!sliderContainer) return;

        const slider = sliderContainer.querySelector('.product-slider');
        const prevBtn = sliderContainer.querySelector('.prev-btn');
        const nextBtn = sliderContainer.querySelector('.next-btn');
        const scrollAmount = slider.clientWidth * 0.8; // Scroll by 80% of the visible width

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    };



    // --- HAMBURGER MENU ---
    const handleHamburgerMenu = () => {
        const hamburger = document.getElementById('hamburger-menu');
        const menu = document.getElementById('main-menu');
        if (hamburger && menu) {
            hamburger.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
        }
    };

    init();
    handleSliders();
    handleHamburgerMenu();
});