//////////////Slide show
var slideIndex = 0;
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
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
}

////// Mua
var SL = 0;
function MuaSP() {
    SL++;
    alert("Sản phẩm đã được thêm vào giỏ hàng thành công");
    document.getElementById("soLuong1").innerHTML = SL;
}

function ChuyenTrang() {
    var soL = Number(document.getElementById("SoLuong").value);
    SL += soL;
    document.getElementById("soLuong2").innerHTML = SL;
    alert("Vui lòng đăng kí/đăng nhập để mua hàng");
    location.assign("http://127.0.0.1:5501/register.html");
}

////////////// Đăng Ký
function DangKy() {
    var SDT = document.getElementById("txtSDT").value;
    var MatKhau = document.getElementById("txtMK").value;
    var XN_Matkhau = document.getElementById("txtXN_MK").value;
    var tenDN = document.getElementById("txtTenDN").value;
    var CMND = document.getElementById("txtCMND").value;
    var Email = document.getElementById("txtEmail").value;
    var NS = document.getElementById("txtNS").value;
    if (MatKhau != XN_Matkhau || GetAge(NS) < 18 || tenDN.length == 0 || MatKhau.length == 0 || Email.length == 0 || NS.length == 0 || !kiemTra_SDT(SDT) || !kiemTra_CMND(CMND)) {
        if (MatKhau != XN_Matkhau) {
            alert("Đăng Ký Thất Bại");
            document.getElementById("txtXN_MK").focus();
        }
        else if (GetAge(NS) < 18) {
            alert("Đăng Ký Thất Bại: Không đủ 18 tuổi");
        }
        else if (!kiemTra_CMND(CMND)) {
            alert("Đăng Ký Thất Bại");
            document.getElementById("txtCMND").focus();
        }
        else {
            alert("Đăng Ký Thất Bại");
        }
    } else {
        alert("Đăng Ký Thành Công");
        xoaForm();
    }
}
//////Tính Tuổi
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
///////Kiểm tra SDT
function kiemTra_SDT(n) {
    if (n.length > 0) {
        if (n.length < 10 || n.length > 10) {
            return false;
        }
    }
    return true;
}
////////// Kiểm tra CMND
function kiemTra_CMND(n) {
    var count = 0;
    var N = "0123456789";
    if (n.length > 0) {
        for (var i = 0; i < n.length; i++) {
            for (var j = 0; j < 10; j++) {
                if (n[i] == N[j]) {
                    count++;
                }
            }
            if (count != i + 1) {
                return false;
            }
        }
        return true;
    }
    return true;
}
///Xóa form
function xoaForm() {
    document.getElementById("txtTenDN").value = "";
    document.getElementById("txtMK").value = "";
    document.getElementById("txtXN_MK").value = "";
    document.getElementById("txtHoTen").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtSDT").value = "";
    document.getElementById("txtDC").value = "";
    document.getElementById("txtCMND").value = "";
    document.getElementById("txtNS").value = "";
    document.getElementById("fileAnh").value = "";
    document.getElementById("imgAnhMinhHoa").src = "";
    document.getElementById("txtTenDN").focus();
}
//////Ảnh
function HienThiAnh() {
    document.getElementById("imgAnhMinhHoa").src = "img/" + document.getElementById("fileAnh").files[0].name;
}
