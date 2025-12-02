document.addEventListener('DOMContentLoaded', () => {

    // --- DOM ELEMENTS ---
    const reviewsList = document.getElementById('reviews-list');
    const noReviewsPlaceholder = document.getElementById('no-reviews-placeholder');
    const averageRatingValue = document.getElementById('average-rating-value');
    const totalReviewsCount = document.getElementById('total-reviews-count');
    const reviewForm = document.getElementById('review-form');
    const sortSelect = document.getElementById('sort-reviews');

    // Star rating input in the form
    const starRatingInputContainer = document.querySelector('.star-rating-input');
    const starRatingInput = document.getElementById('star-rating');
    const stars = starRatingInputContainer.querySelectorAll('.fa-star');

    // --- LOCAL STORAGE ---
    const REVIEWS_STORAGE_KEY = 'customerReviews';

    // Load reviews from localStorage or use an empty array
    let reviews = JSON.parse(localStorage.getItem(REVIEWS_STORAGE_KEY)) || [];

    // --- FUNCTIONS ---

    /**
     * Saves the current reviews array to localStorage.
     */
    const saveReviews = () => {
        localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
    };

    /**
     * Generates the star rating HTML based on a rating number.
     * @param {number} rating - The rating from 1 to 5.
     * @returns {string} - HTML string for the stars.
     */
    const generateStarRating = (rating) => {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starsHTML += '<i class="fa-solid fa-star"></i>';
            } else {
                starsHTML += '<i class="fa-regular fa-star"></i>';
            }
        }
        return starsHTML;
    };
    
    /**
     * Renders all reviews in the reviews list.
     */
    const renderReviews = () => {
        reviewsList.innerHTML = ''; // Clear current list

        if (reviews.length === 0) {
            noReviewsPlaceholder.classList.remove('hidden');
            reviewsList.classList.add('hidden');
            return;
        }

        noReviewsPlaceholder.classList.add('hidden');
        reviewsList.classList.remove('hidden');

        reviews.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.className = 'review-card';
            reviewCard.innerHTML = `
                <div class="review-card-header">
                    <div class="customer-name">${review.name}</div>
                    <div class="star-rating">${generateStarRating(review.rating)}</div>
                </div>
                 <div class="review-date">${new Date(review.date).toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <p class="review-text">${review.text}</p>
                <p class="review-product">Purchased: <strong>${review.product}</strong></p>
            `;
            reviewsList.appendChild(reviewCard);
        });
    };

    /**
     * Calculates and displays the average rating and total review count.
     */
    const updateRatingSummary = () => {
        if (reviews.length === 0) {
            averageRatingValue.textContent = '0.0';
            totalReviewsCount.textContent = '0';
            return;
        }

        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = (totalRating / reviews.length).toFixed(1);

        averageRatingValue.textContent = averageRating;
        totalReviewsCount.textContent = reviews.length;
    };

    /**
     * Sorts reviews based on the selected value.
     */
    const sortReviews = () => {
        const sortBy = sortSelect.value;
        if (sortBy === 'newest') {
            reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortBy === 'highest') {
            reviews.sort((a, b) => b.rating - a.rating);
        }
        renderReviews();
    };

    // --- EVENT LISTENERS ---

    // Handle star rating selection in the form
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const ratingValue = parseInt(star.dataset.value);
            starRatingInput.value = ratingValue;

            // Update star visuals
            stars.forEach(s => {
                const sValue = parseInt(s.dataset.value);
                if (sValue <= ratingValue) {
                    s.classList.remove('fa-regular');
                    s.classList.add('fa-solid');
                    s.classList.add('filled');
                } else {
                    s.classList.remove('fa-solid');
                    s.classList.add('fa-regular');
                    s.classList.remove('filled');
                }
            });
        });
        
         star.addEventListener('mouseover', () => {
            const ratingValue = parseInt(star.dataset.value);
             stars.forEach(s => {
                s.classList.remove('fa-solid');
                s.classList.add('fa-regular');
            });
            for (let i = 0; i < ratingValue; i++) {
                stars[i].classList.remove('fa-regular');
                stars[i].classList.add('fa-solid');
            }
        });

        starRatingInputContainer.addEventListener('mouseleave', () => {
            const currentRating = parseInt(starRatingInput.value);
            stars.forEach(s => {
                const sValue = parseInt(s.dataset.value);
                if (sValue <= currentRating) {
                    s.classList.remove('fa-regular');
                    s.classList.add('fa-solid');
                } else {
                    s.classList.remove('fa-solid');
                    s.classList.add('fa-regular');
                }
            });
        });
    });

    // Handle form submission
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newReview = {
            id: Date.now(),
            name: document.getElementById('customer-name').value || 'Verified Buyer',
            rating: parseInt(starRatingInput.value),
            text: document.getElementById('review-message').value,
            product: document.getElementById('product-purchased').value,
            date: new Date().toISOString()
        };

        if(newReview.rating === 0) {
            alert("Please select a star rating.");
            return;
        }

        reviews.unshift(newReview); // Add to the beginning for "newest" first
        saveReviews();
        sortReviews(); // Re-sort and render
        updateRatingSummary();
        
        reviewForm.reset(); // Clear the form
        
        // Reset stars in form
        starRatingInput.value = 0;
        stars.forEach(s => {
            s.classList.remove('fa-solid', 'filled');
            s.classList.add('fa-regular');
        });
    });

    // Handle sorting change
    sortSelect.addEventListener('change', sortReviews);

    // --- INITIALIZATION ---
    
    // Initial load
    sortReviews();
    updateRatingSummary();

});
