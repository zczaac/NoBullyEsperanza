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

(function() {
    emailjs.init("qTEE50K1DoMadOJPN"); // Public Key Anda
})();

function sendEmail(event) {
    event.preventDefault(); // Mencegah halaman dari reload setelah submit

    // Ambil data dari form
    const form = document.getElementById("konsultasi-form");

    emailjs.sendForm('service_q32xioq', 'template_ndj5dn8', form)
        .then(function(response) {
            alert('Email berhasil dikirim!');
        }, function(error) {
            alert('Terjadi kesalahan. Silakan coba lagi.');
        });
}