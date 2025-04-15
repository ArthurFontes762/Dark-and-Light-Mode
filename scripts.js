// Função Dark/Light mode
const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        document.body.classList.add('dark');
    } else {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        document.body.classList.remove('dark');
    }
});