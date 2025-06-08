import { getProduk } from "./produkData.js";
import { getArtikel } from "./articleData.js";
import { getRekomendasi } from "./solusiPenanganan.js";
import { getPenjelasan } from "./penjelasan.js";
import { getLabels } from "./label.js";

import "../style.css";

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

function showPage(hash) {
  const sections = document.querySelectorAll(".page-section");
  sections.forEach((section) => section.classList.remove("active"));

  const target = document.querySelector(hash);
  if (target) {
    target.classList.add("active");
  } else {
    document.querySelector("#predict").classList.add("active");
  }
}

window.addEventListener("hashchange", () => {
  showPage(location.hash);
});

document.addEventListener("DOMContentLoaded", () => {
  showPage(location.hash || "#predict");

  const imageInput = document.getElementById("imageinput");
  const fileNameSpan = document.getElementById("file-name");
  const detectButton = document.getElementById("deteksi-button");
  const hasilKlasifikasi = document.querySelector(".hasil_klasifikasi");
  const produkContainer = document.querySelector(".rekomendasi_produk");
  const artikelContainer = document.querySelector(".rekomendasi_article");
  const opening = document.getElementById("opening");

  hasilKlasifikasi.style.display = "none";
  produkContainer.style.display = "none";
  artikelContainer.style.display = "none";
  opening.style.display = "flex";

  let selectedFile = null;

  imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    if (file) {
      selectedFile = file;
      fileNameSpan.textContent = file.name;
    } else {
      selectedFile = null;
      fileNameSpan.textContent = "Belum ada file";
    }
  });

  detectButton.addEventListener("click", async () => {
    if (!selectedFile) {
      alert("Silakan unggah foto terlebih dahulu.");
      return;
    }

    const formData = new FormData();
    formData.append("imagefile", selectedFile);

    try {
      const response = await fetch(
        "https://snaptosave-production.up.railway.app/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gagal (${response.status}): ${errorText}`);
      }

      const data = await response.json();
      const label = data.label;
      const probability = data.probability;

      tampilkanHasil(label, selectedFile, probability);
    } catch (error) {
      alert("Terjadi kesalahan saat memproses gambar.");
      console.error(error);
    }
  });

  function tampilkanHasil(label, file, probability) {
    const imgURL = URL.createObjectURL(file);
    const rekomendasi = getRekomendasi(label);
    const penjelasan = getPenjelasan(label);
    const Label = getLabels(label);
    const persentase = probability ? Math.round(probability) + "%" : "N/A";

    document.getElementById("hasil-img").src = imgURL;
    document.getElementById("hasil-label").textContent = Label;
    document.getElementById("hasil-persentase").textContent = persentase;
    document.getElementById("isi-penjelasan").textContent = penjelasan;
    document.getElementById("isi-rekomendasi").textContent = rekomendasi;

    // Produk
    produkContainer.innerHTML = `
      <div class="produk-section">
        <h2 class="produk-title">Rekomendasi Produk:</h2>
        <div class="produk-grid" id="produkGrid"></div>
      </div>
    `;
    const produkGrid = document.getElementById("produkGrid");
    const produkList = getProduk(label);
    produkList.slice(0, 3).forEach((produk) => {
      const div = document.createElement("div");
      div.className = "produk-card";
      div.innerHTML = `
        <img src="${produk.gambar}" alt="${produk.nama}" />
        <p><a href="${produk.link}" target="_blank">${produk.nama}</a></p>
        <p>${produk.harga}</p>
      `;
      produkGrid.appendChild(div);
    });

    // Artikel
    artikelContainer.innerHTML = `
      <div class="artikel-section">
        <h2 class="artikel-title">Rekomendasi Artikel:</h2>
        <div class="artikel-grid" id="artikelGrid"></div>
      </div>
    `;
    const artikelGrid = document.getElementById("artikelGrid");
    const artikelList = getArtikel(label);
    artikelList.slice(0, 3).forEach((artikel) => {
      const div = document.createElement("div");
      div.className = "artikel-card";
      div.innerHTML = `
        <img src="${artikel.gambar}" alt="${artikel.judul}" />
        <p><a href="${artikel.link}" target="_blank">${artikel.judul}</a></p>
      `;
      artikelGrid.appendChild(div);
    });

    hasilKlasifikasi.style.display = "block";
    produkContainer.style.display = "block";
    artikelContainer.style.display = "block";
    opening.style.display = "none";
  }
});
document.addEventListener('DOMContentLoaded', function () {
    window.hitung = function() {
        const luas = parseFloat(document.getElementById('luas').value);
        const jarak = parseFloat(document.getElementById('jarak').value);
        const harga = parseFloat(document.getElementById('harga').value);

        if (isNaN(luas) || isNaN(jarak) || isNaN(harga)) {
            alert("Mohon isi semua input dengan benar.");
            return;
        }

        const jarakArea = jarak * jarak;
        const jumlahTanaman = Math.floor(luas / jarakArea);

        const hasilPanen = jumlahTanaman;
        const keuntungan = hasilPanen * harga;
        const pupuk = jumlahTanaman * 0.1;
        const air = jumlahTanaman * 2;

        document.getElementById('hasilJarak').innerText = jarak;
        document.getElementById('hasilTanaman').innerText = jumlahTanaman;
        document.getElementById('hasilKg').innerText = hasilPanen;
        document.getElementById('hasilUntung').innerText = keuntungan.toLocaleString();
        document.getElementById('hasilPupuk').innerText = pupuk.toFixed(1);
        document.getElementById('hasilAir').innerText = air.toFixed(1);

        document.getElementById('hasil').style.display = 'block';
    };
});

