document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const apps = document.querySelectorAll('.app');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');

            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            apps.forEach(app => {
                if (category === 'todas' || app.getAttribute('data-category') === category) {
                    app.style.display = 'flex';
                } else {
                    app.style.display = 'none';
                }
            });
        });
    });
});
