const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

// Check saved theme preference
const savedTheme = localStorage.getItem('themeMode');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = 'Light Mode';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    toggleBtn.textContent = 'Light Mode';
    localStorage.setItem('themeMode', 'dark');
  } else {
    toggleBtn.textContent = 'Dark Mode';
    localStorage.setItem('themeMode', 'light');
  }
});
