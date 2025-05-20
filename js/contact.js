const icons = document.querySelectorAll(".social-container .icon");
const container = document.getElementById("containerSocial");

function moveIconRandomly(icon) {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const iconWidth = icon.offsetWidth;
  const iconHeight = icon.offsetHeight;

  const x = Math.random() * (containerWidth - iconWidth);
  const y = Math.random() * (containerHeight - iconHeight);

  icon.style.transform = `translate(${x}px, ${y}px)`;
}

// نقل الأيقونات عشوائيًا كل ثانية
setInterval(() => {
  icons.forEach((icon) => moveIconRandomly(icon));
}, 2000);


// الفورم
function saveComment() {
  const commentData = {
    firstname: document.getElementById("firstname").value.trim(),
    lastname: document.getElementById("lastname").value.trim(),
    email: document.getElementById("email").value.trim(),
    telephone: document.getElementById("telephone").value.trim(),
    comment: document.getElementById("comment").value.trim(),
    date: new Date().toLocaleString("ar-EG"),
  };

  // الحصول على التعليقات القديمة من localStorage
  const previousComments = JSON.parse(localStorage.getItem("comments")) || [];

  // إضافة التعليق الجديد
  previousComments.push(commentData);

  // حفظهم مرة ثانية
  localStorage.setItem("comments", JSON.stringify(previousComments));

  alert("تم حفظ التعليق بنجاح! سيتم عرضه في صفحة الكورسات.");
  document.getElementById("commentForm").reset();
}