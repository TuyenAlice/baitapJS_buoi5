function chonDoanhnghiep() {
  var x = Number(document.getElementById("ChonLoaiKH").value);
  let thesokenoi = document.getElementById("soKetnoi");

  if (x === 2) {
    thesokenoi.classList.add("show");
    thesokenoi.classList.remove("hide");
  } else {
    thesokenoi.classList.add("hide");
    thesokenoi.classList.remove("show");
  }
}
function tinhtiencap() {
  let ChonLoaiKH = Number(document.getElementById("ChonLoaiKH").value);
  let maKH = document.getElementById("maKH").value;
  let sokenhcaocap = Number(document.getElementById("sokenhcaocap").value);
  let soKetnoi = Number(document.getElementById("soKetnoi").value);
  if (isNaN(ChonLoaiKH)) {
    alert("Hãy chọn loại khách hàng");
    return;
  }
  //nhà dân
  let phixlhoadonnd = 4.5;
  let dvcobannd = 20.5;
  let thuekenhccnd = 7.5;
  //doanh nghiệp
  let phixlhddn = 15;
  let dvcodn = 75;
  let kenhccdn = 50;
  let tiencap = 0;
  if (ChonLoaiKH === 1) {
    tiencap = phixlhoadonnd + dvcobannd + thuekenhccnd * sokenhcaocap;
  } else {
    if (soKetnoi <= 10) {
      dvcodn = 75;
    } else {
      dvcodn = soKetnoi - 10 * 5 + 75;
    }
    tiencap = phixlhddn + dvcodn + kenhccdn * sokenhcaocap;
  }
  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(tiencap);
  document.getElementById("ketQua").textContent =
    "Mã Khách Hàng " + maKH + " . Tiền cáp là: " + numberFormat;
}
document.getElementById("btnKetQua").onclick = tinhtiencap;
