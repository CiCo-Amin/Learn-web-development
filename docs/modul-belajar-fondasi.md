# Modul Belajar Fondasi: Dari Nol Sampai Siap Bikin Server

*Ini adalah materi untuk fase pertama dari roadmap: HTML/CSS/JS dasar, lalu Node.js & Express (routing sederhana). Perkiraan 2-4 minggu — santai saja, sesuaikan dengan kecepatanmu sendiri.*

## Sebelum mulai

Yang perlu disiapkan:
- **Text editor**: Visual Studio Code (VS Code) — gratis, paling umum dipakai, banyak tutorialnya.
- **Browser**: Chrome atau Firefox. Nanti kita akan sering pakai fitur "Inspect" / DevTools bawaannya.
- **Node.js**: belum perlu diinstal sekarang, nanti baru di Bagian 4.

Beberapa kebiasaan yang membantu:
1. **Ngetik ulang kodenya, jangan copy-paste.** Kelihatannya buang waktu, tapi ini yang bikin kode "nempel" di tangan dan otak.
2. **30 menit tiap hari lebih baik** daripada 5 jam sekali seminggu. Otak butuh waktu untuk mengendapkan hal baru.
3. **Error itu normal**, bukan tanda kamu gagal. Semua programmer, sehebat apapun, tiap hari lihat tulisan merah di layar. Baca pesan errornya pelan-pelan — biasanya sudah dikasih tahu masalahnya di mana.
4. Tiap bagian ada mini-project kecil di akhir. Jangan dilewati — di situ letak pemahamannya, bukan di teori doang.

Daftar isi:
- Bagian 1: HTML — Kerangka Halaman
- Bagian 2: CSS — Mendekorasi Halaman
- Bagian 3: JavaScript — Membuat Halaman "Hidup"
- Bagian 4: Node.js — JavaScript di Luar Browser
- Bagian 5: Express.js — Routing Sederhana

---

## Bagian 1: HTML — Kerangka Halaman (± 3-4 hari)

Bayangkan bikin rumah. HTML itu kerangka dan temboknya — belum dicat, belum ada dekorasi, tapi bentuknya sudah kelihatan.

### 1.1 Struktur dasar

Setiap halaman HTML punya kerangka wajib seperti ini:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Judul di Tab Browser</title>
</head>
<body>
  <h1>Isi halaman ditulis di sini</h1>
</body>
</html>
```

Penjelasan singkat:
- `<!DOCTYPE html>` — kasih tahu browser "ini dokumen HTML modern"
- `<head>` — bagian yang **tidak tampil** di halaman (judul tab, koneksi ke file CSS, dll)
- `<body>` — bagian yang **tampil** di halaman

### 1.2 Tag yang paling sering dipakai

| Tag | Fungsi | Contoh |
|---|---|---|
| `<h1>` s/d `<h6>` | Judul, h1 paling besar | `<h1>Yayasan Al-Hikmah</h1>` |
| `<p>` | Paragraf teks | `<p>Kami berdiri sejak 1998.</p>` |
| `<a>` | Link | `<a href="/kontak">Hubungi kami</a>` |
| `<img>` | Gambar | `<img src="logo.png" alt="Logo yayasan">` |
| `<ul>` / `<li>` | Daftar | lihat contoh di bawah |
| `<div>` | Kotak pembungkus netral | untuk mengelompokkan elemen |

Contoh daftar:
```html
<ul>
  <li>Pendidikan Diniyah</li>
  <li>Tahfidz Al-Quran</li>
  <li>Sekolah Formal</li>
</ul>
```

**Kenapa `alt` di `<img>` penting?** Itu teks pengganti kalau gambar gagal dimuat, dan dibacakan oleh screen reader untuk pengguna tunanetra. Kebiasaan baik dari awal.

### 1.3 Tag semantik (biar strukturnya rapi)

Alih-alih semua pakai `<div>`, HTML modern punya tag yang menjelaskan perannya:

```html
<header>
  <nav>...menu navigasi di sini...</nav>
</header>

<main>
  <section>...konten utama...</section>
</main>

<footer>
  <p>&copy; 2026 Yayasan Al-Hikmah</p>
</footer>
```

Ini persis struktur yang nanti dipakai di semua halaman website pesantren kamu: header (dengan menu), main (konten yang berubah-ubah tiap halaman), footer (tetap sama di semua halaman).

### 1.4 Form (penting — nanti dipakai di panel admin)

```html
<form>
  <label for="judul">Judul halaman</label>
  <input type="text" id="judul" name="judul">

  <label for="isi">Isi</label>
  <textarea id="isi" name="isi"></textarea>

  <button type="submit">Simpan</button>
