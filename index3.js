function thueThuNhapCaNhan() {
  let hovaten = document.getElementById("hovaten").value;
  let tongThuNhap = Number(document.getElementById("tongThuNhap").value);
  if (tongThuNhap === 0) {
    alert("Số tiền thu nhập không hợp lệ");
    return;
  }

  let nguoiPhuthuoc = Number(document.getElementById("nguoiPhuthuoc").value);
  let thuNhapchiuthue = tongThuNhap - 4e6 - nguoiPhuthuoc * 16e5;
  let thueThuNhapCaNhan = 0;
  if (thuNhapchiuthue <= 6e7) {
    thueThuNhapCaNhan = thuNhapchiuthue * 0.05;
  } else if (6e7 < thuNhapchiuthue <= 12e7) {
    thueThuNhapCaNhan = thuNhapchiuthue * 0.1;
  } else if (12e7 < thuNhapchiuthue <= 21e7) {
    thueThuNhapCaNhan = thuNhapchiuthue * 0.15;
  } else if (21e7 < thuNhapchiuthue <= 384e6) {
    thueThuNhapCaNhan = thuNhapchiuthue * 0.2;
  } else if (384e6 < thuNhapchiuthue <= 624e6) {
    thueThuNhapCaNhan = thuNhapchiuthue * 0.25;
  } else if (624e6 < thuNhapchiuthue <= 960e6) {
    thueThuNhapCaNhan = thuNhapchiuthue * 0.3;
  } else {
    thueThuNhapCaNhan = thuNhapchiuthue * 0.35;
  }
  const numberFormat = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(thueThuNhapCaNhan);
  document.getElementById("ketQua").textContent =
    hovaten + " Thuế thu nhập cá nhân: " + numberFormat;
}
document.getElementById("btnKetQua").onclick = thueThuNhapCaNhan;
