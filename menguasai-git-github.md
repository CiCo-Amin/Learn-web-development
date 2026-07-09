# Menguasai Git \& GitHub dalam Sekejap 🚀

## Pendahuluan

Kalau kamu baru mulai belajar coding atau bakal kerja bareng tim developer, dua nama ini pasti sering kamu dengar: **Git** dan **GitHub**. Banyak pemula bingung membedakan keduanya, padahal konsepnya sebenarnya sederhana. Artikel ini bakal ajak kamu paham Git dan GitHub dari nol, langsung ke intinya, biar kamu bisa langsung praktik.

## Git vs GitHub, Apa Bedanya?

Ini pertanyaan paling sering muncul dari pemula.

* **Git** adalah *sistem kontrol versi* (version control system). Anggap Git sebagai "mesin waktu" untuk kode kamu — mencatat setiap perubahan, jadi kamu bisa balik ke versi sebelumnya kapan saja, tahu siapa mengubah apa, dan kerja bareng orang lain tanpa saling menimpa pekerjaan.
* **GitHub** adalah *platform hosting* untuk menyimpan proyek Git di internet. Ibaratnya seperti "Google Drive"-nya kode, tapi dengan fitur kolaborasi seperti pull request dan issue tracking.

Simpelnya: **Git itu alatnya, GitHub itu tempat online-nya.**

## Kenapa Perlu Belajar Ini?

* Hampir semua perusahaan tech pakai Git untuk mengelola kode.
* Progres kerja tersimpan rapi tanpa takut hilang.
* Kolaborasi tim jadi teratur, nggak perlu kirim-kirim file lewat chat.
* Profil GitHub kamu bisa jadi portofolio yang dilihat recruiter.

## Instalasi Git

1. Download di [git-scm.com](https://git-scm.com)
2. Install seperti biasa (next-next-finish)
3. Cek berhasil atau tidak lewat terminal:

```bash
git --version
```

Setelah terinstall, kenalkan diri kamu ke Git (cukup sekali):

```bash
git config --global user.name "Nama Kamu"
git config --global user.email "email@kamu.com"
```

## Istilah Dasar yang Wajib Dipahami

|Istilah|Artinya|
|-|-|
|**Repository (repo)**|Folder proyek yang dilacak Git|
|**Commit**|Snapshot/checkpoint dari sebuah perubahan|
|**Branch**|Cabang kode paralel untuk eksperimen tanpa ganggu versi utama|
|**Merge**|Menggabungkan satu branch ke branch lain|
|**Remote**|Repo versi online (misalnya di GitHub)|
|**Clone**|Menyalin repo dari GitHub ke komputer|
|**Push**|Mengirim perubahan dari komputer ke GitHub|
|**Pull**|Mengambil perubahan terbaru dari GitHub|

## Perintah Git yang Paling Sering Dipakai

Ini "senjata utama" yang bakal kamu pakai hampir setiap hari.

### 1\. Membuat repo baru

```bash
git init
```

Mengubah folder biasa jadi folder yang dilacak Git.

### 2\. Cek status perubahan

```bash
git status
```

Menampilkan file apa saja yang berubah, ditambah, atau dihapus.

### 3\. Menyimpan perubahan (staging + commit)

```bash
git add nama-file.txt   # tambah satu file tertentu
git add .               # tambah semua file yang berubah

git commit -m "Pesan singkat tentang perubahan ini"
```

Anggap `add` itu "memasukkan barang ke kardus", dan `commit` adalah "menyegel kardus dengan label".

### 4\. Lihat riwayat commit

```bash
git log
```

### 5\. Lihat detail perbedaan perubahan

```bash
git diff
```

## Bekerja dengan Branch

Branch penting biar kamu bisa bereksperimen tanpa merusak kode utama (biasanya disebut `main`).

```bash
git branch nama-fitur-baru      # buat branch baru
git checkout nama-fitur-baru    # pindah ke branch itu

# atau sekaligus dengan satu perintah:
git checkout -b nama-fitur-baru
```

Kalau fitur sudah selesai dan siap digabung ke branch utama:

```bash
git checkout main
git merge nama-fitur-baru
```

## Menghubungkan ke GitHub

### 1\. Buat akun \& repo di GitHub

Daftar di [github.com](https://github.com), lalu klik **New Repository**.

### 2\. Hubungkan repo lokal ke GitHub

```bash
git remote add origin https://github.com/username/nama-repo.git
```

### 3\. Kirim (push) kode ke GitHub

```bash
git push -u origin main
```

`-u` artinya koneksi ini "diingat", jadi lain kali cukup ketik `git push`.

### 4\. Menyalin repo yang sudah ada (clone)

```bash
git clone https://github.com/username/nama-repo.git
```

### 5\. Ambil update terbaru dari GitHub

```bash
git pull
```

## Alur Kerja Harian yang Bakal Kamu Ulang Terus

```bash
git pull                      # ambil update terbaru
# ...ngoding sesuatu...
git add .                     # simpan perubahan ke staging
git commit -m "Tambah fitur login"
git push                      # kirim ke GitHub
```

## Bonus: Pull Request (PR)

Kalau kerja tim, biasanya nggak langsung push ke `main`. Alurnya:

1. Buat branch baru untuk fitur/perbaikanmu
2. Push branch itu ke GitHub
3. Buka **Pull Request**, minta review dari tim
4. Setelah disetujui, PR di-*merge* ke `main`

Cara ini menjaga kode utama tetap aman dan terkontrol.

## Tips Biar Cepat Jago

* **Jangan takut salah** — Git dirancang supaya kamu bisa "undo" hampir semua hal.
* Commit sesering mungkin dengan pesan yang jelas, jangan numpuk banyak perubahan sekaligus.
* Biasakan `git status` sebelum commit, biar tahu apa yang bakal disimpan.
* Gunakan file `.gitignore` untuk mengecualikan file yang nggak perlu dilacak (misalnya `node\_modules/`).
* *Practice makes perfect* — bikin repo latihan sendiri, nggak perlu langsung proyek serius.

## Penutup

Git dan GitHub sebenarnya nggak sesulit yang dibayangkan. Begitu kamu paham konsep dasarnya — commit, branch, push, pull — dan terbiasa pakai perintah-perintah di atas, kamu sudah lebih siap dari kebanyakan pemula lain. Kuncinya cuma satu: **praktik langsung**. Buat repo, coba commit, push ke GitHub, dan rasakan sendiri gimana enaknya kerja pakai version control. Selamat belajar! 🎉

