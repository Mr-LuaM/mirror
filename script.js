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

    // 🔄 Flip Mirror Effect
    flipButton.addEventListener('click', () => {
        flipped = !flipped;
        video.style.transform = flipped ? 'scaleX(-1)' : 'scaleX(1)';
        flipButton.textContent = flipped ? "Flip Mirror" : "Unflip Mirror";
    });

    // 🕵️‍♂️ FAKE LOADING MESSAGE
    setTimeout(() => {
        document.getElementById('message').textContent = "Calibrating beauty... Done! (Just kidding, it's all you.)";
    }, 3000);

    // 😂 FUNNY MESSAGES (AFTER 30 SECONDS)
    setTimeout(() => {
        const messages = [
            "Damn, looking fresh today! (or maybe it's just the lighting...)",
            "Mirror, mirror on the wall... why are you staring so long?",
            "Did you just check yourself out again? Caught ya!",
            "You blinked. I saw it.",
            "WARNING: Too much beauty detected. Mirror might break."
        ];
        document.getElementById('message').textContent = messages[Math.floor(Math.random() * messages.length)];
    }, 30000);

    // 👻 JUMP SCARE MODE (Random spooky face flash)
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every minute
            const scareImage = document.createElement("img");
            scareImage.src = "https://i.postimg.cc/TPrvcn5D/0AvJ3mv.jpg"; 
            scareImage.style.position = "absolute";
            scareImage.style.top = "50%";
            scareImage.style.left = "50%";
            scareImage.style.transform = "translate(-50%, -50%)";
            scareImage.style.width = "200px";
            scareImage.style.opacity = "0";
            scareImage.style.transition = "opacity 0.2s ease-in-out";
            document.body.appendChild(scareImage);

            setTimeout(() => { scareImage.style.opacity = "1"; }, 100);
            setTimeout(() => { document.body.removeChild(scareImage); }, 300);
        }
    }, 90000); // Happens every 1.5 minutes randomly

    // 🤯 RANDOM FLIP MODE
    setInterval(() => {
        video.style.transform = flipped ? 'scaleX(1)' : 'scaleX(-1)';
        setTimeout(() => {
            video.style.transform = flipped ? 'scaleX(-1)' : 'scaleX(1)';
        }, 500);
    }, Math.random() * 30000 + 15000);

    // 🕹️ KONAMI CODE Easter Egg (↑ ↑ ↓ ↓ ← → ← → B A)
    let konamiCode = [];
    document.addEventListener("keydown", (e) => {
        const keys = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
        konamiCode.push(e.key);
        if (konamiCode.length > keys.length) konamiCode.shift();
        if (JSON.stringify(konamiCode) === JSON.stringify(keys)) {
            const catGif = document.createElement("img");
            catGif.src = "https://media1.tenor.com/m/Km11GYbvYY0AAAAd/good-morning.gif";
            catGif.style.position = "absolute";
            catGif.style.bottom = "10px";
            catGif.style.right = "10px";
            catGif.style.width = "100px";
            document.body.appendChild(catGif);
            setTimeout(() => { document.body.removeChild(catGif); }, 10000);
        }
    });

    // 🕵️‍♂️ "HACKER DETECTED" Mode
    setInterval(() => {
        if (Math.random() < 0.2) { // 20% chance every 10 minutes
            const hackerText = document.createElement("div");
            hackerText.textContent = "⚠ HACKER DETECTED ⚠";
            hackerText.style.position = "absolute";
            hackerText.style.top = "50%";
            hackerText.style.left = "50%";
            hackerText.style.transform = "translate(-50%, -50%)";
            hackerText.style.color = "red";
            hackerText.style.fontSize = "3rem";
            hackerText.style.fontWeight = "bold";
            document.body.appendChild(hackerText);

            setTimeout(() => { document.body.removeChild(hackerText); }, 1000);
        }
    }, 600000); // Happens every 10 minutes randomly

    // ⏳ TIME-BASED EASTER EGGS
    setInterval(() => {
        const now = new Date();
        const hours = now.getHours();

        if (hours === 0) {
            alert("Midnight Mirror Mode: You are now talking to your future self.");
        } else if (hours === 3) {
            const shadow = document.createElement("img");
            shadow.src = "https://i.postimg.cc/2SgCGzHP/S1-AFFw-J-1.jpg"; // A creepy silhouette
            shadow.style.position = "absolute";
            shadow.style.bottom = "0";
            shadow.style.left = "50%";
            shadow.style.transform = "translateX(-50%)";
            shadow.style.opacity = "0";
            shadow.style.transition = "opacity 1s ease-in-out";
            document.body.appendChild(shadow);

            setTimeout(() => { shadow.style.opacity = "1"; }, 100);
            setTimeout(() => { document.body.removeChild(shadow); }, 2000);
        }
    }, 60000); // Check every minute

    // 😱 FAKE SCREAMER MODE (Only on First Visit)
    if (!localStorage.getItem("screamer_shown")) {
        setTimeout(() => {
            document.body.style.backgroundColor = "black";
            document.body.innerHTML = '<h1 style="color: red; text-align: center;">MIRROR ERROR</h1>';
            setTimeout(() => { location.reload(); }, 2000);
        }, 10000);
        localStorage.setItem("screamer_shown", "true");
    }

})();
