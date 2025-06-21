// Form submission handling
document.getElementById('adminLoginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Admin login functionality would be implemented here.');
    document.getElementById('adminLoginModal').style.display = 'none';
});

document.getElementById('clientLoginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Client login functionality would be implemented here.');
    document.getElementById('clientLoginModal').style.display = 'none';
});

document.getElementById('clientRegisterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Client registration functionality would be implemented here.');
    document.getElementById('clientLoginModal').style.display = 'none';
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('contactForm').reset();
});
