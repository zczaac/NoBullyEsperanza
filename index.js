document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-blue-600", "shadow-lg");
            navbar.classList.remove("bg-transparent");
        } else {
            navbar.classList.add("bg-transparent");
            navbar.classList.remove("bg-blue-600", "shadow-lg");
        }
    });
});

(function () {
    emailjs.init("ry2KYzDhaN5yXo2ya"); // Ganti dengan user ID EmailJS Anda
  })();

  function sendEmail(event) {
    event.preventDefault(); // Mencegah form submit secara default

    const form = document.getElementById("consultation-form");

    emailjs
      .sendForm("service_66b73yd", "template_mhvr431", form)
      .then(
        function (response) {
          alert("Laporan Anda berhasil dikirim!");
          document.getElementById("consultation-form").reset();
        },
        function (error) {
          alert("Terjadi kesalahan. Coba lagi nanti.");
        }
      );
  }
