# Tomato Disease Classification API

API ini memungkinkan pengguna untuk mengirim gambar daun tomat dan mendapatkan prediksi jenis penyakit yang terdeteksi menggunakan model deep learning yang telah dilatih.


## 🚀 Cara Menjalankan API

### 1. **Persiapan Lingkungan**

Pastikan kamu telah menginstal dependensi berikut:

```bash
pip install flask flask-cors keras tensorflow numpy
```

### 2. **Struktur Folder**

Pastikan struktur direktori seperti berikut:

```
project-directory/
│
├── app.py
├── model/
│   └── best_model.h5
├── images/
└── README.md
```


## 🔌 Menjalankan Server

Jalankan perintah berikut untuk memulai API:

```bash
python app.py
```

API akan berjalan di:

```
http://0.0.0.0:8080/
```


## 📤 Endpoint

### `POST /`

Mengirim gambar untuk mendapatkan prediksi klasifikasi penyakit tomat.

#### Request:

* **Content-Type**: `multipart/form-data`
* **Body**:

  * `imagefile`: File gambar `.jpg`, `.png`, dll

Contoh penggunaan dengan `curl`:

```bash
curl -X POST http://localhost:8080/ \
  -F "imagefile=@/path/to/your/image.jpg"
```

#### Response:

```json
{
  "label": "Late_Blight",
  "probability": 97.34
}
```

## 🧐 Model

Model disimpan dalam file:

```
./model/best_model.h5
```

Model ini mengklasifikasikan gambar daun tomat ke dalam salah satu dari 11 kelas:

* Bacterial\_Spot
* Early\_Blight
* Late\_Blight
* Leaf\_Mold
* Septoria\_Leaf\_Spot
* Spider\_Mites
* Target\_Spot
* Tomato\_Yellow\_Leaf\_Curl\_Virus
* Tomato\_Mosaic\_Virus
* Healthy
* Powdery\_Mildew


## 📂 Folder `images/`

Folder ini digunakan untuk menyimpan sementara gambar yang diunggah sebelum diproses.


## 💠 Catatan Tambahan

* Pastikan folder `images/` sudah ada sebelum menjalankan server, atau tambahkan pengecekan otomatis pada kode untuk membuat folder jika belum ada.
* API ini tidak menyimpan gambar jangka panjang; kamu bisa menambahkan pembersihan otomatis jika diperlukan.


## ✨ Lisensi

Bebas digunakan untuk pengembangan dan edukasi.
