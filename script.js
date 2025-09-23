const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let stars = [];
const numStars = 300;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      depth: Math.random() * 6 + 1
    });
  }
}
resize();
window.addEventListener("resize", resize);

function draw() {
    // create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#0b192e");   // deep navy at top
    gradient.addColorStop(1, "#000814");   // nearly black at bottom
  
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    const scrollY = window.scrollY;
  
    stars.forEach(star => {
      let y = (star.y - scrollY / star.depth) % canvas.height;
      if (y < 0) y += canvas.height;
  
      ctx.fillStyle = "white";
      ctx.fillRect(star.x, y, star.size, star.size);
    });
  }
  

function animate() {
  draw();
  requestAnimationFrame(animate);
}
animate();
