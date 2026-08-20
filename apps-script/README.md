# Pencarian Data PNS

Aplikasi Google Apps Script untuk pencarian data Pegawai Negeri Sipil (PNS) berdasarkan NIP atau NAMA.

## Fitur

- Pencarian berdasarkan **NIP** atau **NAMA** (partial match)
- Tampilan card untuk setiap hasil pencarian
- Responsif untuk mobile dan desktop

## Kolom Spreadsheet

| Kolom | Header | Keterangan |
|-------|--------|------------|
| A | NIP BARU | Nomor Induk Pegawai |
| B | NAMA | Nama lengkap PNS |
| C | OPD | Organisasi Perangkat Daerah |
| D | NAMA JABATAN | Nama jabatan |
| E | TMT PENSIUN | TMT Pensiun |
| F | TEMPAT ARSIP | Lokasi arsip |

## Setup

1. Buka Google Sheet yang berisi data PNS
2. Buka **Extensions > Apps Script**
3. Buat file `Code.g` isi dari file `Code.gs`
4. Klik **+** di samping **Files** > pilih **HTML** > beri nama `Index` (tanpa `.html`)
5. Paste isi file `Index.html`
6. **Deploy > New deployment > Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Salin URL yang diberikan

## Struktur File

```
apps-script/
├── Code.gs       # Server-side (doGet, searchPNS)
├── Index.html    # Frontend UI
└── README.md
```

## Screenshot

Buka URL web app, masukkan NIP atau Nama, lalu tekan **Cari**.
