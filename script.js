document.getElementById("submitBtn").addEventListener("click", () => {
    const name = document.getElementById("nameInput").value;

    if (name) {
        // Redirect to the output.html page with the name as a query parameter
        window.location.href = `index.html?name=${encodeURIComponent(name)}`;
    } else {
        alert("Please enter a name.");
    }
});
