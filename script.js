// Efek sederhana saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    console.log("SANZSTORE website aktif!");

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            console.log("Tombol diklik");
        });
    });
});
