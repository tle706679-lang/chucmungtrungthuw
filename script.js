document.addEventListener('DOMContentLoaded', () => {
    const dancingLion = document.getElementById('dancing-lion');
    const lionImages = [
        'lion_dance_1.png', // Replace with your image filenames
        'lion_dance_2.png',
        'lion_dance_3.png',
        'lion_dance_4.png'
        // Add more image filenames for different frames of the dance
    ];
    let currentImageIndex = 0;

    function animateLion() {
        dancingLion.src = lionImages[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % lionImages.length;
    }

    // Animate the lion every 200 milliseconds (adjust speed as needed)
    setInterval(animateLion, 200);
});
