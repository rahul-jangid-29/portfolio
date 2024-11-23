// Load header and footer
document.addEventListener("DOMContentLoaded", function () {
   
    window.scrollTo(0, 0); // Ensures the page starts at the top
    
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });

    // Parallax effect for project cards
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { width, height, left, top } = card.getBoundingClientRect();
            const x = e.clientX - left - width / 2;
            const y = e.clientY - top - height / 2;

            const depth = card.getAttribute('data-depth') || 0.2;
            const xOffset = (x / width) * depth * 100;
            const yOffset = (y / height) * depth * 100;

            card.style.transform = `translateX(${xOffset}px) translateY(${yOffset}px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateX(0) translateY(0)';
        });
    });

    // Smooth scroll to top functionality
    const backToTopBtn = document.getElementById('back-to-top');
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
