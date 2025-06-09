export function getLabels(label) {
  const Label = {
    healthy: "healthy",
    Late_blight: "Late blight",
    Early_blight: "Early blight",
    Bacterial_spot: "Bacterial spot",
    Septoria_leaf_spot: "Septoria leaf spot",
    Tomato_yellow_leaf_curl_virus: "Tomato yellow leaf",
    Tomato_mosaic_virus: "Tomato mosaic virus",
    Target_spot: "Target spot",
    Leaf_Mold: "Leaf mold",
    Spider_mites: "Spider mites",
    Powdery_mildew: "Powder mildew",
  };
  return Label[label] || "Belum ada rekomendasi untuk label ini.";
}
