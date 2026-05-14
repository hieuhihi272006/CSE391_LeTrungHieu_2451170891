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


C1.
 Navigation thay đổi thế nào? (hamburger? dropdown?)
Mobile (375px): Navigation thu gọn mạnh. Thường chỉ còn logo nhỏ + search bar + icon (cart, chat, user). Menu category dạng icon/scroll ngang, không hiện đầy đủ dropdown.
Tablet (768px): Search bar rộng hơn, bắt đầu xuất hiện thêm một số nút/shortcut. Một số menu có thể hiển thị dạng hàng ngang nhưng vẫn bị rút gọn.
Desktop (1440px): Header đầy đủ: logo lớn, search bar, cart, user, và menu category hiển thị rõ. Các mục thường có dropdown khi hover.

 mobile thu gọn thành icon, desktop có dropdown/hover menu đầy đủ.

 Lưới content thay đổi mấy cột?
Mobile (375px): thường 2 cột sản phẩm (card nhỏ).
Tablet (768px): thường 3–4 cột.
Desktop (1440px): thường 5–6 cột (có thể nhiều hơn tùy section).
Elements nào bị ẩn trên mobile?

Trên Shopee mobile thường ẩn hoặc thu gọn:

Sidebar filter (bộ lọc bên trái) → chuyển thành nút “Filter”
Một số banner quảng cáo lớn
Danh mục nhiều cấp (category dropdown đầy đủ)
Một số mục footer chi tiết (footer rút gọn)
Các khối thông tin phụ như “gợi ý theo lịch sử” có thể bị giảm bớt
Font size có thay đổi không?

 Có thay đổi.

Mobile: chữ nhỏ hơn, padding nhỏ, khoảng cách giữa các card hẹp.
Tablet: font tăng nhẹ, khoảng cách thoáng hơn.
Desktop: font lớn hơn (đặc biệt tiêu đề section), khoảng cách và margin rộng hơn.

C2.
Mobile (<768px)
┌────────────────────────────┐
│ HEADER                     │
│ Logo        Call Button 📞 │
├────────────────────────────┤
│ HERO IMAGE (full width)    │
├────────────────────────────┤
│ GRID FOOD (1 column)       │
│ [img]                      │
│ [img]                      │
│ [img]                      │
│ [img]                      │
│ [img]                      │
│ [img]                      │
├────────────────────────────┤
│ RESERVATION FORM           │
│ Date                       │
│ Time                       │
│ People                     │
│ Note                       │
│ [Submit]                   │
├────────────────────────────┤
│ GOOGLE MAP (full width)    │
├────────────────────────────┤
│ FOOTER                     │
└────────────────────────────┘
Không cần ẩn phần quan trọng.
Có thể ẩn bớt thông tin phụ (giờ mở cửa chi tiết, menu dài).
Form nằm dưới grid ảnh để user xem món trước rồi đặt bàn.

Tablet (768px - 1023px)
Wireframe
┌──────────────────────────────────┐
│ HEADER                           │
│ Logo                 Phone 📞    │
├──────────────────────────────────┤
│ HERO IMAGE (full width)          │
├──────────────────────────────────┤
│ GRID FOOD (2 columns)            │
│ [img] [img]                      │
│ [img] [img]                      │
│ [img] [img]                      │
├──────────────────────────────────┤
│ FORM (full width)                │
├──────────────────────────────────┤
│ GOOGLE MAP (full width)          │
├──────────────────────────────────┤
│ FOOTER                           │
└──────────────────────────────────┘
Grid ảnh: 2 cột
Map: nằm dưới form (full width)

Desktop (≥1024px)
Wireframe
┌────────────────────────────────────────────────────┐
│ HEADER                                              │
│ Logo                              Phone 📞          │
├────────────────────────────────────────────────────┤
│ HERO IMAGE (full width)                              │
├────────────────────────────────────────────────────┤
│ GRID FOOD (3 columns)        │ RESERVATION FORM     │
│ [img] [img] [img]            │ Date                 │
│ [img] [img] [img]            │ Time                 │
│                              │ People               │
│                              │ Note                 │
│                              │ Submit               │
├────────────────────────────────────────────────────┤
│ GOOGLE MAP (full width)                              │
├────────────────────────────────────────────────────┤
│ FOOTER                                              │
└────────────────────────────────────────────────────┘
Layout chính: 2 cột
Trái: Grid món ăn
Phải: Form đặt bàn (đóng vai trò sidebar)
Sidebar: Có, chính là form đặt bàn.
Css:
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

.page {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.hero {
  height: 300px;
}

.food-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  padding: 16px;
}

.form {
  padding: 16px;
}

.map {
  height: 300px;
}

.footer {
  padding: 16px;
}

@media (min-width: 768px) {
  .hero {
    height: 400px;
  }

  .food-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .map {
    height: 350px;
  }
}

@media (min-width: 1024px) {
  .page {
    width: min(1200px, 100%);
    margin: 0 auto;
  }

  .hero {
    height: 450px;
  }

  .content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    padding: 16px;
  }

  .food-grid {
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
  }

  .form {
    padding: 0;
  }

  .map {
    height: 400px;
    padding: 16px;
  }
}
```
