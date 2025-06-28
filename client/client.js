document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.client-mobile-toggle');
    const navLinks = document.querySelector('.client-nav-links');

    mobileToggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('open');
        this.classList.toggle('open');
        this.setAttribute('aria-expanded', isOpen.toString());
    });

    // Header scroll effect
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.client-header');
        header.classList.toggle('scrolled', window.scrollY > 20);
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('.client-nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Update active link
                document.querySelectorAll('.client-nav-links a').forEach(a => {
                    a.classList.remove('active');
                });
                this.classList.add('active');

                // Scroll to section
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                    mobileToggle.classList.remove('open');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // Modal functionality
    const locationModal = document.getElementById('locationModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const viewLocationBtns = document.querySelectorAll('[data-action="view-location"]');

    function openModal() {
        locationModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        locationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    viewLocationBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    closeModalBtn.addEventListener('click', closeModal);

    locationModal.addEventListener('click', function (e) {
        if (e.target === locationModal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && locationModal.style.display === 'flex') {
            closeModal();
        }
    });

    // Logout button (redirect to home)
    document.getElementById('logoutBtn').addEventListener('click', function (e) {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            window.location.href = '../index.html';
        }
    });

    // New Order button
    document.getElementById('newOrderBtn').addEventListener('click', function () {
        showSimpleModal('Place New Order', 'Order form functionality coming soon!');
    });

    // Edit Profile button
    document.querySelectorAll('.btn.btn-primary, .btn.btn-outline').forEach(btn => {
        if (btn.innerText.includes('Edit Profile')) {
            btn.addEventListener('click', function () {
                showSimpleModal('Edit Profile', 'Profile editing functionality coming soon!');
            });
        }
    });

    // Make Payment button
    document.querySelectorAll('.btn.btn-primary').forEach(btn => {
        if (btn.innerText.includes('Make Payment')) {
            btn.addEventListener('click', function () {
                showSimpleModal('Make Payment', 'Payment functionality coming soon!');
            });
        }
    });

    // Export Orders button
    document.querySelectorAll('.btn.btn-outline').forEach(btn => {
        if (btn.innerText.includes('Export')) {
            btn.addEventListener('click', function () {
                alert('Exporting orders as CSV... (demo only)');
            });
        }
    });

    // Help Center button
    document.querySelectorAll('.btn.btn-secondary').forEach(btn => {
        if (btn.innerText.includes('Help Center')) {
            btn.addEventListener('click', function () {
                showSimpleModal('Help Center', 'Contact support@aquapure.lk or call +94 11 123 4567.');
            });
        }
    });

    // Simple modal for demo actions
    function showSimpleModal(title, message) {
        let modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'flex';
        modal.innerHTML = `<div class='modal-content'><div class='modal-header'><h3>${title}</h3><button class='close-modal' aria-label='Close'>&times;</button></div><div class='modal-body'><p>${message}</p></div></div>`;
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        modal.querySelector('.close-modal').onclick = function () {
            modal.remove();
            document.body.style.overflow = 'auto';
        };
        modal.onclick = function (e) {
            if (e.target === modal) {
                modal.remove();
                document.body.style.overflow = 'auto';
            }
        };
        document.addEventListener('keydown', function esc(e) {
            if (e.key === 'Escape') {
                modal.remove();
                document.body.style.overflow = 'auto';
                document.removeEventListener('keydown', esc);
            }
        });
    }
});
