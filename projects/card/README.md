# Project Latihan: Kartu Profil Interaktif

Satu project yang dipakai buat praktik **4 skill sekaligus**: Git & GitHub, HTML, CSS, dan JavaScript. Dikerjakan bertahap — tiap bagian nambahin sesuatu ke project yang sama, persis seperti alur kerja developer beneran.

## 📁 Isi Folder

```
kartu-profil/
├── index.html   → struktur halaman (Bagian 2: HTML)
├── style.css    → styling halaman (Bagian 3: CSS)
└── script.js    → interaktivitas (Bagian 4: JavaScript)
```

---

## 🧩 Bagian 1: Git & GitHub — Latihan Version Control

Pakai folder project ini buat praktik Git dari nol. Ikuti urutan ini persis, biar kebayang alur kerja commit-per-fitur seperti developer sungguhan.

**Langkah 1 — Inisialisasi repo**
```bash
cd kartu-profil
git init
```

**Langkah 2 — Commit pertama (HTML)**
```bash
git add index.html
git commit -m "Tambah struktur HTML kartu profil"
```

**Langkah 3 — Commit kedua (CSS)**
```bash
git add style.css
git commit -m "Tambah styling CSS"
```

**Langkah 4 — Commit ketiga (JavaScript)**
```bash
git add script.js
git commit -m "Tambah interaktivitas JavaScript"
```

**Langkah 5 — Push ke GitHub**
1. Buat repo baru di [github.com](https://github.com) (jangan centang "Initialize with README", biar nggak bentrok)
2. Hubungkan repo lokal ke GitHub, lalu push:
```bash
git remote add origin https://github.com/username/kartu-profil.git
git push -u origin main
```

**Latihan tambahan:**
- Buat branch baru: `git checkout -b eksperimen-warna`, ubah warna aksen di `style.css`, commit, lalu `git checkout main` dan `git merge eksperimen-warna`.
- Cek riwayat commit kamu dengan `git log`.
- Tambahkan file `.gitignore` (isi dengan `.DS_Store` misalnya) dan commit perubahannya.

---

## 🧱 Bagian 2: HTML — Struktur Kartu Profil

Buka `index.html`. Di dalamnya ada:
- Avatar bulat berisi inisial nama
- Nama & tagline
- Bio singkat
- Daftar skill (`<ul>`/`<li>`)
- Link sosial media
- Tombol *like* & tombol ganti tema (baru "hidup" setelah Bagian 4)

**Latihan tambahan:**
- Ganti "Nama Kamu", inisial di avatar, bio, dan daftar skill sesuai dirimu sendiri.
- Tambah satu section baru, misalnya "Pendidikan" atau "Proyek Favorit".
- Ganti link `href="#"` di bagian sosial media dengan link akun asli kamu.

---

## 🎨 Bagian 3: CSS — Mempercantik Tampilan

Buka `style.css`. Beberapa hal yang dipakai di sini:
- **Flexbox** untuk nge-center kartu di tengah layar dan menata skill tag berjajar rapi
- **Box model** (padding, border, border-radius, box-shadow) untuk bikin efek kartu yang "mengambang"
- Class `.dark` yang menyimpan seluruh gaya mode gelap, baru aktif setelah Bagian 4

**Latihan tambahan:**
- Ganti warna aksen `#5b4fe9` di beberapa tempat dengan warna favoritmu — cukup cari-ganti semua kemunculannya.
- Ubah `border-radius` pada `.card` jadi `0` dan bandingkan tampilannya.
- Tambahkan efek `:hover` baru, misalnya pada `.skill-tag`.

---

## ⚡ Bagian 4: JavaScript — Interaktivitas

Buka `script.js`. Ada dua fitur yang membuat tombol-tombol di HTML akhirnya berfungsi:
- **Toggle dark mode** — klik ikon 🌙 di pojok kartu untuk ganti ke mode gelap (dan sebaliknya)
- **Tombol like** — tiap diklik, angka di sebelahnya bertambah satu

Keduanya memakai `document.querySelector` untuk memilih elemen dan `addEventListener("click", ...)` untuk merespons klik — pola yang sama seperti di artikel JavaScript sebelumnya.

**Latihan tambahan:**
- Tambah tombol baru "Reset Like" yang mengembalikan `totalLike` ke `0`.
- Simpan status like ke dalam `localStorage` (opsional, untuk yang mau eksplor lebih jauh) supaya jumlahnya tidak hilang saat halaman di-refresh.

---

## ▶️ Cara Menjalankan

Simpan ketiga file (`index.html`, `style.css`, `script.js`) di folder yang sama persis seperti struktur di atas, lalu buka `index.html` langsung di browser (klik dua kali filenya).
