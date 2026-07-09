# Menguasai HTML dalam Sekejap 🌐

## Pendahuluan

HTML adalah bahasa paling dasar yang wajib dikuasai siapa pun yang mau terjun ke dunia web development. Kabar baiknya, HTML itu gampang dipelajari — nggak ada logika rumit, cuma soal paham tag dan strukturnya. Artikel ini bakal ajak kamu paham HTML dari nol, langsung ke intinya, biar kamu bisa langsung praktik bikin halaman web sendiri.

## Apa Itu HTML?

**HTML (HyperText Markup Language)** bukan bahasa pemrograman, tapi bahasa *markup* — tugasnya menata struktur dan isi halaman web.

Analogi sederhana buat sebuah rumah:
- **HTML** = kerangka/tulang rumah (struktur: judul, paragraf, gambar, tombol)
- **CSS** = cat dan dekorasi (tampilan: warna, layout, jarak)
- **JavaScript** = listrik dan mekanisme (interaksi: tombol diklik, animasi, dst)

Artikel ini fokus ke bagian kerangkanya dulu: HTML.

## Kenapa Perlu Belajar HTML?

- Fondasi dari semua website yang pernah kamu buka.
- Gampang dipelajari, cocok untuk pemula total.
- Modal wajib sebelum lanjut ke CSS dan JavaScript.
- Bisa langsung dicoba tanpa install software apa pun.

## Struktur Dasar Sebuah Halaman HTML

Setiap file HTML biasanya diawali dengan kerangka seperti ini:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Judul Halaman</title>
</head>
<body>
  <h1>Halo, Dunia!</h1>
</body>
</html>
```

Penjelasan tiap bagian:
- `<!DOCTYPE html>` — kasih tahu browser kalau ini dokumen HTML5
- `<html>` — elemen pembungkus seluruh halaman
- `<head>` — informasi "belakang layar" (judul tab, meta data, dll), tidak tampil di halaman
- `<body>` — isi yang benar-benar terlihat di halaman

## Tag-Tag Dasar yang Paling Sering Dipakai

| Tag | Fungsi | Contoh |
|---|---|---|
| `<h1>` – `<h6>` | Judul/heading (h1 paling besar, h6 terkecil) | `<h1>Judul Utama</h1>` |
| `<p>` | Paragraf teks | `<p>Ini sebuah paragraf.</p>` |
| `<a>` | Link/tautan | `<a href="https://github.com">Klik di sini</a>` |
| `<img>` | Menampilkan gambar | `<img src="foto.jpg" alt="Deskripsi">` |
| `<div>` | Kontainer/wadah generik | `<div>Isi konten</div>` |
| `<span>` | Kontainer kecil untuk teks inline | `<span>teks</span>` |
| `<ul>` / `<li>` | List tanpa urutan (bullet) | `<ul><li>Item</li></ul>` |
| `<ol>` / `<li>` | List berurutan (angka) | `<ol><li>Item</li></ol>` |
| `<button>` | Tombol | `<button>Klik Saya</button>` |

## Atribut dalam HTML

Atribut memberi informasi tambahan pada sebuah tag, ditulis di dalam tag pembuka.

```html
<a href="https://github.com" target="_blank">Kunjungi GitHub</a>
```

- `href` menentukan tujuan link
- `target="_blank"` membuka link di tab baru

Atribut lain yang sering dipakai: `id`, `class`, `src`, `alt`, `style`.

## Membuat List

```html
<ul>
  <li>Belajar HTML</li>
  <li>Belajar CSS</li>
  <li>Belajar JavaScript</li>
</ul>
```

## Membuat Form Sederhana

```html
<form>
  <label for="nama">Nama:</label>
  <input type="text" id="nama" name="nama">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Kirim</button>
</form>
```

## Semantic HTML (Biar Kode Kamu Lebih Rapi)

Selain `<div>` yang generik, HTML5 punya tag *semantic* yang lebih deskriptif:

| Tag | Fungsi |
|---|---|
| `<header>` | Bagian atas halaman (biasanya logo, navigasi) |
| `<nav>` | Menu navigasi |
| `<main>` | Konten utama halaman |
| `<section>` | Blok konten tertentu |
| `<article>` | Konten mandiri, misalnya artikel blog |
| `<footer>` | Bagian bawah halaman |

Kenapa penting? Kode jadi lebih gampang dibaca developer lain, dan lebih ramah untuk SEO serta aksesibilitas.

## Cara Mencoba HTML Kamu Sendiri

Nggak perlu install apa pun buat mulai:

1. Buka text editor (Notepad, VS Code, dll)
2. Tulis kode HTML
3. Simpan dengan ekstensi `.html`, misalnya `index.html`
4. Buka file itu di browser (klik dua kali filenya)

## Contoh Halaman Sederhana yang Lengkap

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Halaman Pertamaku</title>
</head>
<body>
  <header>
    <h1>Selamat Datang!</h1>
  </header>

  <main>
    <p>Ini adalah halaman HTML pertama saya.</p>
    <ul>
      <li>Poin pertama</li>
      <li>Poin kedua</li>
    </ul>
  </main>

  <footer>
    <p>&copy; 2026 Belajar HTML</p>
  </footer>
</body>
</html>
```

Coba salin kode ini, simpan sebagai `.html`, lalu buka di browser buat lihat hasilnya.

## Tips Biar Cepat Jago

- Praktik langsung, jangan cuma baca teori.
- Gunakan Chrome DevTools (klik kanan pada halaman web → Inspect) buat lihat struktur HTML website lain.
- Hafalkan tag-tag umum dulu, sisanya bisa dicari pas butuh.
- Selalu isi atribut `alt` pada gambar — penting untuk aksesibilitas.
- Setelah HTML terasa lancar, lanjutkan ke CSS untuk mempercantik tampilan.

## Penutup

HTML adalah gerbang pertama buat siapa pun yang mau jadi web developer. Begitu kamu paham struktur dasar dan tag-tag umum di atas, kamu sudah bisa mulai membangun halaman web sederhana sendiri. Nggak perlu buru-buru — coba, ubah-ubah kode, lihat hasilnya di browser, dan ulangi. Selamat belajar! 🎉
