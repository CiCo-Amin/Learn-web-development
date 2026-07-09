# Menguasai JavaScript dalam Sekejap ⚡

## Pendahuluan

Kalau HTML itu kerangka dan CSS itu tampilan, **JavaScript** adalah yang bikin halaman web jadi "hidup" — bisa merespons klik, mengubah isi halaman tanpa reload, validasi form, dan banyak lagi. Artikel ini bakal ajak kamu paham JavaScript dari nol, langsung ke intinya, biar kamu bisa langsung praktik bikin halaman web yang interaktif.

## Apa Itu JavaScript?

**JavaScript (JS)** adalah bahasa pemrograman yang berjalan di browser dan bikin halaman web bisa berinteraksi dengan pengguna. Beda dengan HTML (struktur) dan CSS (tampilan), JavaScript adalah bahasa pemrograman "beneran" — punya logika, variabel, kondisi, dan perulangan seperti bahasa pemrograman lainnya.

Melengkapi trio frontend:
- **HTML** = struktur
- **CSS** = tampilan
- **JavaScript** = perilaku/interaktivitas

## Kenapa Perlu Belajar JavaScript?

- Satu-satunya bahasa pemrograman yang jalan native di semua browser.
- Bikin website jadi interaktif: dropdown, validasi form, animasi, dll.
- Modal wajib sebelum lanjut ke framework populer seperti React atau Vue.
- Bisa dipakai juga di luar browser, misalnya buat backend lewat Node.js.

## Cara Menghubungkan JavaScript ke HTML

### 1. Inline (langsung di atribut HTML)

```html
<button onclick="alert('Halo!')">Klik Saya</button>
```

### 2. Internal (di dalam tag `<script>` pada file HTML)

```html
<script>
  alert('Halo dari internal script!');
</script>
```

### 3. External (file terpisah — cara paling direkomendasikan)

```html
<script src="script.js"></script>
```

```javascript
// script.js
alert('Halo dari file eksternal!');
```

Taruh tag `<script>` di akhir, sebelum `</body>`, supaya HTML dimuat dulu sebelum JavaScript dijalankan.

## Variabel: Tempat Menyimpan Data

```javascript
let nama = "Budi";      // nilainya bisa diubah nanti
const umur = 25;        // nilainya tetap/konstan
var kota = "Jakarta";   // cara lama, sekarang jarang dipakai
```

Gunakan `let` untuk nilai yang bisa berubah, dan `const` untuk nilai yang tetap. Sebisa mungkin hindari `var`.

## Tipe Data Dasar

| Tipe | Contoh | Keterangan |
|---|---|---|
| String | `"Halo"` | Teks, diapit tanda kutip |
| Number | `25`, `3.14` | Angka |
| Boolean | `true`, `false` | Benar/salah |
| Array | `[1, 2, 3]` | Kumpulan data berurutan |
| Object | `{ nama: "Budi", umur: 25 }` | Data berbentuk key-value |

## Operator Dasar

```javascript
5 + 3     // penjumlahan     → 8
5 - 3     // pengurangan     → 2
5 * 3     // perkalian       → 15
5 / 3     // pembagian       → 1.67
5 === 5   // sama dengan     → true
5 > 3     // lebih besar dari → true
```

## Kondisional (if/else)

```javascript
let umur = 20;

if (umur >= 18) {
  console.log("Sudah dewasa");
} else {
  console.log("Belum dewasa");
}
```

## Perulangan (Loop)

```javascript
for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}
```

Kode ini bakal jalan 5 kali, dari `i = 1` sampai `i = 5`.

## Function: Membungkus Kode agar Bisa Dipakai Ulang

```javascript
function sapa(nama) {
  return "Halo, " + nama + "!";
}

console.log(sapa("Budi")); // Halo, Budi!
```

Function berguna biar kamu nggak perlu menulis kode yang sama berulang-ulang.

## DOM Manipulation: Bikin Halaman Jadi Interaktif

**DOM (Document Object Model)** adalah representasi halaman HTML yang bisa "disentuh" lewat JavaScript. Ini bagian paling seru, karena di sinilah JavaScript benar-benar mengubah halaman secara langsung.

### Memilih elemen

```javascript
const judul = document.querySelector("h1");
```

### Mengubah isi elemen

```javascript
judul.textContent = "Judul Baru!";
```

### Merespons event, misalnya klik

```javascript
const tombol = document.querySelector("button");

tombol.addEventListener("click", function() {
  alert("Tombol diklik!");
});
```

## Contoh Lengkap

**HTML** (`index.html`):

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Belajar JavaScript</title>
</head>
<body>
  <h1 id="judul">Halo, Dunia!</h1>
  <button id="tombol">Klik Saya</button>

  <script src="script.js"></script>
</body>
</html>
```

**JavaScript** (`script.js`):

```javascript
const judul = document.querySelector("#judul");
const tombol = document.querySelector("#tombol");

tombol.addEventListener("click", function() {
  judul.textContent = "Kamu berhasil klik tombolnya!";
});
```

Simpan kedua file ini di folder yang sama, buka `index.html` di browser, lalu coba klik tombolnya.

## Tips Biar Cepat Jago

- Buka tab **Console** di Chrome DevTools (klik kanan → Inspect → Console) buat coba-coba kode langsung tanpa file.
- Pahami dulu dasar-dasar ini sebelum loncat ke framework seperti React.
- Banyak-banyak latihan bikin logika kecil: kalkulator sederhana, to-do list, dll.
- Jangan panik kalau lihat error di console — baca pesannya, biasanya itu petunjuk langsung ke masalahnya.
- Setelah lancar, coba pelajari `fetch()` buat mengambil data dari API.

## Penutup

JavaScript adalah bahan terakhir yang melengkapi trio frontend: HTML untuk struktur, CSS untuk tampilan, dan JavaScript untuk membuatnya hidup. Begitu kamu paham variabel, kondisional, function, dan cara memanipulasi DOM, kamu sudah bisa mulai membangun halaman web yang benar-benar interaktif. Terus praktik, dan jangan takut mencoba proyek kecil sendiri. Selamat belajar! 🎉
