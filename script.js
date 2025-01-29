(async function() {
    const video = document.getElementById('mirror');
    const flipButton = document.getElementById('flipButton');
    let flipped = true;

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        console.error("Error accessing camera:", err);
        document.getElementById('message').textContent = "Uh-oh, no camera detected!";
    }

    // Flip mirror effect
    flipButton.addEventListener('click', () => {
        flipped = !flipped;
        video.style.transform = flipped ? 'scaleX(-1)' : 'scaleX(1)';
        flipButton.textContent = flipped ? "Flip Mirror" : "Unflip Mirror";
    });
})();
