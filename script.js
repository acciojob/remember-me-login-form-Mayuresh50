//your JS code here. If required.
// Select elements
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("loginForm");

// ----------- ON PAGE LOAD -----------
window.onload = () => {
	const savedUser = localStorage.getItem("username");
	const savedPass = localStorage.getItem("password");

	if (savedUser && savedPass) {
		existingBtn.style.display = "block";
	} else {
		existingBtn.style.display = "none";
	}
};

// ----------- FORM SUBMISSION -----------
form.addEventListener("submit", (e) => {
	e.preventDefault();

	const user = username.value.trim();
	const pass = password.value.trim();

	// Alert on login
	alert(`Logged in as ${user}`);

	// Checkbox checked → store credentials
	if (checkbox.checked) {
		localStorage.setItem("username", user);
		localStorage.setItem("password", pass);
	} else {
		// Checkbox unchecked → remove credentials
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}

	// Update button visibility
	const exists = localStorage.getItem("username");
	existingBtn.style.display = exists ? "block" : "none";
});

// ----------- LOGIN AS EXISTING USER -----------
existingBtn.addEventListener("click", () => {
	const savedUser = localStorage.getItem("username");
	alert(`Logged in as ${savedUser}`);
});
