function tinhTienDien() {
  let soKw = Number(document.getElementById("soKw").value);
  let hovaten = document.getElementById("hovaten").value;
  let tongTiendien = 0;
  if (soKw <= 50) {
    tongTiendien = 500 * soKw;
  } else {
    tongTiendien = 500 * 50; // 50kwdau
    soKw = soKw - 50;
    if (soKw <= 50) {
      tongTiendien = tongTiendien + 650 * soKw; // 50kwke
    } else {
      tongTiendien = tongTiendien + 650 * 50; // 50kwke
      soKw = soKw - 50;
      if (soKw <= 100) {
        tongTiendien = tongTiendien + 850 * soKw; // 100kwke
      } else {
        tongTiendien = tongTiendien + 850 * 100; // 100kwke
        soKw = soKw - 100;
        if (soKw <= 150) {
          tongTiendien = tongTiendien + 1100 * soKw; // 150kwke
        } else {
          tongTiendien = tongTiendien + 1100 * 150; // 150kwke
          soKw = soKw - 150;
          if (soKw > 0) {
            tongTiendien = tongTiendien + 1300 * soKw; // con lai
          }
        }
      }
    }
  }
  document.getElementById("ketQua").textContent =
    hovaten + " Tong tien dien :" + tongTiendien;
}

document.getElementById("btnKetQua").onclick = tinhTienDien;
