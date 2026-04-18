PHẦN A

Câu A1:
1.Khi bạn gõ https://shopee.vn vào Chrome và nhấn Enter, các bước chính xảy ra theo thứ tự như sau:

Bước 1: DNS Lookup
Trình duyệt cần biết IP address của shopee.vn
Nó gửi yêu cầu tới DNS server để hỏi:
“Domain shopee.vn có IP là gì?”

Bước 2: TCP Connection (bắt tay TCP)
Sau khi có IP, trình duyệt tạo kết nối với server bằng giao thức TCP
Thực hiện 3-way handshake:
SYN → SYN-ACK → ACK

Bước 3: TLS/SSL Handshake (do dùng HTTPS)
Vì URL là https://, nên trình duyệt phải xác thực bảo mật
Trình duyệt và server trao đổi chứng chỉ (certificate) để tạo kết nối mã hóa

Bước 4: Gửi HTTP Request
Trình duyệt gửi request đầu tiên (thường là GET):
GET / HTTP/1.1
Host: shopee.vn

Bước 5: Server xử lý và trả HTTP Response
Server Shopee xử lý request
Trả về response gồm:
Status code (200/301/404…)
HTML hoặc redirect

Bước 6: Trình duyệt tải thêm tài nguyên (CSS/JS/Image)
Sau khi nhận HTML, trình duyệt phát hiện các file liên quan như:
CSS
JavaScript
Fonts
Images
Nó tiếp tục gửi thêm nhiều request khác để tải về

Bước 7: Render trang (hiển thị giao diện)
Browser thực hiện:
Parse HTML → tạo DOM
Parse CSS → tạo CSSOM
Kết hợp DOM + CSSOM → Render Tree
Layout (tính vị trí)
Paint + Render (vẽ ra màn hình)

=> Kết quả: Bạn thấy giao diện Shopee hiện ra.

2.Tab Network trong Chrome DevTools hiển thị toàn bộ quá trình website tải dữ liệu, gồm:
Danh sách tất cả request (HTML, CSS, JS, API, ảnh…)
Status code (200, 301, 404, 500…)
Request Method (GET, POST…)
Thời gian tải từng file (Time / Waterfall)
Kích thước file (Size)
Response từ server
Headers (Request Headers / Response Headers)
Cookies
Tổng thời gian load trang

A2.
4 lỗi Semantic khiến SEO thấp
Lỗi 1: Không dùng thẻ <header>

Bạn dùng:

<div class="header">

Google không biết đây là phần đầu trang.

Sửa thành:

<header>
 Lỗi 2: Menu không dùng <nav>

Bạn dùng:

<div class="menu">

Google không nhận đây là thanh điều hướng.

Sửa thành:

<nav>
 Lỗi 3: Nội dung chính không dùng <main>

Bạn dùng:

<div class="main">

Google không biết đâu là nội dung chính của trang.

Sửa thành:

<main>
 Lỗi 4: Sản phẩm không dùng <article> hoặc <section>

Bạn dùng:

<div class="product">

Google không nhận đây là một nội dung độc lập (bài viết/sản phẩm).

Sửa thành:

<article class="product">
 Lỗi 5 (rất quan trọng): Tiêu đề sản phẩm không dùng heading <h1>, <h2>

Bạn dùng:

<div class="title">

Google ưu tiên heading để hiểu nội dung chính.

Sửa thành:

<h1>iPhone 16 Pro</h1>
 Lỗi 6: Ảnh không có thuộc tính alt

Bạn dùng:

<img src="iphone.jpg">

Google không hiểu ảnh nói về gì → SEO ảnh kém.

Sửa thành:

<img src="iphone.jpg" alt="iPhone 16 Pro">
 Lỗi 7: Footer không dùng <footer>

Bạn dùng:

<div class="footer">

Sửa thành:

<footer>

A3.
Hộp 1
Text A Text B
Hộp 2
Text C Text D
Hộp 3

Giải Thích:

<div> là block element
Block nghĩa là chiếm toàn bộ chiều ngang dòng
Luôn xuống dòng mới
Vì vậy:
Hộp 1, Hộp 2, Hộp 3 đều nằm mỗi cái một dòng riêng.
<span> là inline element
Inline nghĩa là nằm trên cùng một dòng nếu còn chỗ
Không tự xuống dòng
<strong> cũng là inline element
<strong> giống <span> về kiểu hiển thị (inline)
Nhưng có ý nghĩa semantic là nhấn mạnh nội dung (thường in đậm)

A4.
<thead> chứa phần tiêu đề bảng
<tbody> chứa dữ liệu chính
<tfoot> chứa phần tổng kết cuối bảng

Không nên dùng table để tạo layout vì:

Sai semantic → SEO kém
Khó responsive trên mobile
Code rối, khó bảo trì
Accessibility kém