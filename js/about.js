const container = document.getElementById("animation");
const bubbles = container.querySelectorAll(".bubble");

function randomPosition(el) {
  const containerRect = container.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();

  const maxLeft = container.clientWidth - elRect.width;
  const maxTop = container.clientHeight - elRect.height;

  const left = Math.random() * maxLeft;
  const top = Math.random() * maxTop;

  el.style.left = `${left}px`;
  el.style.top = `${top}px`;
}

function animateBubbles() {
  bubbles.forEach((el) => {
    randomPosition(el);
  });
}


setInterval(animateBubbles, 3000);

// بدء الحركة مبدئياً
animateBubbles();