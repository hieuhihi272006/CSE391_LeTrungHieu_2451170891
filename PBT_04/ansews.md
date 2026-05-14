```
A1.
Không có ancestor nào được “positioned” (tức tất cả đều static).

Lúc đó nó sẽ tham chiếu tới initial containing block (thường là viewport hoặc root document).

Nhiều bạn gọi là “tham chiếu body”, nhưng chính xác là tham chiếu khung gốc của trang.

Khái niệm: "nearest positioned ancestor"

Nearest positioned ancestor = phần tử cha gần nhất (tính từ element đi lên) mà có

A2.
Trường hợp 1
| 1 | 2 | 3 | 4 |
Trường hợp 2
| 1 | 2 |
| 3 | 4 |
| 5 | 6 |
Trường hợp 3
|1            2            3|
        (tất cả nằm giữa theo chiều dọc)
Trường hợp 4
| item1 (200px) | gap | item2 (1fr) | gap | item3 (200px) |
Trường hợp 5
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 |   |   |

C1,
1 Navigation bar ngang (logo + menu + buttons)

 Dùng Flexbox (hoặc kết hợp Flexbox)

Lý do: Navbar là layout 1 chiều (1 hàng), cần căn trái–giữa–phải, vertical center dễ với align-items: center.

2 Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)

 Dùng Grid

Lý do: Đây là layout 2 chiều (hàng + cột). Grid tạo 3 cột đều nhau cực nhanh bằng grid-template-columns: repeat(3, 1fr) và tự xuống hàng khi ảnh nhiều.

3 Layout blog: main content + sidebar

 Dùng Grid (hoặc Flexbox cũng được, nhưng Grid tốt hơn)

Lý do: Đây là layout chia vùng rõ ràng (main + sidebar), Grid quản lý cột ổn định hơn và dễ responsive.

4 Footer với 4 cột thông tin

 Dùng Grid hoặc Flexbox

Tốt nhất: Grid

Lý do: Footer có nhiều cột đều nhau → Grid tạo 4 cột nhanh, dễ wrap khi màn hình nhỏ.

5 Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)

 Dùng Flexbox

Lý do: Bố cục card là 1 chiều theo cột, và dùng flex-direction: column + margin-top: auto để đẩy nút xuống đáy rất chuẩn.
C2.

Lỗi 1: Cards không đều chiều cao → nút "Mua" nhảy lên/xuống
❌ Hiện tượng lỗi
Mỗi card có nội dung dài/ngắn khác nhau → chiều cao card khác nhau
Nút .btn nằm ngay sau text nên bị đẩy lên/xuống tùy card
Nguyên nhân

Card chưa dùng flex-column để “đẩy nút xuống đáy”.
Mặc định các phần tử trong card xếp theo flow bình thường → không kiểm soát được vị trí nút.

✅ Cách sửa

Lỗi 1: Cards không đều chiều cao → nút "Mua" nhảy lên/xuống
❌ Hiện tượng lỗi
Mỗi card có nội dung dài/ngắn khác nhau → chiều cao card khác nhau
Nút .btn nằm ngay sau text nên bị đẩy lên/xuống tùy card
Nguyên nhân

Card chưa dùng flex-column để “đẩy nút xuống đáy”.
Mặc định các phần tử trong card xếp theo flow bình thường → không kiểm soát được vị trí nút.

✅ Cách sửa

Lỗi 1: Cards không đều chiều cao → nút "Mua" nhảy lên/xuống
Hiện tượng lỗi
Mỗi card có nội dung dài/ngắn khác nhau → chiều cao card khác nhau
Nút .btn nằm ngay sau text nên bị đẩy lên/xuống tùy card
Nguyên nhân

Card chưa dùng flex-column để “đẩy nút xuống đáy”.
Mặc định các phần tử trong card xếp theo flow bình thường → không kiểm soát được vị trí nút.
Cho .card thành flex container dạng column và đẩy nút xuống đáy bằng margin-top: auto.

Code sửa
.card {
    width: 30%;
    margin: 1.5%;
    display: flex;
    flex-direction: column;
}

.card .btn {
    margin-top: auto;
    padding: 10px;
}

Nếu muốn card bằng chiều cao nhau theo hàng:

.card-container {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
}


Lỗi 2: Muốn items nằm giữa ngang + dọc trong container 100vh nhưng vẫn dính góc trái
Hiện tượng lỗi

.hero-content vẫn nằm góc trái trên.

Nguyên nhân

Bạn mới set display: flex nhưng chưa set:

justify-content (căn ngang theo trục chính)
align-items (căn dọc theo trục phụ)

Mặc định:

justify-content: flex-start
align-items: stretch
 Cách sửa
Code sửa
.hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-content {
    text-align: center;
}


Lỗi 3: Sidebar bị co lại khi content quá dài
 Hiện tượng lỗi

Sidebar bị ép nhỏ hơn 250px khi content dài hoặc viewport nhỏ.

Nguyên nhân

Trong Flexbox, item mặc định có:

flex-shrink: 1;

Tức là sidebar có thể bị co lại để nhường chỗ cho content.

 Cách sửa

Không cho sidebar shrink.

Code sửa
.layout {
    display: flex;
}

.sidebar {
    width: 250px;
    flex-shrink: 0;
}

.content {
    flex: 1;
}

Hoặc viết gọn:

.sidebar {
    flex: 0 0 250px;
}
```
