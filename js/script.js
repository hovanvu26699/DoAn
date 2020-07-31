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
    var soLuong = Number(document.getElementById("SoLuong").value);
    SL += soLuong;
    document.getElementById("soLuong").innerHTML = SL;
    alert("Vui lòng đăng kí/đăng nhập để mua hàng");
}
//////////////
function DangKy() {
    var MatKhau = document.getElementById("txtMK").value;
    var XN_Matkhau = document.getElementById("txtXN_MK").value;
    var NS = document.getElementById("txtNS").value;
    if (MatKhau == XN_Matkhau && GetAge(NS) > 18) {
        alert("Đăng Nhập Thành Công");
    } else {
        alert("Đăng Nhập Thất Bại");
    }
}

function GetAge(NS) {
    var today = new Date();
    var birth = new Date(NS);
    var age = today.getFullYear() - birth.getFullYear();
    var month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month == 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}