</form>
```

Belum akan berfungsi (belum ada tempat mengirim datanya), tapi bentuknya sudah sama persis seperti form admin nanti.

### ✅ Mini-project Bagian 1

Buat file `tentang.html` berisi halaman "Tentang Yayasan" dengan:
- Header berisi nama yayasan
- Nav dengan 3 link (boleh belum aktif): Beranda, Tentang, Kontak
- Main berisi 2 paragraf sejarah singkat + 1 daftar kegiatan
- Footer berisi teks copyright

---

## Bagian 2: CSS — Mendekorasi Halaman (± 3-4 hari)

Lanjutan analogi rumah tadi: CSS itu cat, lantai, dan susunan perabotnya.

### 2.1 Menyambungkan CSS ke HTML

Ada beberapa cara, tapi **pakai file terpisah** — paling rapi dan gampang dirawat:

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

Lalu buat file `style.css` di folder yang sama.

### 2.2 Selector dasar

```css
/* semua elemen <p> */
p {
  color: #333;
}

/* elemen dengan class="highlight" */
.highlight {
  background-color: yellow;
}

/* elemen dengan id="judul-utama" (harusnya cuma satu di halaman) */
#judul-utama {
  font-size: 32px;
}
```

Aturan sederhananya: **class** untuk gaya yang dipakai berkali-kali, **id** untuk elemen yang unik satu-satunya di halaman.

### 2.3 Box model (konsep paling penting di CSS)

Bayangkan tiap elemen HTML itu kotak kado:
- **content** = isi kadonya
- **padding** = bantalan di dalam kotak
- **border** = kotak kadonya sendiri
- **margin** = jarak ke kado lain di sebelahnya

```css
.card {
  padding: 16px;        /* jarak isi ke tepi kotak */
  border: 1px solid #ccc;
  margin: 12px;         /* jarak ke elemen lain */
}
```

### 2.4 Flexbox (buat bikin layout navbar dan sejenisnya)

Ini yang bikin elemen bisa disusun horizontal, rata tengah, dengan jarak rata — tanpa perhitungan pixel manual.

```css
nav ul {
  display: flex;
  gap: 20px;
  list-style: none;
  justify-content: flex-end; /* rata kanan */
}
```

Cukup paham `display: flex` + `gap` + `justify-content` dulu — itu sudah menutupi sebagian besar kebutuhan layout navbar dan susunan card nanti.

### ✅ Mini-project Bagian 2

Styling halaman `tentang.html` dari Bagian 1:
- Navbar horizontal pakai flexbox, warna background beda dari body
- Font, warna teks, dan padding yang rapi dan enak dibaca
- Bungkus tiap paragraf sejarah dengan card sederhana (border + padding)

---

## Bagian 3: JavaScript — Membuat Halaman "Hidup" (± 5-7 hari)

Kalau HTML itu kerangka dan CSS itu dekorasi, JavaScript itu yang bikin ada listriknya — tombol bisa diklik, sesuatu bisa berubah tanpa reload halaman.

### 3.1 Variabel & tipe data

```js
const namaYayasan = "Al-Hikmah";   // teks, tidak berubah
let jumlahSantri = 250;            // angka, boleh berubah

const kegiatan = ["Tahfidz", "Diniyah", "Kajian Kitab"]; // array (daftar)

const yayasan = {                  // object (data berpasangan)
  nama: "Al-Hikmah",
  tahunBerdiri: 1998
};
```

Pakai `const` kalau nilainya tidak akan diubah lagi, `let` kalau nanti akan berubah. Hindari `var` (peninggalan lama, sering bikin bingung).

### 3.2 Fungsi

```js
function sapa(nama) {
  return "Assalamu'alaikum, " + nama;
}

console.log(sapa("Pak Ahmad")); // Assalamu'alaikum, Pak Ahmad
```

Bentuk yang lebih ringkas (arrow function), sering dipakai di kode yang lebih modern:

```js
const sapa = (nama) => "Assalamu'alaikum, " + nama;
```

### 3.3 Percabangan & pengulangan

```js
if (jumlahSantri > 200) {
  console.log("Yayasan besar");
} else {
  console.log("Yayasan sedang berkembang");
}

