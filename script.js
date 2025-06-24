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
        adminLoginBtn.addEventListener('click', () => {
            adminLoginModal.style.display = 'flex';
        });

        clientLoginBtn.addEventListener('click', () => {
            clientLoginModal.style.display = 'flex';
        });

        // Close modals
        closeAdminModal.addEventListener('click', () => {
            adminLoginModal.style.display = 'none';
        });

        closeClientModal.addEventListener('click', () => {
            clientLoginModal.style.display = 'none';
        });

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

        // Form submissions
        document.getElementById('adminLoginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Admin login functionality would be implemented here');
            adminLoginModal.style.display = 'none';
        });

        document.getElementById('clientLoginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Client login functionality would be implemented here');
            clientLoginModal.style.display = 'none';
        });

        document.getElementById('clientRegisterForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Client registration functionality would be implemented here');
            clientLoginModal.style.display = 'none';
        });

        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            e.target.reset();
        });

        // Hamburger menu functionality
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navLinks = document.querySelector('.nav-links');
        const navbarAuth = document.querySelector('.navbar-auth');
        const navAuthMobile = document.querySelector('.nav-auth-mobile');

        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('mobile-menu');
            if (navAuthMobile) navAuthMobile.classList.toggle('mobile-menu');
        });

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
            anchor.addEventListener('click', function(e) {
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
            header.classList.toggle('sticky', window.scrollY > 100);
        })