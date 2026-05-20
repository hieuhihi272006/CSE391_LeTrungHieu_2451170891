```
A1.
1 Mobile (<768px)

col-12 → mỗi box chiếm full hàng

[ Box 1 ]
[ Box 2 ]
[ Box 3 ]
[ Box 4 ]
2 Tablet (768px - 991px)

col-md-6 → mỗi box chiếm 6/12 = 50%

[ Box 1 ] [ Box 2 ]
[ Box 3 ] [ Box 4 ]
3 Desktop (≥992px)

col-lg-3 → mỗi box chiếm 3/12 = 25%

[ Box 1 ] [ Box 2 ] [ Box 3 ] [ Box 4 ]
Câu hỏi thêm
1 col-md-6 nghĩa là gì?
Tức là chiếm 50% chiều ngang container ở màn hình md trở lên.

2 Tại sao không cần viết col-sm-12?
col-12 = áp dụng cho mọi kích thước (xs trở lên)
sm (≥576px) cũng tự động dùng col-12 luôn

A2.
1 d-none d-md-block nghĩa là gì?
 Ẩn khi màn hình < 768px (mobile, sm)
 Hiển thị khi màn hình ≥ 768px (tablet md, lg, xl, xxl)

2 5 spacing utilities (margin/padding) + giải thích

(1) mt-3
m = margin
t = top
3 = mức spacing (theo scale Bootstrap)

 margin-top: spacing level 3

(2) mb-4
margin-bottom level 4

 margin-bottom: 4

(3) ms-2
s = start (bên trái trong LTR)
margin-start level 2

 margin-left: 2 (trong ngôn ngữ bình thường)

(4) px-4
p = padding
x = left + right
4 = level 4

 padding-left + padding-right: 4

(5) mb-auto
margin-bottom tự động

 margin-bottom: auto

Dùng khi muốn đẩy phần tử khác ra xa trong layout flex/grid.

3 Khác nhau giữa .container, .container-fluid, .container-md
.container
Container responsive có max-width theo breakpoint
Tự căn giữa (margin: auto)
Không full màn hình ở desktop

Dùng cho layout web bình thường.

.container-fluid
Luôn width: 100%
Full chiều ngang ở mọi kích thước

Dùng khi muốn layout kéo dài hết màn hình.

.container-md
Mặc định full width khi nhỏ hơn md
Từ md (≥768px) trở lên mới có max-width như container

Dùng khi muốn mobile full màn hình, nhưng desktop/tablet giới hạn chiều rộng.

C1.
1. Muốn đổi $primary của Bootstrap sang #E63946 thì làm quy trình thế nào?

Bootstrap không cho đổi trực tiếp màu gốc nếu bạn chỉ dùng file bootstrap.min.css (CDN). Muốn đổi đúng chuẩn thì phải build Bootstrap bằng SASS.

Công cụ cần có
Node.js + npm
Sass compiler (Bootstrap dùng SCSS)
(Tùy chọn) Vite / Webpack để build nhanh
Quy trình chuẩn

Bước 1: Cài Bootstrap source SCSS

npm install bootstrap

Bước 2: Tạo file SCSS custom
Ví dụ tạo file:

/scss/custom.scss

Bước 3: Override biến $primary trước khi import Bootstrap
Trong custom.scss:

$primary: #E63946;

@import "../node_modules/bootstrap/scss/bootstrap";

Quan trọng: phải override trước khi import bootstrap, vì Bootstrap đọc biến ngay lúc compile.

Bước 4: Compile SCSS thành CSS

sass scss/custom.scss public/css/bootstrap-custom.css

Bước 5: Link CSS mới thay vì bootstrap.css
Trong HTML dùng:

<link rel="stylesheet" href="css/bootstrap-custom.css">

=> Lúc này toàn bộ .btn-primary, .bg-primary, .text-primary, .border-primary, alert, link... đều đổi sang màu mới.

2 Modify file nào?

Bạn không sửa trực tiếp file trong node_modules/bootstrap/... (vì update là mất).

Bạn chỉ cần tạo file riêng:

custom.scss (hoặc main.scss)

và output ra:

bootstrap-custom.css
3 Tại sao KHÔNG nên override kiểu:
.btn-primary { background: red; }

Vì cách đó chỉ sửa đúng nút .btn-primary, còn Bootstrap có rất nhiều class liên quan $primary như:

.text-primary
.bg-primary
.border-primary
.link-primary
.btn-outline-primary
.alert-primary
.table-primary
focus ring, hover state, active state...

Nếu override .btn-primary thì giao diện sẽ lệch màu (button đỏ nhưng border/link vẫn xanh).

4 Vì sao nên dùng SASS variables?

Dùng SASS variables giúp:

Bootstrap tự generate đúng toàn bộ hệ thống theme
Tự tạo ra các màu hover/active/shadow phù hợp
Dễ maintain (chỉ đổi $primary một chỗ)
Không bị lỗi khi Bootstrap update version
Đồng bộ toàn bộ UI theo design system
```
