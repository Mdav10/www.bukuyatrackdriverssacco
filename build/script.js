// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// ===== CLOSE MENU ON LINK CLICK (mobile) =====
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== SMOOTH SCROLL FOR "Open an Account" & "Contact Us" already handled by CSS =====
console.log('BUKUYA CO-OP Website ready! 🙌');
