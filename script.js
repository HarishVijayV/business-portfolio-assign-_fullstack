// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const bars = navToggle.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) {
                bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            } else if (index === 1) {
                bar.style.opacity = '0';
            } else {
                bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            }
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    });
});

// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing animation for hero title
function typeWriter() {
    const text = "Harish Vijay V";
    const typingText = document.querySelector('.typing-text');
    let i = 0;
    
    // Clear initial text
    typingText.textContent = '';
    
    function type() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(type, 150);
        }
    }
    
    type();
}

// Trigger typing animation on page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Research Portfolio Tabs Functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetCategory = btn.getAttribute('data-category');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const targetContent = document.getElementById(targetCategory);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.publication-card, .research-project-card, .innovation-card, .achievement-card, .expertise-card, .contact-card, .service-card, .quality-card'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Enhanced Contact/Partnership form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const company = formData.get('company');
    const email = formData.get('email');
    const partnershipType = formData.get('partnership-type');
    const message = formData.get('message');
    
    // Enhanced validation for business form
    if (!name || !company || !email || !partnershipType || !message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    if (message.length < 50) {
        showNotification('Please provide a more detailed partnership proposal (minimum 50 characters).', 'error');
        return;
    }
    
    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    submitButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Reset form
        this.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        showNotification(`Thank you ${name}! Your partnership proposal has been submitted successfully. We'll contact you at ${email} within 2 business days.`, 'success');
    }, 2500);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Enhanced notification system for business context
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 400px;
        word-wrap: break-word;
        border-left: 4px solid rgba(255, 255, 255, 0.3);
    `;
    
    // Style notification content
    const notificationContent = notification.querySelector('.notification-content');
    notificationContent.style.cssText = `
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
        opacity: 0.8;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Close button functionality
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
    
    // Auto-remove after delay
    setTimeout(() => {
        if (document.body.contains(notification)) {
            removeNotification(notification);
        }
    }, type === 'success' ? 7000 : 5000);
}

function removeNotification(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.remove();
        }
    }, 300);
}

// Business card hover effects
document.addEventListener('DOMContentLoaded', () => {
    const businessCards = document.querySelectorAll('.service-card, .achievement-card, .quality-card, .expertise-card');
    
    businessCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon, .achievement-icon, .quality-card i, .expertise-card i');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon, .achievement-icon, .quality-card i, .expertise-card i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// Enhanced parallax effect for business theme
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-card');
    const speed = 0.3;
    
    parallaxElements.forEach((element, index) => {
        const yPos = -(scrolled * speed * (index + 1) * 0.2);
        element.style.transform = `translateY(${yPos}px)`;
    });
    
    // Add subtle parallax to hero badge
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
        const badgeOffset = scrolled * 0.1;
        heroBadge.style.transform = `translateY(${badgeOffset}px)`;
    }
});

// Research publication card interactions
document.addEventListener('DOMContentLoaded', () => {
    const publicationCards = document.querySelectorAll('.publication-card, .research-project-card, .innovation-card');
    
    publicationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderLeft = '4px solid #2563eb';
            const badge = this.querySelector('.publication-badge, .award-badge');
            if (badge) {
                badge.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderLeft = 'none';
            const badge = this.querySelector('.publication-badge, .award-badge');
            if (badge) {
                badge.style.transform = 'scale(1)';
            }
        });
    });
});

// Stats counter animation
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const targetNumber = parseInt(stat.textContent);
        const suffix = stat.textContent.includes('+') ? '+' : '';
        let currentNumber = 0;
        const increment = targetNumber / 30;
        
        const updateCounter = () => {
            if (currentNumber < targetNumber) {
                currentNumber += increment;
                stat.textContent = Math.ceil(currentNumber) + suffix;
                setTimeout(updateCounter, 50);
            } else {
                stat.textContent = targetNumber + suffix;
            }
        };
        
        updateCounter();
    });
}

// Trigger stats animation when hero section is visible
const heroStatsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            heroStatsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        heroStatsObserver.observe(heroStats);
    }
});

