function checkAnswer(button, correct) {
  const result = document.getElementById("quiz-result");

  const buttons = document.querySelectorAll(".quiz-options button");
  buttons.forEach(btn => {
    btn.disabled = true;
  });

  if (correct) {
    button.style.background = "#22c55e";
    button.style.color = "white";
    result.textContent =
      "✅ Benar! Dendrit berfungsi menerima rangsangan atau impuls.";
  } else {
    button.style.background = "#ef4444";
    button.style.color = "white";
    result.textContent =
      "❌ Belum tepat. Jawaban yang benar adalah B. Dendrit.";
  }
}


// Animasi sederhana saat elemen masuk ke layar
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});


// Memberikan animasi pada beberapa bagian website
document
  .querySelectorAll(
    ".card, .brain-card, .mini-card, .synapse-step, .reflex-item, .autonomic-card"
  )
  .forEach(el => {
    el.classList.add("animate");
    observer.observe(el);
  });
