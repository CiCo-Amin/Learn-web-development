// ===== Fitur 1: Toggle mode gelap/terang =====
const tombolTema = document.querySelector("#toggle-tema");
const body = document.body;

tombolTema.addEventListener("click", function () {
  body.classList.toggle("dark");
  tombolTema.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

// ===== Fitur 2: Tombol like dengan penghitung =====
const tombolLike = document.querySelector("#like-button");
const jumlahLike = document.querySelector("#like-count");
let totalLike = 0;

tombolLike.addEventListener("click", function () {
  totalLike++;
  jumlahLike.textContent = totalLike;
});
