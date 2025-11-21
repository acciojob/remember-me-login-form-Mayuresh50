// Select elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

// Reset fields & check saved storage on load
window.addEventListener("DOMContentLoaded", () => {
    username.value = "";
    password.value = "";
    checkbox.checked = false;

    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        existing.style.display = "block";
    } else {
        existing.style.display = "none";
    }
});

// Submit functionality
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = username.value.trim();
    const pass = password.value;

    alert(`Logged in as ${user}`);

    if (checkbox.checked) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        existing.style.display = "block";
    } else {
        existing.style.display = "none";
    }
});

// Existing user login
existing.addEventListener("click", () => {
    const savedUser = localStorage.getItem("username");
    alert(`Logged in as ${savedUser}`);
});
