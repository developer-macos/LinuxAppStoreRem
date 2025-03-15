function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }).then(response => response.text())
        .then(alert);
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }).then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.message === 'Login successful') {
                localStorage.setItem('username', username);
                localStorage.setItem('userData', data.data);
                window.location.href = '/';
            }
        });
}

function saveData() {
    const username = localStorage.getItem('username');
    const data = document.getElementById('userData').value;

    fetch('/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, data })
    }).then(response => response.text())
        .then(alert);
}
