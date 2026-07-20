document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");
    const addressBtn = document.querySelector(".nav-address-btn");

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

        if (scrollPercent > 10) {
            addressBtn.classList.add("visible");
        } else {
            addressBtn.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);

    menuBtn.addEventListener("click", function() {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    });

    overlay.addEventListener("click", function() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
});
