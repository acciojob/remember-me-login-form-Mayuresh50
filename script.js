// Get DOM elements
const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');
const existingBtn = document.getElementById('existing');

// Use DOMContentLoaded so elements are ready
document.addEventListener('DOMContentLoaded', () => {
  // Ensure fields are empty and checkbox unchecked on page load
  usernameInput.value = '';
  passwordInput.value = '';
  checkbox.checked = false;

  // If credentials exist in localStorage, show the existing user button.
  // We store credentials under keys 'username' and 'password' as required.
  const savedUser = localStorage.getItem('username');
  const savedPass = localStorage.getItem('password');

  if (savedUser && savedPass) {
    existingBtn.style.display = 'inline-block';
  } else {
    existingBtn.style.display = 'none';
  }
});

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = usernameInput.value.trim();
  const pass = passwordInput.value; // keep exact password (don't trim)

  // Always show login alert with entered username
  alert(`Logged in as ${user}`);

  // If "Remember me" checked -> save username & password
  if (checkbox.checked) {
    // Save exactly under keys 'username' and 'password'
    localStorage.setItem('username', user);
    localStorage.setItem('password', pass);
  } else {
    // Checkbox not checked -> remove any saved credentials
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  // Toggle visibility of existing button based on presence in localStorage
  const exists = localStorage.getItem('username') && localStorage.getItem('password');
  existingBtn.style.display = exists ? 'inline-block' : 'none';
});

// Handle "Login as existing user" click
existingBtn.addEventListener('click', () => {
  const savedUser = localStorage.getItem('username');

  // If no saved user (edge case), hide button and return
  if (!savedUser) {
    existingBtn.style.display = 'none';
    return;
  }

  alert(`Logged in as ${savedUser}`);
});
