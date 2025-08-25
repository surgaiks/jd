const image = document.getElementById('Image');
let mouseX = 0;
let mouseY = 0;
let floatX = 0;
let floatY = 0;

document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    mouseX = (e.clientX / innerWidth - 0.5) * 2;
    mouseY = (e.clientY / innerHeight - 0.5) * 2;
});

image.addEventListener('mouseenter', () => {
    document.body.classList.add('rainbow');
});

image.addEventListener('mouseleave', () => {
    document.body.classList.remove('rainbow');
});

function animate() {
    floatX += (mouseX - floatX) * 0.05;
    floatY += (mouseY - floatY) * 0.05;

    const rotateX = floatY * 15 + Math.sin(Date.now() * 0.001) * 3;
    const rotateY = floatX * 15 + Math.cos(Date.now() * 0.001) * 3;
    const translateX = floatX * 25 + Math.sin(Date.now() * 0.0015) * 8;
    const translateY = floatY * 25 + Math.cos(Date.now() * 0.0015) * 8;
    const scale = 1 + Math.sin(Date.now() * 0.001) * 0.02;

    image.style.transform = `translate(${translateX}px, ${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

    requestAnimationFrame(animate);
}

animate();
