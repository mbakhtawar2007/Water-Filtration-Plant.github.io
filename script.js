document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu functionality
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('mobile-menu');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('mobile-menu');
        });
    });

    // Modal functionality
    const adminLoginBtn = document.getElementById('adminLoginBtn') || document.getElementById('adminLoginBtn-desktop');
    const clientLoginBtn = document.getElementById('clientLoginBtn') || document.getElementById('clientLoginBtn-desktop');
    const adminLoginModal = document.getElementById('adminLoginModal');
    const clientLoginModal = document.getElementById('clientLoginModal');
    const closeAdminModal = document.getElementById('closeAdminModal');
    const closeClientModal = document.getElementById('closeClientModal');
    const clientLoginTab = document.getElementById('clientLoginTab');
    const clientRegisterTab = document.getElementById('clientRegisterTab');
    const clientLoginFormWrap = document.getElementById('clientLoginFormWrap');
    const clientRegisterFormWrap = document.getElementById('clientRegisterFormWrap');

    // Open modals
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'admin/admin.html';
        });
    }

    if (clientLoginBtn) {
        clientLoginBtn.addEventListener('click', () => {
            clientLoginModal.style.display = 'flex';
        });
    }

    // Close modals
    if (closeAdminModal) {
        closeAdminModal.addEventListener('click', () => {
            adminLoginModal.style.display = 'none';
        });
    }

    if (closeClientModal) {
        closeClientModal.addEventListener('click', () => {
            clientLoginModal.style.display = 'none';
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === adminLoginModal) {
            adminLoginModal.style.display = 'none';
        }
        if (e.target === clientLoginModal) {
            clientLoginModal.style.display = 'none';
        }
    });

    // Switch between login and register tabs
    if (clientLoginTab && clientRegisterTab) {
        clientLoginTab.addEventListener('click', (e) => {
            e.preventDefault();
            clientLoginFormWrap.style.display = 'block';
            clientRegisterFormWrap.style.display = 'none';
            clientLoginTab.classList.remove('btn-outline');
            clientLoginTab.classList.add('btn');
            clientRegisterTab.classList.remove('btn');
            clientRegisterTab.classList.add('btn-outline');
        });

        clientRegisterTab.addEventListener('click', (e) => {
            e.preventDefault();
            clientLoginFormWrap.style.display = 'none';
            clientRegisterFormWrap.style.display = 'block';
            clientRegisterTab.classList.remove('btn-outline');
            clientRegisterTab.classList.add('btn');
            clientLoginTab.classList.remove('btn');
            clientLoginTab.classList.add('btn-outline');
        });
    }

    // Form submissions
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('adminUsername').value;
            const password = document.getElementById('adminPassword').value;

            // Simple admin authentication
            if (username === 'admin' && password === 'admin123') {
                alert('Admin login successful! Redirecting to admin panel...');
                // In a real app, this would redirect to the admin page
                window.location.href = 'admin/admin.html';
            } else {
                alert('Invalid admin credentials. Try admin/admin123');
            }
        });
    }

    const clientLoginForm = document.getElementById('clientLoginForm');
    if (clientLoginForm) {
        clientLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('clientEmail').value;
            const password = document.getElementById('clientPassword').value;

            if (email && password) {
                alert(`Welcome back! You're now logged in as ${email}`);
                clientLoginModal.style.display = 'none';
                // Redirect to client dashboard
                window.location.href = './client.html';
            } else {
                alert('Please enter both email and password');
            }
        });
    }

    const clientRegisterForm = document.getElementById('clientRegisterForm');
    if (clientRegisterForm) {
        clientRegisterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;

            if (name && email && password.length >= 6) {
                alert(`Thank you for registering, ${name}! You can now log in.`);
                clientLoginModal.style.display = 'none';
            } else if (password.length < 6) {
                alert('Password must be at least 6 characters');
            } else {
                alert('Please fill all fields');
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Newsletter subscription
    const subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            const emailInput = document.getElementById('newsletterEmail');
            const email = emailInput.value;

            if (validateEmail(email)) {
                alert(`Thank you for subscribing with ${email}!`);
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address');
            }
        });
    }

    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Scroll animation
    function checkScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.8;
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky header effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 100);
        }
    });

    // Hero animation on load
    window.addEventListener('load', () => {
        document.querySelector('.hero-title')?.classList.add('visible');
        document.querySelector('.hero-subtitle')?.classList.add('visible');
        document.querySelectorAll('.hero-btns .btn').forEach(btn => {
            btn.classList.add('visible');
        });
    });

    // --- Site-wide Notification System ---
    function showNotification(message, type = 'info', duration = 3000) {
        const notification = document.getElementById('siteNotification');
        if (!notification) return;
        notification.textContent = message;
        notification.className = `site-notification ${type}`;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, duration);
    }

    // --- Search Functionality ---
    const siteSearchForm = document.getElementById('siteSearchForm');
    if (siteSearchForm) {
        siteSearchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const query = document.getElementById('siteSearchInput').value.trim().toLowerCase();
            if (!query) {
                showNotification('Please enter a search term.', 'warning');
                return;
            }
            // Simple search: highlight sections containing the query
            let found = false;
            document.querySelectorAll('section, main, .section').forEach(section => {
                if (section.textContent.toLowerCase().includes(query)) {
                    section.style.outline = '2px solid #007bff';
                    found = true;
                } else {
                    section.style.outline = '';
                }
            });
            if (found) {
                showNotification(`Results found for "${query}"`, 'success');
            } else {
                showNotification(`No results found for "${query}"`, 'error');
            }
        });
    }

    // --- Booking Modal Functionality ---
    const bookingModal = document.getElementById('bookingModal');
    const closeBookingModal = document.getElementById('closeBookingModal');
    const bookingForm = document.getElementById('bookingForm');
    document.querySelectorAll('.btn, .service-card .btn').forEach(btn => {
        if (btn.textContent.includes('Schedule') || btn.textContent.includes('Request')) {
            btn.addEventListener('click', function (e) {
                if (bookingModal) {
                    e.preventDefault();
                    bookingModal.style.display = 'flex';
                }
            });
        }
    });
    if (closeBookingModal) {
        closeBookingModal.addEventListener('click', () => {
            bookingModal.style.display = 'none';
        });
    }
    window.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            bookingModal.style.display = 'none';
        }
    });
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();
            showNotification('Your booking request has been submitted!', 'success');
            bookingModal.style.display = 'none';
            bookingForm.reset();
        });
    }

    // --- Testimonials Carousel ---
    const testimonials = [
        {
            text: 'Aab-e-Hashir has been our water provider for over 3 years. Their service is reliable and the water quality is exceptional. Highly recommended!',
            author: 'Sarah Johnson',
            role: 'Residential Customer',
            avatar: 'https://randomuser.me/api/portraits/women/45.jpg'
        },
        {
            text: 'We switched to Aab-e-Hashir for our office water supply and couldn\'t be happier. The delivery is always on time and their customer service is excellent.',
            author: 'Michael Chen',
            role: 'Business Customer',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            text: 'The taste of Aab-e-Hashir water is noticeably better than other brands we\'ve tried. Their eco-friendly bottle exchange program is also a big plus for us.',
            author: 'Amina Hassan',
            role: 'Family Customer',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
        }
    ];
    let testimonialIndex = 0;
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    const testimonialPrev = document.getElementById('testimonialPrev');
    const testimonialNext = document.getElementById('testimonialNext');
    function renderTestimonial(idx) {
        if (!testimonialsGrid) return;
        const t = testimonials[idx];
        testimonialsGrid.innerHTML = `
            <div class="testimonial-card animate-on-scroll">
                <p class="testimonial-text">${t.text}</p>
                <div class="testimonial-author">
                    <div class="author-avatar"><img src="${t.avatar}" alt="${t.author}"></div>
                    <div class="author-info"><h4>${t.author}</h4><p>${t.role}</p></div>
                </div>
            </div>
        `;
    }
    if (testimonialsGrid) renderTestimonial(testimonialIndex);
    if (testimonialPrev) testimonialPrev.addEventListener('click', () => {
        testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
        renderTestimonial(testimonialIndex);
    });
    if (testimonialNext) testimonialNext.addEventListener('click', () => {
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        renderTestimonial(testimonialIndex);
    });
});
