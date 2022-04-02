$(document).ready(function () {
  // console.log(localStorage.getItem("userNameKH"))
  getSanPham();
});
const showSp = (data) => {
  data.map(
    (val, idx) =>
      // console.log(val.price)
      `	`
  );
};
const getSanPham = () => {
  $.ajax({
    type: "GET",
    url: "http://localhost:8000/product/all",

    success: function (res) {
      var html = res.data.map((value, index) => {
        return `
        <div class="col-sm-4">
        <div class="product-image-wrapper">
            <div class="single-products">
                <div class="productinfo text-center">
                    <img src="${value.image}" alt="" />
                    <h2>${value.price}</h2>
                    <p>${value.name}</p>
                    <button name="btnAdd" class="btn btn-default  add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</button>
                </div>
                <div class="product-overlay">
					<div class="overlay-content">
                        <img src="${value.image}" alt="" />
						<h2 style="display: none;" class="idProduct">${value.id_product}</h2>
                        <h2 class="price">${value.price}</h2>
						<p>${value.name}</p>
						<button name="btnAdd" class="btn btn-default  add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</button>
					</div>
				</div>
            </div>
            
        </div>
    </div>		
               `;
      });
      document.getElementById("features_items").innerHTML = html.join("");
    },
  });
};

$(document).on("click", "button[name='btnAdd']", function () {
  localStorage.setItem("idSanPham",$(this).siblings(".idProduct").text()) 
  localStorage.setItem("image",$(this).siblings(".overlay-content img").attr("src")) 
  localStorage.setItem("tenSP",$(this).siblings("p").text()) 
  localStorage.setItem("giaSP",$(this).siblings(".price").text()) 
console.log()
  window.location = "cart.html";
  });
  