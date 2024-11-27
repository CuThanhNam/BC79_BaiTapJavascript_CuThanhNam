//Bài 1: Tính tiền lương nhân viên
//viết chương trình tính tiền lương nhân viên. Lương 1 ngày: 100.000

// input
let luong1Ngay = 100.000;
let soNgaylam = 31;

let luong = 0;

luong = luong1Ngay * soNgaylam;

console.log("Tổng lương=", luong)

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
let sothuc1 = 2;
let sothuc2 = 4;
let sothuc3 = 7;
let sothuc4 = 9;
let sothuc5 = 11;

let number = 5;

let Tong = 0;

Tong = sothuc1 + sothuc2 + sothuc3 + sothuc4 + sothuc5

let giatriTB = 0;

giatriTB = Tong / number;

console.log("Giá trị trung bình:", giatriTB)

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
let GiaUSD = 23.500;

let soTienUSD = 2;

let quyDoiVND = 0;

quyDoiVND = soTienUSD * GiaUSD;

console.log("Số tiền quy đổi sang VND:",quyDoiVND, "VND");

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
let chieuDai = 5;
let chieuRong = 4;

let dienTich = 0;
let chuVi = 0;

chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;

console.log("Chu vi:", chuVi);
console.log("Diện tích:", dienTich);

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
let so = 85;

let tongKyso = 0;

let hangChuc = Math.floor(so / 10);
let donVi = Math.floor(so % 10);

tongKyso = hangChuc + donVi;

console.log("Tổng ký số:", tongKyso);

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
