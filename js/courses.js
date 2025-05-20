const icons = document.querySelectorAll(".animation .icon");
const container = document.getElementById("animation");

const iconSize = 60;

function moveIcon(icon) {
  const maxX = container.offsetWidth - iconSize;
  const maxY = container.offsetHeight - iconSize;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  const rotX = Math.random() * 360;
  const rotY = Math.random() * 360;

  icon.style.left = `${x}px`;
  icon.style.top = `${y}px`;
  icon.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
}

function animateIcons() {
  icons.forEach((icon) => {
    moveIcon(icon);
  });
}

// تحريك مبدئي ثم كل 2 ثانية
animateIcons();
setInterval(animateIcons, 1000);


// التعليقات
const comments = JSON.parse(localStorage.getItem("comments")) || [];

const containerCommment = document.getElementById("commentsSection");

if (comments.length === 0) {
  containerCommment.innerHTML = "<p>لا توجد تعليقات حتى الآن.</p>";
} else {
  comments.reverse().forEach((comment) => {
    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = `
        <h4>${comment.firstname} ${comment.lastname}</h4>
        <p>${comment.comment}</p>
        <small>📧 ${comment.email} | 🕒 ${comment.date}</small>
      `;
    containerCommment.appendChild(div); // ✅ تم التصحيح هنا
  });
}
