let button = document.getElementById('click');

button.onmouseenter = () => {
    button.style.margin = window.innerWidth + 230 + 'px';
    button.style.marginTop = window.innerHeight + 250 + 'px';
}