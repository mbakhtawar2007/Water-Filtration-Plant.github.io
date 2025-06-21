// Modal logic for login/register
(function() {
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

    if (adminLoginBtn && adminLoginModal) {
        adminLoginBtn.addEventListener('click', () => {
            adminLoginModal.style.display = 'flex';
        });
    }
    if (clientLoginBtn && clientLoginModal) {
        clientLoginBtn.addEventListener('click', () => {
            clientLoginModal.style.display = 'flex';
        });
    }
    if (closeAdminModal && adminLoginModal) {
        closeAdminModal.addEventListener('click', () => {
            adminLoginModal.style.display = 'none';
        });
    }
    if (closeClientModal && clientLoginModal) {
        closeClientModal.addEventListener('click', () => {
            clientLoginModal.style.display = 'none';
        });
    }
    window.addEventListener('click', (e) => {
        if (e.target === adminLoginModal) adminLoginModal.style.display = 'none';
        if (e.target === clientLoginModal) clientLoginModal.style.display = 'none';
    });
    if (clientLoginTab && clientRegisterTab && clientLoginFormWrap && clientRegisterFormWrap) {
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
    }
})();
