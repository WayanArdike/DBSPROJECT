# SnapToSave_ML
## Project Overview

Penyakit daun merupakan salah satu ancaman utama dalam budidaya tomat, yang dapat menurunkan produktivitas dan meningkatkan ketergantungan petani pada pestisida. Deteksi dini penyakit daun secara manual sering kali tidak akurat dan memerlukan keahlian khusus.

Proyek ini mengembangkan SnapToSave, sebuah sistem deteksi penyakit daun tomat berbasis deep learning menggunakan arsitektur MobileNetV2. Sistem ini dirancang agar dapat berjalan pada platform web dan digunakan langsung melalui perangkat seluler, memungkinkan deteksi cepat dan praktis di lapangan.

Dengan pendekatan transfer learning, model dapat mencapai akurasi tinggi meskipun dilatih pada dataset terbatas. Solusi ini diharapkan dapat membantu petani mengenali penyakit secara mandiri dan mendorong praktik pertanian yang lebih efisien dan berkelanjutan.

Referensi:
- Ferentinos, K. P. (2018). Deep learning models for plant disease detection and diagnosis. *Computers and Electronics in Agriculture*, 145, 311–318.  
  [https://doi.org/10.1016/j.compag.2018.01.009](https://doi.org/10.1016/j.compag.2018.01.009)

---

## Business Understanding

### Problem Statements

1. Petani kesulitan mengenali jenis penyakit pada daun tomat secara akurat.  
   Deteksi visual penyakit daun secara manual memerlukan keahlian khusus dan seringkali menghasilkan diagnosis yang tidak konsisten. Hal ini menyulitkan petani dalam mengambil tindakan yang tepat dan cepat di lapangan.

2. Keterlambatan dalam identifikasi penyakit menyebabkan kerugian hasil panen.  
   Tanpa deteksi dini, penyakit dapat menyebar dengan cepat dan menurunkan produktivitas secara signifikan. Hal ini berdampak langsung pada pendapatan petani dan ketahanan pangan lokal.

3. Penggunaan pestisida berlebihan akibat diagnosis yang tidak tepat.  
   Ketika jenis penyakit tidak dikenali dengan benar, petani cenderung menggunakan pestisida secara berlebihan atau salah sasaran. Ini tidak hanya meningkatkan biaya produksi, tetapi juga membahayakan lingkungan dan kesehatan manusia.

4. Kurangnya akses petani terhadap solusi teknologi yang terjangkau dan praktis.  
   Sebagian besar petani tidak memiliki akses ke alat diagnosis mahal atau tenaga ahli. Oleh karena itu, dibutuhkan sistem berbasis teknologi yang ringan, akurat, dan mudah diakses melalui perangkat sehari-hari seperti smartphone.

### Goals

1. Membangun sistem deteksi penyakit daun tomat berbasis deep learning.  
   Sistem ini bertujuan untuk mengidentifikasi jenis penyakit pada daun tomat secara otomatis hanya melalui gambar. Dengan memanfaatkan model pretrained (transfer learning), sistem dapat mencapai akurasi tinggi meski dengan data pelatihan terbatas.

2. Menyediakan alat bantu diagnosis yang cepat, praktis, dan dapat diakses oleh petani.  
   Sistem akan diimplementasikan dalam bentuk aplikasi web yang responsif dan ringan, sehingga dapat digunakan langsung melalui smartphone tanpa perlu instalasi atau perangkat khusus.

3. Mengurangi ketergantungan petani terhadap penggunaan pestisida secara berlebihan.  
   Dengan deteksi penyakit yang lebih tepat, petani dapat mengambil tindakan yang lebih sesuai dan efisien, mengurangi dampak negatif terhadap lingkungan dan biaya produksi.


### Solution Statements

Pendekatan Deep Learning berbasis Transfer Learning  
Sistem menggunakan pendekatan image classification dengan arsitektur MobileNetV2 yang ringan dan efisien. Model dilatih pada dataset gambar daun tomat yang telah diklasifikasikan ke dalam beberapa jenis kelas penyakit dan kelas sehat.

- MobileNetV2 dipilih karena performanya yang optimal untuk perangkat dengan keterbatasan komputasi, seperti smartphone.
- Proses augmentasi dan normalisasi citra dilakukan untuk meningkatkan generalisasi model.
- Dataset dibagi ke dalam subset pelatihan, validasi, dan pengujian untuk memastikan evaluasi model yang akurat dan konsisten.

Solusi ini memungkinkan diagnosis visual penyakit daun tomat secara cepat dan akurat di lapangan tanpa memerlukan tenaga ahli.

---

## Data Understanding

### Sumber Data

Dataset yang digunakan dalam proyek ini berasal dari [Kaggle - Tomato Leaf Disease Dataset](https://www.kaggle.com/datasets/ashishmotwani/tomato), yang terdiri dari ribuan gambar daun tomat yang telah diklasifikasikan ke dalam beberapa kategori penyakit dan satu kelas sehat.

Dataset ini dipilih karena:
- Menyediakan data gambar berlabel secara jelas
- Representatif terhadap berbagai jenis penyakit utama yang umum menyerang tanaman tomat
- Format standar dan siap digunakan untuk pelatihan model klasifikasi gambar


### Struktur Dataset

Setelah diekstraksi, dataset dibagi menjadi dua direktori utama:

```
dataset/
├── train/
├── valid/
```


Masing-masing direktori berisi subfolder sesuai nama kelas penyakit:

- **Bacterial Spot**  
- **Early Blight**  
- **Late Blight**  
- **Leaf Mold**  
- **Septoria Leaf Spot**  
- **Spider Mites**  
- **Target Spot**  
- **Tomato Mosaic Virus**  
- **Tomato Yellow Leaf Curl Virus**  
- **Powdery Mildew**  
- **Healthy**


### Karakteristik Data

- Format gambar: `.jpg`
- Dimensi gambar bervariasi, disesuaikan menjadi ukuran tetap saat preprocessing
- Data telah dibagi sebelumnya ke dalam folder `train` dan `valid`, memungkinkan langsung digunakan dalam `ImageDataGenerator`

Distribusi jumlah gambar antar kelas cenderung tidak merata, sehingga diperlukan augmentasi pada tahap pelatihan untuk mengurangi potensi bias kelas.


### Ringkasan Jumlah Kelas

Total: **11 kelas**

- 10 kelas penyakit daun tomat
- 1 kelas daun tomat sehat (Healthy)

Klasifikasi multi-kelas ini akan digunakan sebagai dasar untuk membangun model deteksi otomatis menggunakan pendekatan deep learning.

---

## Data Preparation

Dataset gambar daun tomat yang terdiri dari berbagai jenis penyakit diunduh dari Kaggle dan diekstrak ke dalam direktori `dataset/`. Dataset ini memiliki struktur folder utama yang terbagi menjadi dua subfolder, yaitu `train` dan `valid`, yang masing-masing berisi gambar yang sudah diklasifikasikan berdasarkan kelas penyakit.

### Data Loading dan Distribusi Kelas

Dilakukan pengecekan jumlah gambar per kelas pada subset `train` dan `valid` untuk memastikan distribusi data antar kelas. Distribusi tersebut kemudian divisualisasikan menggunakan grafik batang guna mendeteksi adanya ketidakseimbangan jumlah data antar kelas yang dapat memengaruhi proses pelatihan model.

### Pembagian Dataset

Sebagian data dari folder `valid` dipindahkan ke folder `test` sebagai data uji. Proporsi data yang dipindahkan adalah 25%, dengan pemilihan data menggunakan metode acak yang dikontrol agar pembagian data tetap konsisten. Dengan demikian, dataset terbagi menjadi tiga subset utama: `train`, `valid`, dan `test`, yang digunakan untuk pelatihan, validasi, dan evaluasi model secara berurutan.

### Augmentasi dan Persiapan Data

Untuk meningkatkan kemampuan generalisasi model, dilakukan augmentasi pada subset `train` menggunakan teknik seperti rotasi, pergeseran, zoom, shear, dan flip horizontal. Subset `valid` dan `test` hanya dilakukan normalisasi agar tetap menjaga integritas data saat proses evaluasi. Data diatur menggunakan generator yang secara otomatis membaca gambar dari folder dan menyiapkannya dalam batch yang siap dipakai oleh model.

---

## Modelling

Pada tahap ini, dilakukan pembangunan model klasifikasi menggunakan arsitektur MobileNetV2 sebagai *feature extractor*. Model pra-latih ini diinisialisasi dengan bobot dari dataset ImageNet dan bagian lapisan atasnya dihapus agar dapat disesuaikan dengan tugas klasifikasi penyakit daun tomat.

### Arsitektur Model

- Output dari MobileNetV2 dihubungkan dengan lapisan GlobalAveragePooling2D untuk meratakan fitur yang dihasilkan.
- Ditambahkan dua lapisan Dropout dan Dense untuk mengurangi risiko overfitting dan meningkatkan kemampuan klasifikasi.
- Lapisan output menggunakan fungsi aktivasi softmax dengan jumlah neuron sesuai kelas penyakit yang ada, sehingga menghasilkan prediksi probabilitas kelas.

### Training Awal

Model dikompilasi menggunakan optimizer Adam dan fungsi loss categorical crossentropy. Pada fase awal, semua lapisan MobileNetV2 dibekukan agar hanya lapisan classifier yang dilatih terlebih dahulu. Proses pelatihan dibantu oleh beberapa callback seperti EarlyStopping, ReduceLROnPlateau, dan ModelCheckpoint untuk mengontrol proses belajar, mencegah overfitting, dan menyimpan model terbaik.

### Fine-tuning

Setelah training awal, dilakukan tahap fine-tuning dengan membuka sebagian besar lapisan MobileNetV2 (kecuali sekitar 30 lapisan awal yang tetap dibekukan). Model kemudian dilatih ulang dengan learning rate yang lebih kecil untuk menyempurnakan bobot pra-latih agar lebih sesuai dengan data penyakit daun tomat. Fine-tuning dilakukan dalam beberapa epoch terbatas untuk menghindari overfitting.

Pendekatan transfer learning ini memanfaatkan kekuatan model MobileNetV2 yang sudah dilatih pada dataset besar sekaligus memberikan kemampuan adaptasi khusus pada data daun tomat, sehingga menghasilkan model yang efektif dan akurat dalam mengklasifikasikan berbagai jenis penyakit.

---

## Evaluation

Setelah proses pelatihan dan fine-tuning selesai, evaluasi model dilakukan menggunakan data uji (test set) untuk mengukur performa klasifikasi secara menyeluruh.


### Training Performance Visualization

Riwayat akurasi dan loss dari seluruh tahap pelatihan (training awal dan dua tahap fine-tuning) digabung dan divisualisasikan. Grafik ini membantu dalam:

- Memantau tren performa model seiring epoch.
- Mengidentifikasi potensi overfitting atau underfitting.
- Menilai stabilitas selama pelatihan dan validasi.


### Confusion Matrix

Confusion matrix disusun berdasarkan hasil prediksi model terhadap data uji, dibandingkan dengan label aslinya. Visualisasi ini menggambarkan:

- Jumlah prediksi benar (nilai diagonal).
- Kesalahan klasifikasi antar kelas.
- Kelas yang sulit dibedakan atau sering tertukar.


### Classification Report

Berikut adalah ringkasan metrik evaluasi model:

| Class                              | Precision | Recall | F1-Score | Support |
|------------------------------------|-----------|--------|----------|---------|
| Bacterial_spot                     | 0.9448    | 0.8415 | 0.8902   | 183     |
| Early_blight                       | 0.9007    | 0.8447 | 0.8718   | 161     |
| Late_blight                        | 0.8627    | 0.8889 | 0.8756   | 198     |
| Leaf_Mold                          | 0.8650    | 0.9351 | 0.8987   | 185     |
| Septoria_leaf_spot                 | 0.8229    | 0.8449 | 0.8338   | 187     |
| Spider_mites (Two-spotted_spider) | 0.9767    | 0.7706 | 0.8615   | 109     |
| Target_Spot                        | 0.7603    | 0.9652 | 0.8506   | 115     |
| Tomato_Yellow_Leaf_Curl_Virus     | 0.9917    | 0.9600 | 0.9756   | 125     |
| Tomato_mosaic_virus                | 0.9507    | 0.9247 | 0.9375   | 146     |
| Healthy                            | 0.9340    | 0.9802 | 0.9565   | 202     |
| Powdery_mildew                     | 0.8772    | 0.7937 | 0.8333   | 63      |

**Accuracy:** 0.8931  
**Macro Avg:** Precision = 0.8988, Recall = 0.8863, F1-score = 0.8896  
**Weighted Avg:** Precision = 0.8980, Recall = 0.8931, F1-score = 0.8931

### Hasil Evaluasi Utama

- Akurasi validasi secara konsisten lebih tinggi daripada akurasi training, menandakan model mampu melakukan generalisasi dengan baik.
- Tidak terdapat indikasi overfitting yang mencolok, karena tren loss pada data validasi terus menurun hingga akhir pelatihan.
- Penurunan loss dan peningkatan akurasi yang signifikan terjadi setelah tahap fine-tuning, membuktikan kontribusi tahap tersebut dalam meningkatkan performa model.
- Model mencapai akurasi keseluruhan sekitar 89.31%, menunjukkan kinerja klasifikasi yang kuat pada dataset penyakit daun tomat.
- Kelas seperti Tomato_Yellow_Leaf_Curl_Virus, Tomato_mosaic_virus, dan Healthy menunjukkan skor F1 di atas 0.93, mencerminkan tingkat akurasi yang sangat tinggi.
- Performa yang lebih rendah terlihat pada kelas Spider_mites dan Powdery_mildew, dengan recall masing-masing sekitar 77% dan 79%, menandakan adanya tantangan dalam membedakan gejala visual dari kelas-kelas ini.
- Confusion matrix mengindikasikan bahwa beberapa kesalahan terjadi antar kelas dengan gejala yang serupa, misalnya antara Bacterial_spot, Early_blight, dan Septoria_leaf_spot.
- Nilai macro dan weighted average dari precision, recall, dan F1-score berada di atas 88%, menandakan performa model yang stabil dan konsisten di seluruh kelas.

---

## Inference

Pada tahap ini, model klasifikasi yang telah dilatih dan disimpan dalam file `best_model.h5` digunakan untuk memprediksi jenis penyakit pada daun tomat dari gambar baru yang diunggah oleh pengguna. Proses inference melibatkan beberapa langkah penting:

### 1. Pemanggilan Model
Model terbaik dari proses pelatihan dimuat kembali untuk digunakan pada data baru. Model ini telah melalui proses training dan fine-tuning sehingga siap untuk melakukan prediksi dengan akurasi yang optimal.

### 2. Persiapan Gambar
Setiap gambar yang diunggah oleh pengguna akan diproses terlebih dahulu, yaitu:
- Diubah ukurannya ke dimensi input model (224x224 piksel)
- Dikonversi menjadi array numerik dan dinormalisasi
- Disesuaikan bentuknya untuk memenuhi input layer model

### 3. Proses Prediksi
Gambar yang sudah diproses dimasukkan ke dalam model untuk mendapatkan prediksi. Hasil prediksi berupa:
- Nama kelas penyakit yang terdeteksi (misalnya Late Blight, Healthy, dll.)
- Nilai confidence atau tingkat kepercayaan model terhadap prediksi tersebut

### 4. Visualisasi Hasil
Gambar asli ditampilkan kembali dengan label hasil prediksi yang tercantum di atasnya, termasuk confidence score. Ini memberikan pengguna informasi yang intuitif dan langsung terlihat terhadap diagnosis penyakit tanaman mereka.

### 5. Penanganan Gambar Gagal
Jika ada gambar yang tidak bisa diproses, sistem memberikan informasi kesalahan (error handling) agar pengguna tahu bahwa gambar tersebut perlu diperiksa kembali.

---

## Cara Menggunakan Notebook

1. Buka [Google Colab](https://colab.research.google.com/) dan login dengan akun Google Anda  
2. Pilih File > New Notebook untuk membuat notebook baru  
3. Clone repositori ini atau unggah file notebook ke Colab  
4. Ikuti langkah-langkah pada notebook untuk:
   - Memuat dan memproses dataset  
   - Membangun dan melatih model klasifikasi citra  
   - Mengevaluasi performa model  
   - Memprediksi gambar baru

5. Model yang telah dilatih kemudian dapat diekspor dan diintegrasikan ke dalam website SnapToSave untuk digunakan oleh petani secara langsung melalui browser.

---

## Kesimpulan

Model klasifikasi citra berbasis MobileNetV2 yang dikembangkan dalam proyek ini berhasil mengenali berbagai jenis penyakit daun tomat dengan akurasi tinggi, mencapai performa keseluruhan sekitar 89%. Evaluasi menggunakan confusion matrix dan classification report menunjukkan bahwa sebagian besar kelas dapat dikenali dengan baik, terutama kelas-kelas dominan seperti *Tomato Yellow Leaf Curl Virus* dan *Healthy*. Sistem ini menunjukkan potensi besar untuk diterapkan dalam platform SnapToSave sebagai alat bantu diagnosis bagi petani secara cepat dan akurat melalui antarmuka berbasis web. Ke depan, model dapat ditingkatkan dengan menambahkan data dari lingkungan nyata dan memperluas kemampuan klasifikasi terhadap tanaman lain.



