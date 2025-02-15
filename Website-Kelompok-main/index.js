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
    emailjs.init("qTEE50K1DoMadOJPN"); // Ganti dengan user ID EmailJS Anda
  })();

  function sendEmail(event) {
    event.preventDefault(); // Mencegah form submit secara default

    const nama = document.getElementById("Admin").value;
    const email = document.getElementById("from_name").value;
    const pesan = document.getElementById("message").value;

    const templateParams = {
      from_name: nama,
      from_email: email,
      message: pesan,
    };

    emailjs
      .send("service_q32xioq", "template_ndj5dn8", templateParams)
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
