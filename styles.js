const list = document.getElementById('list');
const addButton = document.getElementById('addButton');
const newItemInput = document.getElementById('newItem');

addButton.addEventListener('click', () => {
    const newItemText = newItemInput.value.trim();

    if (newItemText !== '') {
        const newItem = document.createElement('li');
        newItem.innerHTML = `${newItemText} <span class="icon">⭐</span>`;

        newItem.addEventListener('click', () => {
            newItem.classList.toggle('completed');
        });

        list.appendChild(newItem);
        newItemInput.value = '';
    }
});

// Add completed class styling dynamically
const style = document.createElement('style');
style.textContent = `
        .completed {
            text-decoration: line-through;
            opacity: 0.6;
        }
    `;
document.head.appendChild(style);

function buttonClicked() {
    alert('The gods have blessed you!');
}

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
