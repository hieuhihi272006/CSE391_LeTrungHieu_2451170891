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


```
