let button = document.getElementById('click');

button.onmouseenter = () => {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    button.style.left = Math.random() * maxX + 'px';
    button.style.top = Math.random() * maxY + 'px';
}