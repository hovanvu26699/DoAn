var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
/// Hàm Mua Sản Phẩm
var SL = 0;
function MuaSP() {
    SL++;
    alert("Sản phẩm đã được thêm vào giỏ hàng thành công");
    document.getElementById("SoLuong").innerHTML = SL;
}

function MuaHang() {
    var soLuong = Number(document.getElementById("SoLuongSanPham").value);
    SL += soLuong;
    document.getElementById("SoLuong").innerHTML = SL;
    alert("Vui lòng đăng kí/đăng nhập để mua hàng");
}