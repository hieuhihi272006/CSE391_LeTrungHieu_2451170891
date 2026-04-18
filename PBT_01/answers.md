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
Lỗi 1: Không dùng thẻ

 <header>

A2.

Lỗi 1: Không dùng thẻ &lt;header&gt;
Bạn dùng: &lt;div class="header"&gt;
Google không biết đây là phần đầu trang.
Sửa thành: &lt;header&gt;

Lỗi 2: Menu không dùng &lt;nav&gt;
Bạn dùng: &lt;div class="menu"&gt;
Google không nhận đây là thanh điều hướng.
Sửa thành: &lt;nav&gt;

Lỗi 3: Nội dung chính không dùng &lt;main&gt;
Bạn dùng: &lt;div class="main"&gt;
Google không biết đâu là nội dung chính của trang.
Sửa thành: &lt;main&gt;

Lỗi 4: Sản phẩm không dùng &lt;article&gt; hoặc &lt;section&gt;
Bạn dùng: &lt;div class="product"&gt;
Google không nhận đây là một nội dung độc lập.
Sửa thành: &lt;article class="product"&gt;

Lỗi 5: Tiêu đề sản phẩm không dùng heading &lt;h1&gt;
Bạn dùng: &lt;div class="title"&gt;
Google ưu tiên heading để hiểu nội dung chính.
Sửa thành: &lt;h1&gt;iPhone 16 Pro&lt;/h1&gt;

A3.
Hộp 1
Text A Text B
Hộp 2
Text C Text D
Hộp 3

Giải Thích:

&lt;div&gt; là block element

Block nghĩa là chiếm toàn bộ chiều ngang dòng
Luôn xuống dòng mới
Vì vậy:
Hộp 1, Hộp 2, Hộp 3 đều nằm mỗi cái một dòng riêng.

&lt;span&gt; là inline element

Inline nghĩa là nằm trên cùng một dòng nếu còn chỗ
Không tự xuống dòng

&lt;strong&gt; cũng là inline element
&lt;strong&gt; giống &lt;span&gt;về kiểu hiển thị (inline)

Nhưng có ý nghĩa semantic là nhấn mạnh nội dung (thường in đậm)

A4.

&lt;thead&gt; chứa phần tiêu đề bảng
&lt;tbody&gt; chứa dữ liệu chính
&lt;tfoot&gt; chứa phần tổng kết cuối bảng

Không nên dùng table để tạo layout vì:

Sai semantic → SEO kém
Khó responsive trên mobile
Code rối, khó bảo trì
Accessibility kém
