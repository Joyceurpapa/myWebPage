// Simple interactive effect: highlight active nav link
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#FF4655';
            link.style.fontWeight = 'bold';
        }
    });

    // Welcome alert for home page
    if (currentPage === 'index.html' || currentPage === '') {
        console.log('Welcome to Valorant Fan Site!');
    }
});
