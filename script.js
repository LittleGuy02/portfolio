document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector("textarea").value;

    if (!name || !email || !message) {
      alert("Tolong isi semua kolom terlebih dahulu.");
      return;
    }

    alert(`Terima kasih ${name}! Pesan kamu sudah dikirim.`);
    form.reset();
  });

  // Fade-in when in view
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach((el) => observer.observe(el));
});
