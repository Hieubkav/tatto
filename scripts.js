// Main JavaScript for Koriya website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeComponents();
});

const initializeComponents = () => {
    initNavigation();
    initHeroSlider();
    initCalendar();
    initAnimations();
    initMobileMenu();
};

// Navigation handling
const initNavigation = () => {
    // Sticky header
    let header = document.querySelector('.header-fixed');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
};

// Hero Slider
const initHeroSlider = () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const interval = 5000;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    setInterval(nextSlide, interval);
};

// Calendar functionality
const initCalendar = () => {
    const calendar = document.querySelector('.calendar-grid');
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    // Generate calendar days
    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(today.getFullYear(), today.getMonth(), i);
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-cell');
        
        // Add availability class randomly (for demo)
        dayElement.classList.add(Math.random() > 0.3 ? 'available' : 'unavailable');
        
        dayElement.innerHTML = `
            <span class="date">${i}</span>
            ${dayElement.classList.contains('available') ? '<span class="status">◎</span>' : '<span class="status">×</span>'}
        `;
        
        calendar.appendChild(dayElement);
    }
};

// Scroll animations
const initAnimations = () => {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
};

// Mobile menu
const initMobileMenu = () => {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuButton?.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuButton.classList.toggle('open');
    });
};

// Language selector
const initLanguageSelector = () => {
    const langButton = document.querySelector('.lang-selector button');
    const langList = document.querySelector('.lang-list');
    
    langButton?.addEventListener('click', () => {
        langList.classList.toggle('active');
    });
    
    // Close language selector when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.lang-selector')) {
            langList.classList.remove('active');
        }
    });
};

// Helper functions
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Handle reservation form
const handleReservation = () => {
    const form = document.querySelector('.reservation-form');
    
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your reservation logic here
        console.log('Reservation submitted');
    });
};

// Initialize map
const initMap = () => {
    // Google Maps initialization code here
    // Note: You'll need to add your Google Maps API key
    console.log('Map initialized');
};