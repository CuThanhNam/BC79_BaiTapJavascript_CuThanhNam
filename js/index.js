//Bài 1: Tính tiền lương nhân viên
//viết chương trình tính tiền lương nhân viên. Lương 1 ngày: 100.000

function tinhTongLuong() {
   // input
      let luongNgay = document.getElementById('luong1Ngay').value;
      let soNgaylam = document.getElementById('soNgaylam').value;

      let tongLuong = 0;

      tongLuong = luongNgay * soNgaylam;

      document.getElementById('tongLuong').innerHTML = tongLuong;
      // alert(123);

}
//Mô hình 3 khối
/**
 * Đầu vào
 -2 biến luong1Ngay và soNgaylam
 * Các bước thực hiện
 -Tạo 2 biến luong1Ngay và soNgaylam và gán giá trị
 -Tạo biến luong
 -Sử dụng công thức tính lương:luong = luong1Ngay * soNgaylam
 -In kết quả ra console
 * Đầu ra
 -In ra tổng lương
 */

//Bài 2: Tính giá trị trung bình
//viết chương trình nhập vào 5 số thực. Tính giá trị trung bình của 5 số này và xuất ra màn hình

//input
function giaTriTrungBinh() {
      // alert(123);
      let number1 = document.getElementById('soThuc1').value*1;
      let number2 = document.getElementById('soThuc2').value*1;
      let number3 = document.getElementById('soThuc3').value*1;
      let number4 = document.getElementById('soThuc4').value*1;
      let number5 = document.getElementById('soThuc5').value*1;

      // console.log('So thuc 1:', TagsoThuc1);
      // console.log('So thuc 2:', TagsoThuc2);
      // console.log('So thuc 3:', TagsoThuc3);
      // console.log('So thuc 4:', TagsoThuc4);
      // console.log('So thuc 5:', TagsoThuc5);

      let number = 5;

      let Tong = 0;

      Tong = number1 + number2 + number3 + number4 + number5;


      let giatriTB = 0;

      giatriTB = Tong / number;

      document.getElementById('giatriTB').innerHTML = giatriTB;

      
}

//Mô hình 3 khối
/**
 * Đầu vào
 -6 biến sothuc1, sothuc2, sothuc3, sothuc4, sothuc5 và number
 * Các bước thực hiện
 -Tạo 6 biến sothuc1, sothuc2, sothuc3, sothuc4, sothuc5 và number và gán giá trị
 -Tạo biến Tong
 -Sử dụng công thức tính tổng: Tong = sothuc1 + sothuc2 + sothuc3 + sothuc4 + sothuc5 
 -Tạo biến giatriTB
 -Sử dụng công thức tính giá trị trung bình: giatriTB = Tong / number
 -In kết quả ra console
 * Đầu ra
 -In ra giá trị trung bình của 5 số
 */

//Bài 3: Quy đổi tiền
//giá USD hiện nay đang là 23.500 VND. Viết chương trình quy đổi từ USD sang VND. Tính và xuất ra số tiền sau quy đổi VND.

//input
function quyDoiTien() {
   let GiaUSD = 23.500;

   let soTienUSD = document.getElementById('tienUSD').value;

   let quyDoiVND = 0;

   quyDoiVND = soTienUSD * GiaUSD;

   document.getElementById('quyDoiVND').innerHTML = quyDoiVND;
}

//Mô hình 3 khối
/**
 * Đầu vào
 -2 biến GiaUSD và soTienUSD
 * Các bước thực hiện
 -Tạo 2 biến GiaUSD và soTienUSD và gán giá trị
 -Tạo biến quyDoiVND
 -Sử dụng công thức tính số tiền sau quy đổi sang VND:
    quyDoiVND = soTienUSD * GiaUSD
 -In kết quả ra console
 * Đầu ra
 -In ra số tiền quy đổi sang VND
 */

//Bài 4: Tính diện tích, chu vi hình chữ nhật
//viết chương trình nhập vào 2 chiều dài và chiều rộng của HCN(hình chữ nhật). Tính và xuất ra diện tích, chu vi của HCN đó.

//input
function Tinh() {
   let chieuDai = document.getElementById('chieuDai').value*1;
   let chieuRong = document.getElementById('chieuRong').value*1;

   let dienTich = 0;
   let chuVi = 0;

   chuVi = (chieuDai + chieuRong) * 2;
   dienTich = chieuDai * chieuRong;

   document.getElementById('chuVi').innerHTML = chuVi;
   document.getElementById('dienTich').innerHTML = dienTich;
}
//Mô hình 3 khối
/**
 * Đầu vào
 -2 biến chieuDai và chieuRong
 * Các bước thực hiện
 -Tạo 2 biến chieuDai và chieuRong và gán giá trị
 -Tạo 2 biến chuVi va dienTich
 -Sử dụng công thức tính chu vi: chuVi = (chieuDai + chieuRong) * 2
 -Sử dụng công thức tính diện tích: dienTich = chieuDai * chieuRong
 -In kết quả ra console
 * Đầu ra
 -In ra diện tích và chu vi của HCN
 */

//Bài 5: Tính tổng 2 ký số
//viết chương trình nhập vào 1 số có 2 chữ số (VD: 12, 44, 83). Tính tổng 2 ký số của số vừa nhập.

//input
function tinhTongHaiKySo() {
   let so = document.getElementById('kySo').value;

   let tongKyso = 0;

   let hangChuc = Math.floor(so / 10);
   let donVi = Math.floor(so % 10);

   tongKyso = hangChuc + donVi;

   document.getElementById('tongKyso').innerHTML = tongKyso;

}
//Mô hình 3 khối
/**
 * Đầu vào
 -1 biến so
 * Các bước thực hiện
 -Tạo biến so và gán giá trị
 -Tạo biến tongKyso
 -Tách số hàng chục theo công thức: hangChuc = Math.floor(so / 10)
 -Tách số hàng đơn vị theo công thức: donVi = Math.floor(so % 10)
 -In kết quả ra console
 * Đầu ra
 -In ra tổng ký số
 */
