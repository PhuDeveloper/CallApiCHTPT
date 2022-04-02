$(document).ready(function () {});
const dangNhap = () => {
  var userName = $("#username").val();
  var password = $("#password").val();
  var server = $("#server").val();
  var tmp = { username: userName, password: password, server: server };
  var data = JSON.stringify(tmp);
  console.log(data);
  $.ajax({
    type: "POST",
    url: "http://localhost:8000/account/login",
    data: data,
    dataType: "json",
    contentType: "application/json",
    success: function (res) {
      if (res.code == 200) {
        alert("Đăng nhập thành công vào Server" + server);
        localStorage.setItem("username", userName);
        localStorage.setItem("password", password);
        localStorage.setItem("tenKhachHang",res.name)
        window.location = "shop.html";
      } else {
        alert("Tài khoản hoặc mật khẩu ko đúng");
      }
    },
  });
};
$("#btnLogin").click(dangNhap);
const dangKi = () => {
  var userName = $("#user").val();
  var name = $("#name").val();
  var password = $("#pass").val();
  var rePassword = $("#rePass").val();
  var server = $("#serverSignup").val();
  var tmp = {
    username: userName,
    password: password,
    repassword: rePassword,
    server: server,
    name: name,
  };
  var data = JSON.stringify(tmp);
  var sg="signup"
  console.log(data);
  $.ajax({
    type: "POST",
    url: `http://localhost:8000/account/${sg}`,
    data: data,
    dataType: "json",
    contentType: "application/json",
    success: function (res) {
      if (res.code == 200) {
        alert("Đăng kí thành công vào Server" + server);
       
      } else {
        alert("Đăng kí thất bại");
      }
    },
  });
};
$("#btnSignup").click(dangKi);
