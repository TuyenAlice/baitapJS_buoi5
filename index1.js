function quanLyTuyensinh() {
  let diemchuan = Number(document.getElementById("diemchuan").value);
  let diemMon1 = Number(document.getElementById("diemMon1").value);
  let diemMon2 = Number(document.getElementById("diemMon2").value);
  let diemMon3 = Number(document.getElementById("diemMon3").value);
  let chonKhuVuc = Number(document.getElementById("chonKhuVuc").value);
  let chonDoiTuong = Number(document.getElementById("chonDoiTuong").value);
  let diemUutien = chonDoiTuong + chonKhuVuc;
  let diemtongKet = diemMon1 + diemMon2 + diemMon3 + diemUutien;
  if (
    diemtongKet >= diemchuan &&
    diemMon1 > 0 &&
    diemMon2 > 0 &&
    diemMon3 > 0
  ) {
    document.getElementById("ketQua").textContent =
      "Bạn đã đậu. Tổng điểm là:" + diemtongKet;
  } else {
    document.getElementById("ketQua").textContent =
      "Bạn đã rớt. Tổng điểm là:" + diemtongKet;
  }
}
document.getElementById("btnKetQua").onclick = quanLyTuyensinh;
