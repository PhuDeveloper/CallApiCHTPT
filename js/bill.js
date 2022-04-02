$(document).ready(function () {
  getTenKh();
});
const getTenKh = () => {
  var name = localStorage.getItem("tenKhachHang");
  var image = localStorage.getItem("image");
  var price = localStorage.getItem("giaSP");
  var tenSP = localStorage.getItem("tenSP");
  $("#tenKH").text(name);
  $("#giaSP").text(price);
  $("#tenSP").text(tenSP);
  $("#img").attr("src", image);
};
const muaHang = () => {
  var username = localStorage.getItem("username");
  var password = localStorage.getItem("password");
  var id_product = localStorage.getItem("idSanPham");
  var tmp = {
    username: username,
    password: password,
    id_product: id_product,
  };
  var data = JSON.stringify(tmp);
  console.log(data)
  $.ajax({
    type: "POST",
    url: "http://localhost:8000/bill/buy",
    data: data,
    dataType: "json",
    contentType: "application/json",
    success: function (res) {
      alert("Mua hàng thành công!!")
    },
  });
};
$("#muaHang").click(muaHang);