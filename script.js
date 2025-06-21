// Mobile navigation toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

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

// Modal logic for login/register
const adminLoginBtn = document.getElementById('adminLoginBtn');
const clientLoginBtn = document.getElementById('clientLoginBtn');
const adminLoginModal = document.getElementById('adminLoginModal');
const clientLoginModal = document.getElementById('clientLoginModal');
const closeAdminModal = document.getElementById('closeAdminModal');
const closeClientModal = document.getElementById('closeClientModal');
const clientLoginTab = document.getElementById('clientLoginTab');
const clientRegisterTab = document.getElementById('clientRegisterTab');
const clientLoginFormWrap = document.getElementById('clientLoginFormWrap');
const clientRegisterFormWrap = document.getElementById('clientRegisterFormWrap');

adminLoginBtn.addEventListener('click', () => {
    adminLoginModal.style.display = 'flex';
});
clientLoginBtn.addEventListener('click', () => {
    clientLoginModal.style.display = 'flex';
});
closeAdminModal.addEventListener('click', () => {
    adminLoginModal.style.display = 'none';
});
closeClientModal.addEventListener('click', () => {
    clientLoginModal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === adminLoginModal) adminLoginModal.style.display = 'none';
    if (e.target === clientLoginModal) clientLoginModal.style.display = 'none';
});
clientLoginTab.addEventListener('click', () => {
    clientLoginFormWrap.style.display = '';
    clientRegisterFormWrap.style.display = 'none';
    clientLoginTab.classList.add('btn');
    clientRegisterTab.classList.remove('btn');
    clientLoginTab.classList.remove('btn-outline');
    clientRegisterTab.classList.add('btn-outline');
});
clientRegisterTab.addEventListener('click', () => {
    clientLoginFormWrap.style.display = 'none';
    clientRegisterFormWrap.style.display = '';
    clientRegisterTab.classList.add('btn');
    clientLoginTab.classList.remove('btn');
    clientRegisterTab.classList.remove('btn-outline');
    clientLoginTab.classList.add('btn-outline');
});

// Form submission handling
document.getElementById('adminLoginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Admin login functionality would be implemented here.');
    adminLoginModal.style.display = 'none';
});

document.getElementById('clientLoginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Client login functionality would be implemented here.');
    clientLoginModal.style.display = 'none';
});

document.getElementById('clientRegisterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Client registration functionality would be implemented here.');
    clientLoginModal.style.display = 'none';
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('contactForm').reset();
});
