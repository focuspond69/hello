document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const openSidebarBtn = document.getElementById('openSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const internshipBanner = document.getElementById('internshipBanner');
    const carousel = document.getElementById('carousel');
    const carouselInner = carousel?.querySelector('.carousel-inner');
    const prevButton = carousel?.querySelector('.prev');
    const nextButton = carousel?.querySelector('.next');

    // Sidebar functionality
    function openSidebar() {
        if (sidebar && sidebarOverlay) {
            sidebar.classList.remove('-translate-x-full');
            sidebarOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeSidebar() {
        if (sidebar && sidebarOverlay) {
            sidebar.classList.add('-translate-x-full');
            sidebarOverlay.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    if (openSidebarBtn) {
        openSidebarBtn.addEventListener('click', openSidebar);
    }
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // Internship banner functionality
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (internshipBanner) { // Ensure the banner exists
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                internshipBanner.classList.remove('-translate-y-full');
            } else {
                // Scrolling up
                internshipBanner.classList.add('-translate-y-full');
            }
        }
        
        lastScrollTop = scrollTop;
    });

    // Testimonial Carousel functionality (Updated to match index.html structure and IDs)
    const testimonialCarousel = document.getElementById('testimonialCarousel');
    let currentTestimonial = 0;
    // Only proceed if testimonialCarousel exists
    if (testimonialCarousel) {
        const testimonialCards = testimonialCarousel.children; // Assuming direct children are testimonials
        const testimonialCount = testimonialCards.length;

        function showTestimonial(index) {
            if (index >= testimonialCount) {
                currentTestimonial = 0;
            } else if (index < 0) {
                currentTestimonial = testimonialCount - 1;
            } else {
                currentTestimonial = index;
            }
            testimonialCarousel.style.transform = `translateX(${-currentTestimonial * 100}%)`;
        }

        function nextTestimonial() {
            showTestimonial(currentTestimonial + 1);
        }

        function prevTestimonial() {
            showTestimonial(currentTestimonial - 1);
        }

        // Attach click listeners to the specific buttons
        // Using more robust selectors that find the buttons relative to the carousel itself
        const prevTestimonialBtn = testimonialCarousel.closest('section')?.querySelector('button[onclick="prevTestimonial()"]');
        const nextTestimonialBtn = testimonialCarousel.closest('section')?.querySelector('button[onclick="nextTestimonial()"]');

        if (prevTestimonialBtn) {
            prevTestimonialBtn.addEventListener('click', prevTestimonial);
        }
        if (nextTestimonialBtn) {
            nextTestimonialBtn.addEventListener('click', nextTestimonial);
        }

        // Auto-advance testimonials every 5 seconds
        setInterval(nextTestimonial, 5000);

        // Initial display
        showTestimonial(currentTestimonial);
    }

    // Carousel functionality
    if (carousel) {
        let currentSlide = 0;
        const slides = carouselInner.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;

        function updateCarousel() {
            const offset = -currentSlide * 100;
            carouselInner.style.transform = `translateX(${offset}%)`;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        // Auto-play carousel
        let carouselInterval = setInterval(nextSlide, 5000);

        // Pause auto-play on hover
        carousel.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(nextSlide, 5000);
        });

        // Button controls
        prevButton.addEventListener('click', () => {
            prevSlide();
            clearInterval(carouselInterval);
            carouselInterval = setInterval(nextSlide, 5000);
        });

        nextButton.addEventListener('click', () => {
            nextSlide();
            clearInterval(carouselInterval);
            carouselInterval = setInterval(nextSlide, 5000);
        });
    }

    // Search functionality
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            // Add search logic here when implementing the tutorials/projects pages
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation to buttons
    document.querySelectorAll('button, a.btn-primary, a.btn-secondary').forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('no-loading')) {
                const originalContent = this.innerHTML;
                this.innerHTML = '<div class="loading-spinner"></div>';
                setTimeout(() => {
                    this.innerHTML = originalContent;
                }, 1000);
            }
        });
    });

    // Add animation to elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // Initialize tooltips
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute bg-gray-900 text-white px-2 py-1 rounded text-sm';
            tooltip.textContent = e.target.dataset.tooltip;
            e.target.appendChild(tooltip);
        });

        element.addEventListener('mouseleave', (e) => {
            const tooltip = e.target.querySelector('div');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // Add keyboard navigation for sidebar
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar && !sidebar.classList.contains('-translate-x-full')) {
            closeSidebar(); // Use closeSidebar function directly
        }
    });

    // Add page transition and loading elements
    document.body.insertAdjacentHTML('beforeend', `
        <div class="page-transition"></div>
        <div class="loading-spinner"></div>
        <button class="back-button" style="display: none;">
            <i class="fas fa-arrow-left"></i>
            Back
        </button>
    `);

    // Handle tutorial and project navigation
    const pageTransition = document.querySelector('.page-transition');
    const loadingSpinner = document.querySelector('.loading-spinner');
    const backButton = document.querySelector('.back-button');

    // Show back button if not on home page
    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        if (backButton) {
            backButton.style.display = 'flex';
        }
    }

    // Handle back button click
    if (backButton) {
        backButton.addEventListener('click', () => {
            startPageTransition(() => {
                window.history.back();
            });
        });
    }

    // Define startPageTransition if it's not already defined to prevent errors
    function startPageTransition(callback) {
        if (pageTransition) {
            pageTransition.style.opacity = '1';
        }
        setTimeout(() => {
            callback();
        }, 300); // Small delay for transition effect
    }

    // Handle "Start Tutorial" button clicks
    const startTutorialLinks = document.querySelectorAll('.tutorial-card .flex-1.bg-blue-600');
    startTutorialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default navigation
            
            // Get the tutorial title from the card
            const card = link.closest('.tutorial-card');
            const tutorialTitle = card.querySelector('h3').textContent;
            
            // Store the selected tutorial in localStorage
            localStorage.setItem('selectedTutorial', tutorialTitle);
            
            // Start page transition
            startPageTransition(() => {
                // Navigate to the tutorial page
                window.location.href = link.href;
            });
        });
    });

    // Handle "Browse Projects" button clicks
    const browseProjectsButtons = document.querySelectorAll('.browse-projects-btn');
    browseProjectsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.classList.add('button-click');
            
            // Start page transition
            startPageTransition(() => {
                window.location.href = 'projects.html';
            });
        });
    });

    // Remove button click animation class after animation ends
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('animationend', () => {
            button.classList.remove('button-click');
        });
    });
});

