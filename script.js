const img = document.getElementById('Image');

document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    // Get cursor position relative to center
    const offsetX = e.clientX - innerWidth / 2;
    const offsetY = e.clientY - innerHeight / 2;

    // Apply small movement factor
    const moveX = offsetX * 0.03;
    const moveY = offsetY * 0.03;

    img.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

document.addEventListener('mouseleave', () => {
    img.style.transform = `translate(0px, 0px)`;
});
