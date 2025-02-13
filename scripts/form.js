document.addEventListener('DOMContentLoaded', function () {
    function checkLocalStorage() {
        if (typeof(Storage) !== "undefined") {
            console.log("localStorage is supported.");
        } else {
            console.log("localStorage is not supported.");
            document.body.innerHTML = `<h1>Local Storage Not Supported</h1><p>Your review count cannot be saved.</p>`;
        }
    }
    checkLocalStorage();

    const products = [
        { id: 'fc-1888', name: "flux capacitor", avg_rating: 4.5 },
        { id: 'fc-2050', name: "power laces", avg_rating: 4.7 },
        { id: 'fs-1987', name: "time circuits", avg_rating: 3.5 },
        { id: 'ac-2000', name: "low voltage reactor", avg_rating: 3.9 },
        { id: 'jj-1969', name: "warp equalizer", avg_rating: 5.0 }
    ];

    const selectElement = document.getElementById('product-name');
    if (selectElement) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            selectElement.appendChild(option);
        });
    }
});

if (window.location.pathname.includes("review.html")) {
    let reviewCount;
    if (typeof(Storage) !== "undefined") {
        reviewCount = localStorage.getItem("reviewCount");
        reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
        localStorage.setItem("reviewCount", reviewCount);
        document.body.innerHTML = `<h1>Thank you for your review!</h1><p>You have submitted ${reviewCount} reviews.</p>`;
    } else {
        document.body.innerHTML = `<h1>Local Storage Not Supported</h1><p>Your review count cannot be saved.</p>`;
    }
}