for (let i = 0; i < kegiatan.length; i++) {
  console.log(kegiatan[i]);
}
```

### 3.4 DOM — menyentuh elemen HTML dari JavaScript

DOM itu cara JavaScript "melihat" HTML sebagai struktur yang bisa diubah-ubah dari kode.

```html
<button id="tombolSapa">Klik saya</button>
<p id="hasil"></p>

<script>
  const tombol = document.querySelector("#tombolSapa");
  const hasil = document.querySelector("#hasil");

  tombol.addEventListener("click", () => {
    hasil.textContent = "Halaman ini hidup!";
  });
</script>
```

`querySelector` = cari elemen (pakai pola selector yang sama seperti CSS: `#id`, `.class`, atau nama tag).
`addEventListener` = "kalau ini terjadi, jalankan fungsi ini".

### 3.5 Pengantar async & fetch

Kadang JavaScript perlu **menunggu** — seperti pesan makanan di restoran: kamu tidak berdiri diam di depan dapur, tapi menunggu sambil santai, dan makanan datang saat sudah siap.

```js
async function ambilData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

ambilData();
```

`fetch` = ambil data dari alamat tertentu di internet. `await` = "tunggu baris ini selesai dulu, baru lanjut ke baris berikutnya". Ini konsep yang nanti dipakai terus-menerus saat panel admin "bicara" dengan server.

Jangan khawatir kalau bagian ini belum 100% klik di kepala — cukup paham garis besarnya dulu. Nanti akan makin jelas begitu dipakai berulang-ulang di project sungguhan.

### ✅ Mini-project Bagian 3

Buat halaman kecil "Papan Pengumuman":
- Input teks + tombol "Tambah"
- Saat tombol diklik, teks dari input ditambahkan sebagai item baru ke sebuah `<ul>` di halaman — tanpa reload
- (Opsional) coba `fetch` ke `jsonplaceholder.typicode.com` sekadar melihat data dari internet muncul di console

---

## Bagian 4: Node.js — JavaScript di Luar Browser (± 3-4 hari)

Sampai sini, JavaScript kamu cuma jalan di dalam browser. Node.js membuat JavaScript bisa jalan langsung di komputer atau server — inilah yang jadi backend website kamu nanti.

### 4.1 Instalasi

Download di **nodejs.org**, pilih versi **LTS** (Long Term Support — versi paling stabil, bukan yang paling baru rilis). Setelah install, cek lewat terminal:

```bash
node -v
npm -v
```

Kalau muncul nomor versi, artinya berhasil.

### 4.2 Menjalankan file JavaScript

Buat file `coba.js`:
```js
console.log("Halo dari Node.js");
```

Jalankan lewat terminal:
```bash
node coba.js
```

Sesederhana itu — tidak perlu buka browser sama sekali.

### 4.3 npm & package.json

`npm` (Node Package Manager) itu semacam "toko" untuk kode yang sudah dibuat orang lain, supaya kamu tidak perlu menulis semuanya dari nol.

```bash
npm init -y
```

Perintah ini membuat file `package.json` — semacam kartu identitas project kamu: nama, daftar package yang dipakai, dan seterusnya. Tiap kali kamu install package baru, otomatis dicatat di sini.

### 4.4 Konsep server: request → response

Sebelum masuk Express, penting paham dulu apa itu server pakai cara paling murni dari Node:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Halo, ini website pesantren saya");
});

server.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});
```

Analoginya seperti pelayan restoran: `req` (request) itu pesanan yang datang dari pelanggan (browser), `res` (response) itu makanan yang dikirim balik. `server.listen(3000)` artinya "pelayan ini berjaga di meja nomor 3000, siap menerima pesanan".

Jalankan dengan `node namafile.js`, lalu buka `http://localhost:3000` di browser.

### ✅ Mini-project Bagian 4

Modifikasi server di atas supaya:
- Kalau alamat yang diakses `/` → tampilkan "Selamat datang di Yayasan Al-Hikmah"
- Kalau alamat `/tentang` → tampilkan "Kami berdiri sejak 1998"
- Selain itu → tampilkan "Halaman tidak ditemukan"

(Petunjuk: cek nilai `req.url` di dalam function tadi pakai if/else)

---

## Bagian 5: Express.js — Routing Sederhana (± 4-5 hari)

Kode `http.createServer` di atas, kalau halamannya makin banyak, akan makin berantakan dengan tumpukan if/else. Express hadir supaya jauh lebih rapi — seperti pindah dari masak manual di atas api ke pakai rice cooker: hasilnya sama, prosesnya jauh lebih praktis.

