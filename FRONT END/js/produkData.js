export function getProduk(label) {
  const produkList = {
    Late_blight: [
      {
        nama: "Bacillus subtilis Agen Hayati Organik",
        harga: "Rp 25.000",
        link: "https://s.shopee.co.id/4fk7cfaYrv",
        gambar: "https://down-id.img.susercontent.com/file/sg-11134201-22100-ghuxmjdtfliv39@resize_w450_nl.webp"
      },
      {
        nama: "Fungisida Organik Nopatek",
        harga: "Rp 50.000",
        link: "https://s.shopee.co.id/1qPwFVF3xL",
        gambar: "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lr4lthlqdw1pdd@resize_w450_nl.webp"
      },
      {
        nama: "Fungisida Antracol 250gr",
        harga: "Rp 68.300",
        link: "https://s.shopee.co.id/60FVDBcX1Xbp",
        gambar: "https://down-id.img.susercontent.com/file/sg-11134201-7rdx0-lyid7bhmdtt4b5@resize_w450_nl.webp"
      }
    ],
    Early_blight: [
      {
        nama: "Fungisida Organik.Bio Milt",
        harga: "Rp 53.100",
        link: "https://s.shopee.co.id/9pSDmc5Eova-azoksistrobin",
        gambar: "https://down-id.img.susercontent.com/file/1196d07ff42ca7085f45ff67654b0244@resize_w450_nl.webp"
      },
      {
        nama: "Fungisida Tagoling 75 % WP",
        harga: "Rp 50.000",
        link: "https://s.shopee.co.id/4q3XpRXDaO",
        gambar: "https://down-id.img.susercontent.com/file/f9ce763df25d319e36fb7ea49f05c021@resize_w450_nl.webp"
      },
      {
        nama: "Fungisida Anggrek.Organik",
        harga: " 65.000",
        link: "https://s.shopee.co.id/6fVC0pSrMD",
        gambar: "https://down-id.img.susercontent.com/file/60040ed9174ff2989f8653a9fb646cc7@resize_w450_nl.webp"
      }
    ],
    Septoria_leaf_spot: [
      {
        nama: "Tricoderma Fungisida Organik Pembasmi Jamur",
        harga: "Rp 31.496",
        link: "https://s.shopee.co.id/yI50imBO",
        gambar: "https://down-id.img.susercontent.com/file/id-11134207-7r98s-luy6h25d8skx3c.webp"
      },
      {
        nama: "Fungisida Organik Nopatek Obat Pembasmi Anti Jamur",
        harga: "Rp 50.000",
        link: "https://s.shopee.co.id/5AgOEWaFhy",
        gambar: "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lr4lthlqdw1pdd.webp"
      },
      {
        nama: "Pupuk Jamur Organik GDM 1Liter",
        harga: "Rp 100.000",
        link: "https://s.shopee.co.id/6VBlozjYKw",
        gambar: "https://down-id.img.susercontent.com/file/e40ae9b28f94af71e779319b9511f4e3.webp"
      }
    ],
    Tomato_yellow_leaf_curl: [
      {
        nama: "Pestisida Organik CairLoka Hama Ramah Lingkungan",
        harga: "Rp 23.000",
        link: "https://s.shopee.co.id/1qPwGsBrwQ",
        gambar: "https://down-id.img.susercontent.com/file/876f45f0f55671df7ce88e906437d7d2.webp"
      },
      {
        nama: "Insektisida kontak dan lambung TORAM 25SP",
        harga: "Rp 33.660",
        link: "https://s.shopee.co.id/1LTffydQIN",
        gambar: "https://down-id.img.susercontent.com/file/sg-11134201-7rbld-lqjxov50tb96be.webp"
      },
      {
        nama: "Ramsas 130SL 200ml/ba.nitenpiram",
        harga: "Rp 58.000",
        link: "https://s.shopee.co.id/8KdQ1r14ib",
        gambar: "https://down-id.img.susercontent.com/file/id-11134207-7r98u-lv66cvpi9gqw5a.webp"
      }
    ],
    Bacterial_spot: [
      {
        nama: "Indonefarm - Spray Pembasmi Hama Tanaman Kutu Putih ",
        harga: "Rp. 30.000",
        link: "https://s.shopee.co.id/10qpHoKig9",
        gambar: "https://down-id.img.susercontent.com/file/id-11134207-7rasi-m53su1jnuog039.webp"
      },
      {
        nama: "Fungisida rampart 25WP 100gram",
        harga: "Rp. 45.000",
        link: "https://s.shopee.co.id/4fk7eZb5PQ",
        gambar: "https://down-id.img.susercontent.com/file/sg-11134201-23010-gi7br0bkfzlv0e.webp"
      },
      {
        nama: "Pupuk Obat Pertanian Kimia Ramah Lingkungan",
        harga: "Rp. 254.999",
        link: "https://s.shopee.co.id/5VJEe7pNqq",
        gambar: "https://down-id.img.susercontent.com/file/id-11134207-7rasg-m2j4vpp0as0yc4.webp"
      }
    ],
    Target_spot: [
      {
        nama: "Pestisida Organik CairLoka Hama Ramah Lingkungan",
        harga: "Rp. 23.000",
        link: "https://s.shopee.co.id/1qPwGsBrwQ",
        gambar: "https://down-id.img.susercontent.com/file/876f45f0f55671df7ce88e906437d7d2.webp"
      },
      {
        nama: "Insektisida kontak dan lambung TORAM 25SP",
        harga: "Rp. 33.660",
        link: "https://s.shopee.co.id/1LTffydQIN",
        gambar: "https://down-id.img.susercontent.com/file/sg-11134201-7rbld-lqjxov50tb96be.webp"
      },
      {
        nama: "Ramsas 130SL 200ml/ba.nitenpiram",
        harga: "Rp. 58.000",
        link: "https://s.shopee.co.id/8KdQ1r14ib",
        gambar: "https://down-id.img.susercontent.com/file/id-11134207-7r98u-lv66cvpi9gqw5a.webp"
      }
    ],
    Tomato_mosaic_virus: [
      {
        nama: "Pupuk Organik Cair POC Tabur Mas",
        harga: "Rp. 49.588",
        link: "https://s.shopee.co.id/6KsLeoNBPi",
        gambar: "https://down-id.img.susercontent.com/file/9a3efd45e48b61dcfe22fce62c9f33cf.webp"
      },
      {
        nama: "Pestisida Nabati / Minyak Mimba / Neem Oil",
        harga: "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m5v8hyp5ssrc85.webp",
        link: "https://s.shopee.co.id/3LEk5JhPat",
        gambar: "Rp. 39.987"
      },
      {
        nama: "Seroxil Pestisida-Insektisida Organik",
        harga: "https://down-id.img.susercontent.com/file/id-11134207-7ras8-m5mumejyo15f81.webp",
        link: "https://s.shopee.co.id/4q3XsA4Ckk",
        gambar: "Rp. 49.197"
      }
    ],
    Leaf_Mold: [
      {
        nama: "Pestisida Nabati / Minyak Mimba / Neem Oil",
        harga: "Rp. 39.987",
        link: "https://s.shopee.co.id/3LEk5JhPat",
        gambar: "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m5v8hyp5ssrc85.webp"
      },
      {
        nama: "Fungisida Organik Hayati ANFUSH",
        harga: "Rp. 43.000",
        link: "https://s.shopee.co.id/4fk7gQQ2JP",
        gambar: "https://down-id.img.susercontent.com/file/id-11134207-7quky-lf0684s4k33y57.webp"
      }
    ],
    Spider_mites: [
      {
        nama: "Pestisida Nabati / Minyak Mimba / Neem Oil",
        harga: "Rp. 39.897",
        link: "https://s.shopee.co.id/3LEk5JhPat",
        gambar: "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m5v8hyp5ssrc85.webp"
      },
      {
        nama: "insektisida Hayati BIO-PEST KILLER ",
        harga: "Rp. 250.000",
        link: "https://s.shopee.co.id/2LMCugce83",
        gambar: "https://down-id.img.susercontent.com/file/id-11134207-7rbk3-m6yz511rtn2hec.webp"
      },
      {
        nama: "Pestisida Agens Hayati Natural BVR",
        harga: "Rp. 42.000",
        link: "https://s.shopee.co.id/5AgOHua377",
        gambar: "https://down-id.img.susercontent.com/file/id-11134207-7rbk2-m70tnxlo7z598e.webp"
      }
    ],
    Powder_mildew: [
    {
      nama: "CHERY CHODERMA - Fungisida Organik",
      harga: "Rp. 52.000",
      link: "https://s.shopee.co.id/5KzoUiDGg",
      gambar: "https://down-id.img.susercontent.com/file/id-11134207-7rasc-m0k4mb5dohtjf3.webp"
    },
      {
      nama: "NATIVO 75WG. kemasan 12,5gram",
      harga: "Rp. 20.396",
      link: "https://s.shopee.co.id/9KVxG6pP6X",
      gambar: "https://down-id.img.susercontent.com/file/sg-11134201-7rdwu-lyd7bckeb3asb5.webp"
    },
        {
      nama: "Fungisida Mankozeb Biru NARKOZEB",
      harga: "Rp. 88.000",
      link: "https://s.shopee.co.id/8pZgfD89tR",
      gambar: "https://down-id.img.susercontent.com/file/sg-11134201-22100-h20uabd8itiv8d.webp"
    }
    ]
  };
  return produkList[label] || [];
}
