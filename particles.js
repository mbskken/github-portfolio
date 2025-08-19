const canvas = document.getElementById("worksParticles");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 8 + 4, // 4px to 12px

    speedX: Math.random() * 0.5 - 0.25,
    speedY: Math.random() * 0.5 - 0.25,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,255,255,0.8)";
    ctx.shadowColor = "#0ff";
    ctx.shadowBlur = 4;
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    // wrap around edges
    if (p.x > canvas.width) p.x = 0;
    if (p.x < 0) p.x = canvas.width;
    if (p.y > canvas.height) p.y = 0;
    if (p.y < 0) p.y = canvas.height;
  });

  requestAnimationFrame(animate);
}

animate();
