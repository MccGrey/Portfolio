let navbar = document.querySelector('.navbar');
document.querySelector('#burger').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscoll = () => {
    navbar.classList.remove('active');
} 