// Enhanced form field interactions
document.addEventListener('DOMContentLoaded', () => {
    const formFields = document.querySelectorAll('input, textarea, select');
    
    formFields.forEach(field => {
        // Add floating label effect
        field.addEventListener('focus', function() {
            this.style.borderColor = '#2563eb';
            this.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
        });
        
        field.addEventListener('blur', function() {
            this.style.borderColor = '#e5e7eb';
            this.style.boxShadow = 'none';
        });
        
        // Real-time validation feedback
        if (field.type === 'email') {
            field.addEventListener('input', function() {
                if (this.value && !isValidEmail(this.value)) {
                    this.style.borderColor = '#ef4444';
                } else {
                    this.style.borderColor = '#10b981';
                }
            });
        }
    });
});

// Loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }
});

// Add smooth reveal animation for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section-header, .leader-profile, .team-philosophy');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('revealed');
        }
    });
}

// Partnership type selection enhancement
document.addEventListener('DOMContentLoaded', () => {
    const partnershipSelect = document.getElementById('partnership-type');
    if (partnershipSelect) {
        partnershipSelect.addEventListener('change', function() {
            const messageField = document.getElementById('message');
            let placeholder = 'Tell us about your partnership proposal *';
            
            switch (this.value) {
                case 'research':
                    placeholder = 'Describe your research collaboration proposal, including objectives, timeline, and expected outcomes *';
                    break;
                case 'business':
                    placeholder = 'Outline your business partnership proposal, including mutual benefits and collaboration scope *';
                    break;
                case 'consulting':
                    placeholder = 'Detail your consulting requirements, project scope, and specific AI/ML challenges you want to address *';
                    break;
                case 'investment':
                    placeholder = 'Describe your investment proposal, funding amount, and terms you\'re considering *';
                    break;
            }
            
            if (messageField) {
                messageField.placeholder = placeholder;
            }
        });
    }
});

// Add professional email copying functionality
document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
    emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        const email = this.getAttribute('href').replace('mailto:', '');
        
        // Try to copy to clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                showNotification(`Email address copied: ${email}`, 'success');
            }).catch(() => {
                // Fallback: open email client
                window.location.href = this.getAttribute('href');
            });
        } else {
            // Fallback: open email client
            window.location.href = this.getAttribute('href');
        }
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    revealOnScroll();
}, 100);

window.addEventListener('scroll', throttledScroll);

// Initialize reveal animation
window.addEventListener('load', revealOnScroll);

// Add CSS for business-specific animations
const businessStyles = document.createElement('style');
businessStyles.textContent = `
    .notification-content {
        align-items: flex-start !important;
    }
    
    .service-icon, .achievement-icon {
        transition: transform 0.3s ease;
    }
    
    .publication-badge, .award-badge {
        transition: transform 0.3s ease;
    }
    
    .hero-badge {
        transition: transform 0.3s ease;
    }
    
    .form-group input:valid:not(:placeholder-shown),
    .form-group select:valid,
    .form-group textarea:valid:not(:placeholder-shown) {
        border-color: #10b981;
    }
    
    .form-group input:invalid:not(:placeholder-shown),
    .form-group textarea:invalid:not(:placeholder-shown) {
        border-color: #ef4444;
    }
    
    .tab-btn {
        position: relative;
        overflow: hidden;
    }
    
    .tab-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }
    
    .tab-btn:hover::before {
        left: 100%;
    }
    
    .research-project-card, .innovation-card, .publication-card {
        border-left: 4px solid transparent;
        transition: all 0.3s ease, border-left 0.3s ease;
    }
`;
document.head.appendChild(businessStyles);

// Business card click analytics (placeholder for future implementation)
function trackBusinessCardClick(cardType, cardTitle) {
    // This would integrate with analytics in production
    console.log(`Business card clicked: ${cardType} - ${cardTitle}`);
}

// Add click tracking to business cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h4').textContent;
            trackBusinessCardClick('service', title);
        });
    });
    
    document.querySelectorAll('.achievement-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            trackBusinessCardClick('achievement', title);
        });
    });
});

// Professional keyboard navigation
document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }
    
    // Tab navigation enhancement for forms
    if (e.key === 'Tab' && e.target.tagName === 'SELECT') {
        setTimeout(() => {
            if (e.target.value) {
                e.target.style.borderColor = '#2563eb';
            }
        }, 100);
    }
});