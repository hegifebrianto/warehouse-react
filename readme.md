# 📦 Warehouse React

Warehouse React adalah aplikasi manajemen gudang berbasis web yang dibangun menggunakan **React.js**.
Aplikasi ini dirancang untuk mempermudah pemilik toko atau admin dalam mengelola inventaris, stok barang, transaksi keluar/masuk, dan laporan.

## 🚀 Fitur Utama

✅ Manajemen produk (CRUD)  
✅ Kategori produk  
✅ Supplier management  
✅ Transaksi stok in & out  
✅ Pelaporan stok  
✅ Pencarian & filter data  
✅ User authentication & authorization  
✅ Dashboard statistik

## 🛠️ Teknologi yang digunakan

- [React.js](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Redux / Zustand](optional)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/) / Bootstrap
- [Chart.js](https://www.chartjs.org/) (untuk visualisasi dashboard)
- [Jest](https://jestjs.io/) untuk testing (jika diimplementasikan)

## 💾 Instalasi

Clone repositori ini:

```bash
git clone https://github.com/username/warehouse-react.git
cd warehouse-react
```

Install dependencies:

```bash
npm install
# atau
yarn install
```

Jalankan aplikasi:

```bash
npm start
# atau
yarn start
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000).

## ⚙️ Konfigurasi Environment

Jika ada variabel environment, buat file `.env`:

```
REACT_APP_API_URL=https://api.warehouse.com
REACT_APP_OTHER_KEY=...
```

## 🧑‍💻 Struktur Folder

```
src/
  components/    # Komponen UI reusable
  pages/         # Halaman (route)
  services/      # API services (axios)
  store/         # Redux / Zustand store
  utils/         # Helpers dan utilitas
  assets/        # Gambar & icons
```

## 📝 Todo / Roadmap

- [ ] Role-based access control (admin, staff)
- [ ] Import/export data CSV
- [ ] Barcode / QR code scanning
- [ ] Dark mode
- [ ] PWA support

## 🙌 Kontribusi

Pull requests sangat terbuka.  
Buka issue jika menemukan bug atau ingin request fitur baru.

## 📄 Lisensi

[MIT License](LICENSE)
