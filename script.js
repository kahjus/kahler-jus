document.addEventListener('DOMContentLoaded', function () {
    // Nav links functionality
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default to avoid page reload
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Hide sidebar on mobile after clicking a link
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    });

    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');

    // Function to open the menu
    function openMenu() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }

    // Function to close the menu
    function closeMenuFunc() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Event listeners for menu controls
    menuToggle.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuFunc);
    overlay.addEventListener('click', closeMenuFunc);

    // Close menu when screen gets larger
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            closeMenuFunc();
        }
    });
});