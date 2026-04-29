```1, Inline CSS (CSS viết trực tiếp trong thẻ)
Ví dụ code

<h1 style="color: #2563eb; font-size: 32px;">Tiêu đề</h1>
Ưu điểm
Nhanh, thấy kết quả ngay
Dễ override tạm thời
Nhược điểm
Không tái sử dụng
Code HTML bị rối, khó bảo trì
Không phù hợp dự án lớn
Khi nào nên dùng
Chỉ dùng khi sửa nhanh / khẩn cấp / test tạm thời
2 Internal CSS (CSS trong thẻ <style>
Ví dụ code
<head>
  <style>
    h1 {
      color: #2563eb;
      font-size: 32px;
    }
  </style>
</head>
Ưu điểm
Gọn hơn inline
Áp dụng cho cả trang
Dễ thử nghiệm prototype
Nhược điểm
Chỉ dùng cho 1 file HTML
Nếu nhiều trang phải copy lại
Khi nào nên dùng
Prototype
Trang đơn (single-page nhỏ)
3) External CSS (CSS file riêng)
Ví dụ code

HTML

<head>
  <link rel="stylesheet" href="styles.css">
</head>

styles.css

h1 {
  color: #2563eb;
  font-size: 32px;
}
Ưu điểm
Chuẩn production
Dễ maintain và mở rộng
Tái sử dụng nhiều trang
Browser cache giúp load nhanh
Nhược điểm
Phải tạo file riêng
Có thể load chậm hơn lần đầu (nhưng sau đó cache)
Khi nào nên dùng
Dự án thật
Website nhiều trang
Làm việc teamwork
Câu hỏi thêm: Nếu cùng 1 element có cả 3 cách CSS thì cái nào thắng?

Inline CSS thắng Internal CSS và External CSS.

Thứ tự ưu tiên thường là:

Inline > Internal > External

Giải thích

Vì Inline CSS được viết trực tiếp trong element nên có độ ưu tiên cao nhất trong cascade (áp dụng trực tiếp lên element).

A2.

1, h1

→ Chọn: "ShopTLU"

2, .price

→ Chọn:

"25.990.000đ"
"45.990.000đ"

(vì có 2 thẻ <p class="price">)

3, #app header

→ Chọn toàn bộ thẻ <header> bên trong #app, gồm text content:

"ShopTLU"
"Home"
"Products"
"About"
4, nav a:first-child

→ Chọn thẻ <a> đầu tiên trong <nav>:

"Home"
5, .product.featured h2

→ Chọn <h2> nằm trong element có cả 2 class product và featured:

"MacBook Pro"
6,article > p

→ Chọn tất cả <p> là con trực tiếp của <article>

Có 2 article, mỗi article có 2 <p> ⇒ tổng 4 phần tử:

"25.990.000đ"
"Mô tả sản phẩm..."
"45.990.000đ"
"Mô tả sản phẩm..."
7, a[href="/"]

→ Chọn thẻ <a> có thuộc tính href="/":

"Home"
8, .top-bar.dark h1

→ Chọn <h1> nằm trong element có cả class top-bar và dark:

"ShopTLU"

A3,
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
Chiều rộng hiển thị = 450px,
Không gian chiếm trên trang = 470px

.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}

Chiều rộng hiển thị = 400px,
Kích thước content thực tế = 350px,
Không gian chiếm trên trang = 420px,

.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }

Khoảng cách giữa box-a và box-b = 40,
Nâng cao: Nếu .box-a có margin-bottom: -10px và .box-b có margin-top: 40px, khoảng cách = 30px,

A4,
1.
 A: Specificity: (0, 0, 1)
 B: Specificity: (0, 1, 0)
 C: Specificity: (1, 0, 0)
 D: Specificity: (0, 1, 1)

2.
 Element sẽ có màu: red
 Vì Rule C có specificity cao nhất: (1,0,0)
 ID selector luôn ưu tiên hơn class và tag.

3. Element sẽ có màu: orange

4. Element sẽ có màu: black Vì:
!important sẽ override các rule bình thường (kể cả ID selector), miễn là rule kia không có !important.

B1,
Selectors used:
- Element selector: body, header, h2
- Class selector: .card, .skills-table, .active
- ID selector: #contact
- Descendant selector: header nav a
- Pseudo-class selector: a:hover, tr:nth-child(even), tr:hover

B2,
 Phần 1: content-box vs border-box

- Hộp 1 (content-box): chiều rộng thực tế = 350px
- Hộp 2 (border-box): chiều rộng thực tế = 300px

Giải thích:
- content-box: width chỉ tính phần content, padding và border cộng thêm vào ngoài nên tổng bị lớn hơn.
- border-box: width đã bao gồm padding và border nên tổng chiều rộng luôn đúng 300px.

Phần 2: Layout 3 cột

Trường hợp A (không dùng border-box):
- Sidebar thực tế = 250 + 30 = 280px
- Content thực tế = 500 + 40 = 540px
- Ads thực tế = 250 + 30 = 280px
=> Tổng = 280 + 540 + 280 = 1100px (vượt 1000px, layout bị vỡ)

Trường hợp B (dùng border-box):
- Sidebar thực tế = 250px
- Content thực tế = 500px
- Ads thực tế = 250px
=> Tổng = 1000px (đúng yêu cầu)

B3,
Target element:
<p id="demo" class="text highlight">Hello World</p>

 Danh sách 10 rules + specificity

1. p { color: black; }
   Specificity: (0,0,1)

2. p:hover { color: brown; }
   Specificity: (0,1,1)

3. .text { color: blue; }
   Specificity: (0,1,0)

4. .highlight { color: green; }
   Specificity: (0,1,0)

5. .text.highlight { color: purple; }
   Specificity: (0,2,0)

6. body p.text { color: teal; }
   Specificity: (0,1,2)

7. p[class="text highlight"] { color: orange; }
   Specificity: (0,1,1)

8. #demo { color: red; }
   Specificity: (1,0,0)

9. #demo.text { color: pink; }
   Specificity: (1,1,0)

10. p#demo.text.highlight { color: gold; }
    Specificity: (1,2,1)



Màu hiển thị cuối cùng: GOLD

Vì rule 10 có specificity cao nhất (1,2,1) nên thắng tất cả rule còn lại.

 Thay đổi thứ tự rules trong CSS file, kết quả không đổi

- Nếu đổi thứ tự nhưng vẫn giữ rule 10 tồn tại, kết quả không đổi vì rule 10 có specificity cao nhất.

D,
https://drive.google.com/file/d/1PQUc_G7cP_ZIi8IbYc3FOwuFdBqSy5Uk/view?usp=drive_link

```