### 5.1 Instalasi & server pertama

```bash
npm install express
```

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Selamat datang di Yayasan Al-Hikmah");
});

app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});
```

Bandingkan dengan versi `http` murni tadi — jauh lebih pendek untuk hasil yang sama.

### 5.2 Routing untuk beberapa halaman

```js
app.get("/", (req, res) => {
  res.send("Beranda");
});

app.get("/tentang", (req, res) => {
  res.send("Tentang Yayasan");
});

app.get("/kontak", (req, res) => {
  res.send("Hubungi kami di 0812-xxxx-xxxx");
});
```

Ingat diagram arsitektur sebelumnya: baris-baris `app.get(...)` inilah isi dari kotak "Server Express.js" yang menangani permintaan dari pengunjung.

### 5.3 Route dinamis (nanti dipakai untuk blog)

```js
app.get("/blog/:slug", (req, res) => {
  const slugArtikel = req.params.slug;
  res.send("Menampilkan artikel: " + slugArtikel);
});
```

Kalau pengunjung buka `/blog/kegiatan-ramadhan`, maka `req.params.slug` isinya `"kegiatan-ramadhan"`. Inilah cara nanti satu route bisa menampilkan ratusan artikel blog berbeda tanpa menulis route satu per satu.

### 5.4 Menyajikan file statis (CSS, gambar)

```js
app.use(express.static("public"));
```

Baris ini bilang ke Express: "semua file di folder `public` boleh diakses langsung dari browser". Jadi `style.css` yang kamu buat di Bagian 2 nanti ditaruh di folder `public/`, lalu dari HTML tinggal panggil `<link rel="stylesheet" href="/style.css">`.

### 5.5 Middleware (pengantar singkat)

Middleware itu semacam pos pemeriksaan yang dilewati request sebelum sampai ke tujuan akhir.

```js
app.use((req, res, next) => {
  console.log(`Ada request masuk: ${req.method} ${req.url}`);
  next(); // lanjut ke pos berikutnya / tujuan akhir
});
```

`express.static` yang tadi sebenarnya juga middleware. Kamu belum perlu bikin middleware sendiri yang rumit sekarang — cukup paham konsepnya dulu, karena nanti dipakai untuk hal seperti mengecek apakah admin sudah login.

### ✅ Mini-project Bagian 5 (sekaligus penutup fase Fondasi)

Bikin satu server Express dengan:
- 3 route: `/`, `/tentang`, `/kontak`, masing-masing `res.send` teks berbeda
- 1 route dinamis: `/blog/:slug` yang menampilkan isi `req.params.slug`
- Folder `public/` berisi 1 file CSS, disajikan lewat `express.static`
- Middleware sederhana yang mencatat tiap request masuk ke terminal

Kalau bagian ini sudah jalan, kamu sudah resmi siap lanjut ke fase berikutnya: menyambungkan ke database sungguhan dan bikin halaman render pakai EJS.

---

## Checklist: sudah paham yang mana saja?

Sebelum lanjut ke fase database, coba jujur cek ke diri sendiri:

- [ ] Bisa bikin halaman HTML dengan header, nav, main, footer
- [ ] Bisa styling pakai CSS termasuk flexbox untuk navbar
- [ ] Paham variabel, fungsi, if/else, dan bisa manipulasi DOM (klik tombol → sesuatu berubah)
- [ ] Paham garis besar async/await + fetch (tidak perlu ahli, cukup ngerti alurnya)
- [ ] Bisa jalankan file JS lewat Node, dan paham fungsi package.json
- [ ] Bisa bikin server Express dengan beberapa route, termasuk route dinamis

Kalau ada yang masih ragu, tidak masalah — ulangi bagian itu dulu. Ini fondasi yang akan dipakai terus-menerus di fase-fase berikutnya, jadi lebih baik pelan tapi mengerti daripada cepat tapi bingung terus di belakang.

## Sumber belajar tambahan (kalau butuh referensi lain)

- **MDN Web Docs** (developer.mozilla.org) — referensi paling lengkap untuk HTML, CSS, JavaScript
- **Dokumentasi resmi Node.js** (nodejs.org/docs)
- **Dokumentasi resmi Express** (expressjs.com)

---

*Setelah checklist di atas sudah terasa mantap, kabari saya — kita lanjut ke fase berikutnya: setup database dengan Prisma + PostgreSQL dan mulai bikin CRUD sungguhan untuk halaman dan blog.*
