# Menguasai CSS dalam Sekejap 🎨

## Pendahuluan

Kalau HTML itu kerangka halaman web, **CSS** adalah yang bikin halaman itu enak dilihat. Tanpa CSS, semua website bakal terlihat seperti dokumen teks polos hitam-putih. Artikel ini bakal ajak kamu paham CSS dari nol, langsung ke intinya, biar kamu bisa langsung praktik mempercantik halaman web sendiri.

## Apa Itu CSS?

**CSS (Cascading Style Sheets)** adalah bahasa yang mengatur tampilan visual halaman HTML — warna, ukuran, jarak, font, sampai layout keseluruhan.

Kalau HTML menjawab pertanyaan "apa isinya?", CSS menjawab pertanyaan "seperti apa tampilannya?".

## Kenapa Perlu Belajar CSS?

- Fondasi tampilan setiap website modern.
- Skill wajib setelah HTML, dua-duanya sepaket.
- Bikin halaman kamu terlihat profesional, bukan cuma teks polos.
- Modal dasar sebelum lanjut ke framework CSS seperti Tailwind atau Bootstrap.

## Cara Menghubungkan CSS ke HTML

Ada tiga cara menulis CSS:

### 1. Inline (langsung di tag HTML)

```html
<p style="color: blue;">Teks ini berwarna biru</p>
```

### 2. Internal (di dalam tag `<style>` pada file HTML)

```html
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
```

### 3. External (file terpisah — cara paling direkomendasikan)

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

```css
/* style.css */
p {
  color: blue;
}
```

Cara external paling disarankan karena HTML dan CSS terpisah rapi, dan style-nya bisa dipakai ulang di banyak halaman sekaligus.

## Sintaks Dasar CSS

```css
selector {
  property: value;
}
```

Contoh:

```css
h1 {
  color: red;
  font-size: 32px;
}
```

- `h1` → *selector*, elemen yang mau distyle
- `color`, `font-size` → *property*, aspek yang mau diubah
- `red`, `32px` → *value*, nilai dari property tersebut

## Selector-Selector Dasar

| Selector | Contoh | Fungsi |
|---|---|---|
| Element | `p { }` | Pilih semua tag `<p>` |
| Class | `.judul { }` | Pilih elemen dengan `class="judul"` |
| ID | `#header { }` | Pilih elemen dengan `id="header"` |
| Universal | `* { }` | Pilih semua elemen |
| Descendant | `div p { }` | Pilih `<p>` yang ada di dalam `<div>` |

Contoh pemakaian class dan id di HTML:

```html
<h1 id="judul-utama">Judul</h1>
<p class="teks-biasa">Paragraf</p>
```

## Properti CSS yang Paling Sering Dipakai

| Properti | Fungsi | Contoh |
|---|---|---|
| `color` | Warna teks | `color: #333;` |
| `background-color` | Warna latar belakang | `background-color: white;` |
| `font-size` | Ukuran teks | `font-size: 16px;` |
| `font-weight` | Ketebalan teks | `font-weight: bold;` |
| `margin` | Jarak di luar elemen | `margin: 10px;` |
| `padding` | Jarak di dalam elemen | `padding: 10px;` |
| `border` | Garis pembatas | `border: 1px solid black;` |
| `width` / `height` | Ukuran elemen | `width: 100px;` |
| `text-align` | Perataan teks | `text-align: center;` |

## Memahami Box Model

Setiap elemen HTML sebenarnya berbentuk "kotak" yang terdiri dari 4 lapisan:

- **Content** — isi asli (teks, gambar)
- **Padding** — jarak antara isi dan border
- **Border** — garis pembatas kotak
- **Margin** — jarak antara kotak ini dengan elemen lain di luarnya

Analoginya seperti bingkai foto: fotonya = *content*, kertas putih di sekitar foto = *padding*, bingkai kayunya = *border*, dan jarak bingkai ke dinding = *margin*.

## Layout Dasar dengan Flexbox

Salah satu cara paling gampang mengatur layout modern adalah `display: flex`.

```css
.container {
  display: flex;
  justify-content: center; /* rata tengah horizontal */
  align-items: center;     /* rata tengah vertikal */
  gap: 10px;               /* jarak antar elemen */
}
```

Dengan flex, elemen-elemen di dalam container otomatis tersusun rapi berdampingan tanpa perlu hitung-hitungan posisi secara manual.

## Contoh Lengkap

**HTML** (`index.html`):

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Belajar CSS</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <h1>Halo, Dunia!</h1>
    <p>Ini contoh halaman dengan sedikit CSS.</p>
  </div>
</body>
</html>
```

**CSS** (`style.css`):

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
}
```

Simpan kedua file ini di folder yang sama, lalu buka `index.html` di browser buat lihat hasilnya.

## Tips Biar Cepat Jago

- Praktik langsung dengan ubah-ubah nilai properti, lihat perubahannya secara real-time.
- Gunakan Chrome DevTools (klik kanan → Inspect) buat eksperimen CSS tanpa perlu edit file.
- Fokus paham *box model* dulu — ini konsep yang paling sering bikin bingung pemula.
- Setelah lancar CSS dasar, lanjutkan belajar Flexbox dan Grid buat layout yang lebih kompleks.
- Jangan hafal semua properti sekaligus, cari saja pas butuh — lama-lama otomatis ingat.

## Penutup

CSS adalah kunci yang mengubah halaman HTML polos jadi tampilan web yang enak dilihat. Begitu kamu paham cara kerja selector, box model, dan properti-properti dasar di atas, kamu sudah punya modal cukup buat mulai mempercantik halaman web sendiri. Selanjutnya tinggal banyak-banyak coba dan eksperimen. Selamat belajar! 🎉
