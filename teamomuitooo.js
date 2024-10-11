let flutua = document.querySelector('.flutua');
let velocidadeX = 5;
let velocidadeY = 5;
let x = 0;
let y = 0;

function animar() {
x += velocidadeX;
y += velocidadeY;

if (x > window.innerWidth - 150 || x < 0) {
velocidadeX *= -1;
}

if (y > window.innerHeight - 50 || y < 0) {
velocidadeY *= -1;
}

flutua.style.left = x + 'px';
flutua.style.top = y + 'px';

requestAnimationFrame(animar);
}

animar();

