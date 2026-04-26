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
```
