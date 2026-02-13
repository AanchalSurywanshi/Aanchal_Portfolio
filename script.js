console.log("Portfolio loaded");

const bg = document.querySelector('.bg-animation');

for (let i = 0; i < 20; i++) {
    const span = document.createElement('span');
    span.style.left = Math.random() * 100 + 'vw';
    span.style.animationDuration = (10 + Math.random() * 20) + 's';
    bg.appendChild(span);
}

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.getElementById("mainNavbar");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            // Only close if navbar is open (mobile view)
            if (navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });
});
