document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsContainer = document.getElementById('reviewsContainer');

    // Load existing reviews from localStorage
    loadReviews();

    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const review = document.getElementById('review').value;

        const reviewData = {
            name: name,
            rating: rating,
            review: review
        };

        // Save review to localStorage
        saveReview(reviewData);

        // Clear the form
        reviewForm.reset();

        // Load reviews again to display the new one
        loadReviews();
    });

    function saveReview(review) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    function loadReviews() {
        reviewsContainer.innerHTML = ''; // Clear existing reviews
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

        reviews.forEach((review) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            reviewDiv.innerHTML = `
                <strong>${review.name}</strong> (Rating: ${review.rating})<br>
                <p>${review.review}</p>
            `;
            reviewsContainer.appendChild(reviewDiv);
        });
    }
});