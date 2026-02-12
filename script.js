const noBtn = document.querySelector(".no-btn");

// Function to move button
function moveButton() {
    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 200) - 100;

    noBtn.style.position = "relative";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// For laptop (mouse)
noBtn.addEventListener("mouseover", moveButton);

// For phone (touch)
noBtn.addEventListener("touchstart", moveButton);

function redirectToLovePage() {
    setTimeout(() => {
        window.location.href = "yes.html";
    }, 500);
}

// Start music on first touch (for mobile)
document.addEventListener("click", function () {
    const music = document.getElementById("bg-music");
    if (music) {
        music.play();
    }
}, { once: true });

const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Create hearts repeatedly
setInterval(createHeart, 300); // faster hearts
heart.style.fontSize = (Math.random() * 30 + 15) + "px"; // bigger hearts

// STAR NIGHT BACKGROUND
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 150;

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random()
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
    });
}

function twinkleStars() {
    stars.forEach(star => {
        star.alpha += (Math.random() - 0.5) * 0.2; // bigger change for more visible twinkle
        if (star.alpha < 0.2) star.alpha = 0.2;     // minimum visibility
        if (star.alpha > 1) star.alpha = 1;         // max opacity
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
    });
    twinkleStars();
    requestAnimationFrame(animateStars);
}

// Update canvas size on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
