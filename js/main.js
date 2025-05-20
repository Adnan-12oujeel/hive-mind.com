function flipCard(button) {
  const card = button.closest(".card");
  card.classList.toggle("flipped");
}
const icons = [
  '<i class="fab fa-facebook-f"></i>',
  '<i class="fab fa-instagram"></i>',
  '<i class="fab fa-whatsapp"></i>',
  '<i class="fas fa-computer"></i>',
  '<i class="fas fa-folder-open"></i>',
  '<i class="fas fa-book"></i>',
  '<i class="fas fa-flag-usa"></i>',
  '<i class="fas fa-mouse"></i>',

  // أيقونات مايكروسوفت (بعضها موجود كـ SVG أو يمكن استخدام بدائل)
  '<i class="fab fa-microsoft"></i>', // شعار مايكروسوفت العام
  '<i class="fab fa-windows"></i>',
  '<img src="https://img.icons8.com/color/48/000000/ms-word.png" alt="Word" style="width:24px;">',
  '<img src="https://img.icons8.com/color/48/000000/ms-excel.png" alt="Excel" style="width:24px;">',
  '<img src="https://img.icons8.com/color/48/000000/ms-powerpoint.png" alt="PowerPoint" style="width:24px;">',
  '<img src="https://img.icons8.com/color/48/000000/microsoft-teams.png" alt="Teams" style="width:24px;">',
];

const container = document.getElementById("iconArea");

for (let i = 0; i < icons.length; i++) {
  const el = document.createElement("div");
  el.className = "icon";
  el.innerHTML = icons[i];

  // توزيع عشوائي رأسي
  el.style.top = Math.random() * 80 + "%";
  el.style.animationDuration = 5 + Math.random() * 10 + "s";

  container.appendChild(el);
}