// Featured Tutorials Slider Functionality
document.addEventListener('DOMContentLoaded', () => {
    const popularTab = document.getElementById('popular-tab');
    const newTab = document.getElementById('new-tab');
    const popularTutorials = document.getElementById('popular-tutorials');
    const newTutorials = document.getElementById('new-tutorials');

    // Tab switching functionality
    popularTab.addEventListener('click', () => {
        popularTab.classList.add('bg-blue-600', 'text-white');
        popularTab.classList.remove('bg-gray-200', 'text-gray-700', 'dark:bg-gray-700', 'dark:text-gray-300');
        newTab.classList.add('bg-gray-200', 'text-gray-700', 'dark:bg-gray-700', 'dark:text-gray-300');
        newTab.classList.remove('bg-blue-600', 'text-white');
        popularTutorials.classList.remove('hidden');
        newTutorials.classList.add('hidden');
    });

    newTab.addEventListener('click', () => {
        newTab.classList.add('bg-blue-600', 'text-white');
        newTab.classList.remove('bg-gray-200', 'text-gray-700', 'dark:bg-gray-700', 'dark:text-gray-300');
        popularTab.classList.add('bg-gray-200', 'text-gray-700', 'dark:bg-gray-700', 'dark:text-gray-300');
        popularTab.classList.remove('bg-blue-600', 'text-white');
        newTutorials.classList.remove('hidden');
        popularTutorials.classList.add('hidden');
    });

    // Slider functionality for both sections
    const sliders = {
        popular: {
            container: popularTutorials.querySelector('.flex'),
            prevBtn: popularTutorials.querySelector('.carousel-nav-btn:first-child'),
            nextBtn: popularTutorials.querySelector('.carousel-nav-btn:last-child')
        },
        new: {
            container: newTutorials.querySelector('.flex'),
            prevBtn: newTutorials.querySelector('.carousel-nav-btn:first-child'),
            nextBtn: newTutorials.querySelector('.carousel-nav-btn:last-child')
        }
    };

    Object.keys(sliders).forEach(key => {
        const slider = sliders[key];
        const cardWidth = 300 + 24; // card width + gap

        slider.prevBtn.addEventListener('click', () => {
            slider.container.scrollBy({
                left: -cardWidth * 2,
                behavior: 'smooth'
            });
        });

        slider.nextBtn.addEventListener('click', () => {
            slider.container.scrollBy({
                left: cardWidth * 2,
                behavior: 'smooth'
            });
        });

        // Update button states based on scroll position
        slider.container.addEventListener('scroll', () => {
            const isAtStart = slider.container.scrollLeft === 0;
            const isAtEnd = slider.container.scrollLeft + slider.container.clientWidth >= slider.container.scrollWidth;

            slider.prevBtn.style.opacity = isAtStart ? '0.5' : '1';
            slider.nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
        });

        // Initialize button states
        slider.prevBtn.style.opacity = '0.5';
    });

    // Add touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    Object.keys(sliders).forEach(key => {
        const slider = sliders[key];
        const container = slider.container;

        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe(container);
        });
    });

    function handleSwipe(container) {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            container.scrollBy({
                left: diff > 0 ? cardWidth : -cardWidth,
                behavior: 'smooth'
            });
        }
    }
});

