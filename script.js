document.getElementById("submitBtn").addEventListener("click", () => {
    const name = document.getElementById("nameInput").value;

    if (name) {
        // Redirect to the output.html page with the name as a query parameter
        window.location.href = `index.html?name=${encodeURIComponent(name)}`;
    } else {
        alert("Please enter a name.");
    }
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Optional animation for the hamburger icon
hamburger.addEventListener('click', () => {
    const lines = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('toggle')) {
        lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        lines[0].style.transform = 'rotate(0)';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'rotate(0)';
    }
});
