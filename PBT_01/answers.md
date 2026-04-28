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

B3.
Lỗi 1: Dòng 1 — &lt;!DOCTYPE&gt; thiếu "html" — Sửa thành &lt;!DOCTYPE html&gt;

Lỗi 2: Dòng 2 — Thẻ &lt;html&gt; thiếu thuộc tính lang — Sửa thành &lt;html lang="vi"&gt;

Lỗi 3: Dòng 4 — Thẻ &lt;title&gt; không đóng — Sửa thành &lt;title&gt;Trang web&lt;/title&gt;

Lỗi 4: Dòng 5 — meta charset sai ("utf8") — Sửa thành &lt;meta charset="UTF-8"&gt;

Lỗi 5: Dòng 7 — Thẻ &lt;h1&gt; không đóng đúng (dùng &lt;h1&gt; thay vì &lt;/h1&gt;) — Sửa thành &lt;/h1&gt;

Lỗi 6: Dòng 11 — Thẻ &lt;a&gt; đầu tiên không đóng đúng — Sửa thành &lt;/a&gt;

Lỗi 7: Dòng 19 — Thẻ &lt;img&gt; thiếu dấu ngoặc kép và thiếu alt — Sửa thành &lt;img src="iphone.jpg" alt="..."&gt;

Lỗi 8: Dòng 21 — Sai nesting: đóng &lt;/p&gt; trước &lt;/b&gt; — Sửa thành &lt;p&gt;Giá: &lt;strong&gt;...&lt;/strong&gt;&lt;/p&gt;

Lỗi 9: Dòng 26 — Table thiếu semantic header (dùng &lt;td&gt; thay vì &lt;th&gt;) — Sửa hàng đầu thành &lt;th&gt;

Lỗi 10: Dòng 25-35 — Table thiếu &lt;thead&gt; và &lt;tbody&gt; — Thêm &lt;thead&gt; và &lt;tbody&gt;

Lỗi 11: Dòng 39 — Có 2 thẻ &lt;main&gt; trong cùng trang (semantic sai) — Sửa phần thứ 2 thành &lt;aside&gt;

Lỗi 12: Dòng 45 — Thẻ &lt;p&gt; trong footer không đóng — Sửa thành &lt;/p&gt;

Lỗi 13: Thiếu thẻ meta viewport — Thêm &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;

C2.
Việc dùng &lt;div&gt; cho mọi thứ rồi thêm class có thể chạy được, nhưng nói rằng semantic HTML “không cần thiết” là sai về mặt kỹ thuật.

Thứ nhất, semantic HTML giúp SEO tốt hơn. Công cụ tìm kiếm như Google phân tích cấu trúc trang để hiểu nội dung chính là gì. Nếu bạn dùng &lt;main&gt;, &lt;article&gt;, &lt;header&gt;, &lt;nav&gt;, bot sẽ nhận biết rõ đâu là nội dung sản phẩm, đâu là menu, đâu là phần phụ. Nếu tất cả chỉ là &lt;div&gt;, công cụ tìm kiếm khó hiểu hơn và trang có thể bị đánh giá thấp về chất lượng cấu trúc.

Thứ hai, semantic HTML cực kỳ quan trọng với Accessibility. Người dùng khiếm thị dùng screen reader sẽ dựa vào các thẻ như &lt;nav&gt; để nhảy nhanh tới menu, &lt;main&gt; để tới nội dung chính, &lt;footer&gt; để tới thông tin cuối trang. Nếu toàn bộ trang chỉ có &lt;div&gt;, họ phải nghe từng phần một cách thủ công, gây trải nghiệm rất tệ.

Ví dụ cụ thể: trong trang thương mại điện tử, mỗi sản phẩm nên đặt trong &lt;article&gt;, bên trong có &lt;h2&gt; tên sản phẩm. Khi đó screen reader có thể liệt kê danh sách các sản phẩm theo heading/article, và Google cũng hiểu đây là danh sách item.

Tuy nhiên &lt;div&gt; vẫn phù hợp trong trường hợp chỉ cần wrapper để layout hoặc grouping không mang ý nghĩa nội dung, ví dụ &lt;div class="container"&gt; để căn giữa hoặc chia grid.

D,
link video: https://drive.google.com/file/d/12PCZHAJ9DN-nHPREK_WT-YAnAnOTRMO1/view?usp=drive_link
