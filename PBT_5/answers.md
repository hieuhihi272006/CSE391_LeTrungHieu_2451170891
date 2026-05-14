```
A1,
1.
<meta name="viewport" content="width=device-width, initial-scale=1.0">
name="viewport"

Báo cho trình duyệt rằng đây là cấu hình liên quan đến viewport (khung nhìn trên thiết bị).

content="width=device-width"
width đặt chiều rộng viewport.
device-width nghĩa là chiều rộng viewport bằng đúng chiều rộng màn hình thiết bị (ví dụ iPhone 390px, 414px…).

Giúp trang web không bị “thu nhỏ” như desktop.

initial-scale=1.0
Quy định mức zoom ban đầu khi tải trang.
1.0 nghĩa là không zoom, hiển thị đúng tỉ lệ 1:1.

2.
Nếu không có <meta viewport>:

iPhone sẽ giả lập trang web như đang hiển thị trên màn hình desktop (~980px)
Trang web bị zoom-out (thu nhỏ lại) để vừa màn hình
Chữ và nút sẽ rất nhỏ, khó bấm
Layout responsive/media query có thể hoạt động sai hoặc không đúng như mong muốn

Người dùng phải zoom tay mới đọc được.

3.
 Mobile-First vs Desktop-First khác nhau thế nào?
Mobile-First
Viết CSS mặc định cho màn hình nhỏ trước (mobile).
Sau đó dùng min-width để nâng cấp giao diện cho màn hình lớn hơn.
Ví dụ Mobile-First (breakpoint 768px)
.container {
  width: 100%;
  padding: 10px;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
    padding: 20px;
  }
}
Desktop-First
Viết CSS mặc định cho desktop trước.
Sau đó dùng max-width để sửa lại cho mobile.
Ví dụ Desktop-First (breakpoint 768px)
.container {
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 10px;
  }
}
Tại sao Mobile-First được khuyên dùng?

Lý do chính:

Phù hợp thực tế vì đa số người dùng truy cập bằng điện thoại
Code gọn hơn: mặc định là layout đơn giản, sau đó chỉ thêm tính năng cho màn hình lớn
Hiệu năng tốt hơn (mobile tải ít CSS hơn)
Dễ mở rộng (từ nhỏ → lớn dễ hơn lớn → nhỏ)
Mobile-first giúp thiết kế theo hướng tối ưu trải nghiệm mobile trước, rồi mới nâng cấp lên tablet/desktop.

A2.
Breakpoints chuẩn (Bootstrap 5)
1 Extra small (xs)
< 576px
Thiết bị: điện thoại nhỏ
Grid sản phẩm: 1 cột
2 Small (sm)
≥ 576px
Thiết bị: điện thoại lớn
Grid sản phẩm: 2 cột
3 Medium (md)
≥ 768px
Thiết bị: tablet
Grid sản phẩm: 2–3 cột
4 Large (lg)
≥ 992px
Thiết bị: laptop
Grid sản phẩm: 3–4 cột
5 Extra large (xl)
≥ 1200px
Thiết bị: desktop
Grid sản phẩm: 4 cột
6 Extra extra large (xxl)
≥ 1400px
Thiết bị: màn hình lớn (wide desktop)
Grid sản phẩm: 5–6 cột

A3.
mặc định: width: 100%
≥576px: 540px
≥768px: 720px
≥992px: 960px
≥1200px: 1140px

A4.
Variables ($primary-color) Lợi ích: dễ đổi theme, tránh lặp code.
Nesting (viết CSS lồng nhau) Lợi ích: code gọn, dễ đọc theo cấu trúc HTML.
Mixins (@mixin, @include) Lợi ích: tái sử dụng layout/style nhiều nơi.
@extend / Inheritance Lợi ích: tránh lặp code khi các component giống nhau.

 Tại sao trình duyệt KHÔNG đọc được file .scss?

Vì .scss không phải CSS chuẩn, nó chứa cú pháp đặc biệt như:

biến $color
nesting
mixin
extend

Trình duyệt chỉ hiểu CSS thuần (.css).

 Cần bước gì để chuyển SCSS → CSS?

Bạn phải compile (biên dịch) SCSS thành CSS bằng tool như:

Dart Sass (sass)
Node-sass (cũ)
Webpack / Vite / Parcel

```
