/* 🧠 SHOPNOVA SMART ENGINE */

// 1. प्रोडक्ट डेटाबेस (यही आपकी दुकान का सामान है)
const products = [
    { id: 1, name: "Sony WH-1000XM5 Headphones", price: "₹24,990", category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", link: "product-detail.html" },
    { id: 2, name: "Premium Minimalist Watch", price: "₹1,499", category: "Fashion", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", link: "#" },
    { id: 3, name: "Nike Air Max Sneakers", price: "₹8,499", category: "Fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", link: "#" },
    { id: 4, name: "MacBook Air M2", price: "₹84,990", category: "Electronics", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400", link: "#" }
];

// 2. सर्च फंक्शन (खोजने वाला सिस्टम)
const searchInput = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-btn');

function performSearch() {
    const query = searchInput.value.toLowerCase();
    if (query === "") {
        alert("कृपया कुछ लिखें!");
        return;
    }
    
    // यह कोड आपको सर्च पेज पर ले जाएगा और आपका सर्च किया हुआ शब्द साथ ले जाएगा
    window.location.href = `search.html?query=${query}`;
}

// 3. बटन क्लिक पर सर्च करना
if(searchBtn) {
    searchBtn.addEventListener('click', performSearch);
}

// Enter बटन दबाने पर भी सर्च होगा
if(searchInput) {
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

console.log("SHOPNOVA Engine is running... 🚀");
