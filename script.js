const image = document.getElementById('image');

document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // range -15 to 15
    const y = (e.clientY / innerHeight - 0.5) * 30; // range -15 to 15
    image.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

document.addEventListener('mouseleave', () => {
    image.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
