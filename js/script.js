// JavaScript untuk CV Online Adrikna Mona Izza

// Tahun footer dibuat otomatis.
const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();

// Tombol untuk mengubah tema halaman.
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    themeButton.textContent = isDark ? "Tema Terang" : "Ubah Tema";
});