// Tutorial Carousels Functionality
const carousels = {
    'web-dev': {
        element: document.getElementById('web-dev-carousel'),
        prevBtn: document.getElementById('prev-web-dev'),
        nextBtn: document.getElementById('next-web-dev'),
        currentIndex: 0
    },
    'data-science': {
        element: document.getElementById('data-science-carousel'),
        prevBtn: document.getElementById('prev-data-science'),
        nextBtn: document.getElementById('next-data-science'),
        currentIndex: 0
    },
    'mobile-dev': {
        element: document.getElementById('mobile-dev-carousel'),
        prevBtn: document.getElementById('prev-mobile-dev'),
        nextBtn: document.getElementById('next-mobile-dev'),
        currentIndex: 0
    }
};

const cardWidth = 300 + 32; // card width + padding

function updateCarousel(carouselId) {
    const carousel = carousels[carouselId];
    const offset = -carousel.currentIndex * cardWidth;
    carousel.element.style.transform = `translateX(${offset}px)`;
    
    // Update button states
    carousel.prevBtn.style.opacity = carousel.currentIndex === 0 ? '0.5' : '1';
    const maxIndex = carousel.element.querySelectorAll('.min-w-[300px]').length - 2;
    carousel.nextBtn.style.opacity = carousel.currentIndex >= maxIndex ? '0.5' : '1';
}

// Initialize all carousels
Object.keys(carousels).forEach(carouselId => {
    const carousel = carousels[carouselId];
    
    carousel.prevBtn.addEventListener('click', () => {
        if (carousel.currentIndex > 0) {
            carousel.currentIndex--;
            updateCarousel(carouselId);
        }
    });

    carousel.nextBtn.addEventListener('click', () => {
        const maxIndex = carousel.element.querySelectorAll('.min-w-[300px]').length - 2;
        if (carousel.currentIndex < maxIndex) {
            carousel.currentIndex++;
            updateCarousel(carouselId);
        }
    });

    // Initialize carousel state
    updateCarousel(carouselId);
});

// Auto-scroll functionality
let autoScrollIntervals = {};

function startAutoScroll(carouselId) {
    autoScrollIntervals[carouselId] = setInterval(() => {
        const carousel = carousels[carouselId];
        const maxIndex = carousel.element.querySelectorAll('.min-w-[300px]').length - 2;
        
        if (carousel.currentIndex < maxIndex) {
            carousel.currentIndex++;
        } else {
            carousel.currentIndex = 0;
        }
        updateCarousel(carouselId);
    }, 5000); // Change slide every 5 seconds
}

function stopAutoScroll(carouselId) {
    clearInterval(autoScrollIntervals[carouselId]);
}

// Start auto-scroll for all carousels
Object.keys(carousels).forEach(carouselId => {
    const carousel = carousels[carouselId];
    
    carousel.element.addEventListener('mouseenter', () => stopAutoScroll(carouselId));
    carousel.element.addEventListener('mouseleave', () => startAutoScroll(carouselId));
    
    startAutoScroll(carouselId);
});

// Project filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.difficulty-filter');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const difficulty = button.dataset.difficulty;

            projectCards.forEach(card => {
                if (difficulty === 'all' || card.dataset.difficulty === difficulty) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Rating system
document.addEventListener('DOMContentLoaded', function() {
    const ratingButtons = document.querySelectorAll('.rating-button');
    let selectedRating = 0;

    ratingButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            selectedRating = index + 1;
            updateRatingDisplay();
        });

        button.addEventListener('mouseover', () => {
            highlightRating(index);
        });

        button.addEventListener('mouseout', () => {
            resetRatingDisplay();
        });
    });

    function updateRatingDisplay() {
        ratingButtons.forEach((button, index) => {
            if (index < selectedRating) {
                button.classList.remove('text-gray-400');
                button.classList.add('text-yellow-400');
            } else {
                button.classList.remove('text-yellow-400');
                button.classList.add('text-gray-400');
            }
        });
    }

    function highlightRating(index) {
        ratingButtons.forEach((button, i) => {
            if (i <= index) {
                button.classList.remove('text-gray-400');
                button.classList.add('text-yellow-400');
            } else {
                button.classList.remove('text-yellow-400');
                button.classList.add('text-gray-400');
            }
        });
    }

    function resetRatingDisplay() {
        updateRatingDisplay();
    }
});

// Comment submission
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.querySelector('#comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const comment = this.querySelector('textarea').value;
            const rating = document.querySelectorAll('.rating-button.text-yellow-400').length;

            if (comment && rating > 0) {
                // Here you would typically send the comment to your backend
                console.log('Comment submitted:', { comment, rating });
                
                // Clear the form
                this.reset();
                selectedRating = 0;
                updateRatingDisplay();
                
                // Show success message
                alert('Thank you for your feedback!');
            } else {
                alert('Please provide both a rating and a comment.');
            }
        });
    }
});

// Try Online Editor
document.addEventListener('DOMContentLoaded', function() {
    const tryOnlineButton = document.querySelector('.try-online-button');
    if (tryOnlineButton) {
        tryOnlineButton.addEventListener('click', function() {
            // Here you would typically open your online editor
            // For now, we'll just show an alert
            alert('Opening online editor...');
        });
    }
});

// Download project
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.querySelector('.download-button');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            // Here you would typically trigger the download
            // For now, we'll just show an alert
            alert('Starting download...');
        });
    }
}); 