// Main application entry point
import { config } from './config.js';
import { applyMetadata } from './meta.js';
import { initializeSafetyNotices } from './covid-notice.js';
import { initializeTakeout } from './takeout.js';

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    // Apply metadata and SEO
    applyMetadata();

    // Initialize components
    initializeNavigation();
    initializeHeroSlider();
    initializeReservation();
    initializeSafetyNotices();
    initializeTakeout();
    initializeMap();

    // Add scroll animations
    initializeAnimations();
});

// Navigation initialization
const initializeNavigation = () => {
    const header = document.querySelector('.header-fixed');
    const mobileMenu = document.querySelector('.mobile-menu-button');

    // Sticky header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('is-sticky');
        } else {
            header.classList.remove('is-sticky');
        }
    });

    // Mobile menu toggle
    mobileMenu?.addEventListener('click', () => {
        document.body.classList.toggle('menu-open');
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });
};

// Hero slider initialization
const initializeHeroSlider = () => {
    const slider = document.querySelector('.hero-slider');
    const slides = slider?.querySelectorAll('.hero-slide');
    if (!slides?.length) return;

    let currentSlide = 0;
    const slideInterval = 5000;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    };

    // Auto advance slides
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, slideInterval);

    // Initial slide
    showSlide(0);
};

// Reservation system initialization
const initializeReservation = () => {
    const form = document.querySelector('.reservation-form');
    if (!form) return;

    // Date picker initialization
    const datePicker = form.querySelector('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    datePicker.min = today;

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        
        try {
            const response = await fetch(config.api.reservation, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                showNotification('予約が完了しました', 'success');
            } else {
                throw new Error('予約に失敗しました');
            }
        } catch (error) {
            showNotification(error.message, 'error');
        }
    });
};

// Google Maps initialization
const initializeMap = () => {
    const mapContainer = document.getElementById('google-map');
    if (!mapContainer || !config.maps.apiKey) return;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${config.maps.apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
        const map = new google.maps.Map(mapContainer, {
            center: config.maps.center,
            zoom: config.maps.zoom
        });

        new google.maps.Marker({
            position: config.maps.center,
            map: map
        });
    };

    document.head.appendChild(script);
};

// Scroll animations
const initializeAnimations = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
};

// Utility function for notifications
const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.classList.add('notification', `notification-${type}`);
    notification.textContent = message;

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
};

// Performance monitoring
const reportPerformance = () => {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const timing = performance.getEntriesByType('navigation')[0];
            console.log('Page Load Time:', timing.loadEventEnd - timing.navigationStart);
        });
    }
};

// Initialize performance monitoring
reportPerformance();