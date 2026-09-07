/* 🧠 SHOPNOVA SMART ENGINE - V2.0 */

// 1. 🛒 BIG PRODUCT DATABASE (यहाँ आप जितने चाहें उतने प्रोडक्ट जोड़ सकते हैं)
const allProducts = [
    { id: 1, name: "Sony WH-1000XM5 Headphones", price: "₹24,990", oldPrice: "₹34,990", discount: "29% OFF", platform: "Amazon", category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", link: "product-detail.html" },
    { id: 2, name: "Apple iPhone 15 Pro", price: "₹1,29,900", oldPrice: "₹1,34,900", discount: "5% OFF", platform: "Flipkart", category: "Electronics", image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500", link: "#" },
    { id: 3, name: "Nike Air Jordan 1", price: "₹12,495", oldPrice: "₹16,000", discount: "20% OFF", platform: "Amazon", category: "Fashion", image: "https://images.unsplash.com/photo-1584735175097-719d848f8449?w=500", link: "#" },
    { id: 4, name: "Samsung 4K Ultra HD TV", price: "₹32,990", oldPrice: "₹52,900", discount: "38% OFF", platform: "Amazon", category: "Electronics", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500", link: "#" },
    { id: 5, name: "Cosmic Byte Mechanical Keyboard", price: "₹2,199", oldPrice: "₹3,999", discount: "45% OFF", platform: "Amazon", category: "Electronics", image: "https://images.unsplash.com/photo-1618384881928-bb71b96a84f3?w=500", link: "#" },
    { id: 6, name: "Men's Slim Fit Shirt", price: "₹699", oldPrice: "₹1,999", discount: "65% OFF", platform: "Meesho", category: "Fashion", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500", link: "#" }
];

// 2. ⚡ AUTO-INJECTOR (यह प्रोडक्ट्स को स्क्रीन पर दिखाएगा)
function loadProducts(targetId, filter = "all") {
    const grid = document.getElementById(targetId);
    if (!grid) return;

    grid.innerHTML = ""; // पुराना कचरा साफ़ करें

    allProducts.forEach(product => {
        const card = `
            <div class="product-card">
                <div class="product-badge">${product.discount}</div>
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <span class="platform-tag">${product.platform}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="pricing">
                        <span class="current-price">${product.price}</span>
                        <span class="old-price">${product.oldPrice}</span>
                    </div>
                    <a href="${product.link}" class="deal-cta" style="text-decoration:none; display:block; text-align:center;">View Deal</a>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

// 3. 🔎 SMART SEARCH (असली सर्च)
function setupSearch() {
    const input = document.querySelector('.search-bar input');
    const btn = document.querySelector('.search-btn');

    if (!btn || !input) return;

    btn.addEventListener('click', () => {
        const q = input.value.toLowerCase();
        localStorage.setItem('lastSearch', q); // सर्च को याद रखें
        window.location.href = "search.html";
    });
}

// वेबसाइट खुलते ही सिस्टम चालू करें
document.addEventListener('DOMContentLoaded', () => {
    loadProducts('home-deals-grid');
    setupSearch();
});
