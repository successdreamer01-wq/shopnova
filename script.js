/* 🧠 SHOPNOVA MEGA DATABASE - 12 SUPREME PRODUCTS */

const allProducts = [
    { id: 1, name: "Sony WH-1000XM5 Premium Headphones", price: "₹24,990", oldPrice: "₹34,990", discount: "29% OFF", platform: "Amazon", category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", link: "#" },
    { id: 2, name: "Apple iPhone 15 Pro Max", price: "₹1,49,900", oldPrice: "₹1,59,900", discount: "6% OFF", platform: "Flipkart", category: "Electronics", image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500", link: "#" },
    { id: 3, name: "Nike Air Jordan 1 Retro", price: "₹12,495", oldPrice: "₹16,000", discount: "22% OFF", platform: "Amazon", category: "Fashion", image: "https://images.unsplash.com/photo-1584735175097-719d848f8449?w=500", link: "#" },
    { id: 4, name: "Samsung Odyssey G9 Gaming Monitor", price: "₹1,15,000", oldPrice: "₹1,40,000", discount: "18% OFF", platform: "Amazon", category: "Electronics", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500", link: "#" },
    { id: 5, name: "Keychron Q1 Mechanical Keyboard", price: "₹14,999", oldPrice: "₹18,000", discount: "17% OFF", platform: "Amazon", category: "Electronics", image: "https://images.unsplash.com/photo-1618384881928-bb71b96a84f3?w=500", link: "#" },
    { id: 6, name: "Rolex Submariner Style Watch", price: "₹18,500", oldPrice: "₹25,000", discount: "26% OFF", platform: "Flipkart", category: "Fashion", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", link: "#" },
    { id: 7, name: "Sony PlayStation 5 Console", price: "₹54,990", oldPrice: "₹59,990", discount: "8% OFF", platform: "Amazon", category: "Electronics", image: "https://images.unsplash.com/photo-1606813907291-d86ebb9c74ad?w=500", link: "#" },
    { id: 8, name: "DJI Mavic 3 Pro Drone", price: "₹2,10,000", oldPrice: "₹2,40,000", discount: "12% OFF", platform: "Amazon", category: "Electronics", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500", link: "#" },
    { id: 9, name: "Canon EOS R5 Mirrorless Camera", price: "₹3,20,000", oldPrice: "₹3,45,000", discount: "7% OFF", platform: "Flipkart", category: "Electronics", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500", link: "#" },
    { id: 10, name: "Adidas UltraBoost Sneakers", price: "₹14,999", oldPrice: "₹18,999", discount: "21% OFF", platform: "Amazon", category: "Fashion", image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500", link: "#" },
    { id: 11, name: "Apple MacBook Pro M3", price: "₹1,69,900", oldPrice: "₹1,99,900", discount: "15% OFF", platform: "Amazon", category: "Electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500", link: "#" },
    { id: 12, name: "Secretlab Gaming Chair", price: "₹35,000", oldPrice: "₹45,000", discount: "22% OFF", platform: "Flipkart", category: "Home", image: "https://images.unsplash.com/photo-1598550476439-6847785fce6b?w=500", link: "#" }
];

/* ⚡ ऑटो-लोडर फंक्शन */
function createCard(p) {
    return `
        <div class="product-card">
            <div class="product-badge">${p.discount}</div>
            <div class="product-img"><img src="${p.image}" alt="${p.name}"></div>
            <div class="product-info">
                <span class="platform-tag">${p.platform}</span>
                <h3 class="product-name">${p.name}</h3>
                <div class="pricing">
                    <span class="current-price">${p.price}</span>
                    <span class="old-price">${p.oldPrice}</span>
                </div>
                <a href="${p.link}" class="deal-cta">View Deal</a>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const homeGrid = document.getElementById('home-deals-grid');
    const searchGrid = document.getElementById('search-results-grid');

    if (homeGrid) {
        allProducts.forEach(p => homeGrid.innerHTML += createCard(p));
    }

    if (searchGrid) {
        const query = new URLSearchParams(window.location.search).get('query');
        if (query) {
            document.querySelector('.search-query').innerText = query;
            const filtered = allProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
            filtered.forEach(p => searchGrid.innerHTML += createCard(p));
        }
    }

    // सर्च बटन का काम
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-bar input');
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            if (searchInput.value) window.location.href = `search.html?query=${searchInput.value}`;
        });
    }
});
