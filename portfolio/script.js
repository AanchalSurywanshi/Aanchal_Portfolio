console.log("Portfolio loaded");

const bg = document.querySelector('.bg-animation');

for (let i = 0; i < 20; i++) {
    const span = document.createElement('span');
    span.style.left = Math.random() * 100 + 'vw';
    span.style.animationDuration = (10 + Math.random() * 20) + 's';
    bg.appendChild(span);
}
