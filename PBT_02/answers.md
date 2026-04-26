A
A1.
type="text" → Ô nhập chữ 1 dòng → Không validation đặc biệt (chỉ có required/minlength/maxlength nếu thêm) → Dùng nhập tên sản phẩm khi search, họ tên khách hàng.
type="password" → Ô nhập chữ nhưng ẩn ký tự (\*\*\*\*) → Không tự kiểm tra mạnh/yếu, chỉ kiểm tra required/minlength nếu thêm → Dùng cho đăng nhập / đăng ký tài khoản.
type="email" → Ô nhập text → Tự kiểm tra đúng định dạng email (có @, domain) → Dùng cho form đăng ký, checkout nhận hóa đơn.
type="number" → Ô nhập số, có thể có nút tăng/giảm (spinner) → Tự chặn ký tự chữ, hỗ trợ min/max/step → Dùng nhập số lượng sản phẩm, mã giảm giá dạng số, tuổi khách.
type="tel" → Ô nhập số điện thoại (hiển thị bàn phím số trên mobile) → Không validation chặt (chỉ hỗ trợ pattern nếu thêm) → Dùng nhập số điện thoại giao hàng.
type="date" → Ô chọn ngày (calendar picker) → Tự kiểm tra định dạng ngày hợp lệ, hỗ trợ min/max → Dùng chọn ngày nhận hàng, ngày sinh khi tạo tài khoản.
type="time" → Ô chọn giờ (time picker) → Validation giờ hợp lệ (HH:MM), hỗ trợ min/max/step → Dùng chọn khung giờ giao hàng.
type="checkbox" → Ô tick vuông (check/uncheck) → Validation kiểu boolean (required nếu bắt buộc) → Dùng chọn đồng ý điều khoản, chọn lọc sản phẩm (còn hàng, freeship…).
type="radio" → Nút tròn chọn 1 trong nhiều lựa chọn → Tự đảm bảo mỗi nhóm name chỉ chọn 1 → Dùng chọn phương thức thanh toán (COD, Visa, Momo), chọn giới tính.
type="file" → Nút chọn file + hiện tên file đã chọn → Validation theo accept (jpg/png/pdf…), multiple → Dùng upload ảnh đánh giá sản phẩm, upload avatar người dùng, upload hóa đơn khi hoàn tiền.

A2.
Cả 5 trường hợp khi submit đêu không được, lý do:
Trường hợp 1: Vì required bắt buộc input không được rỗng. Value="" nghĩa là trường đang trống.
Trường hợp 2: Vì type="email" có built-in validation: Chuỗi phải giống format email (phải có @ và domain).
Trường hợp 3: Vì value="15" vượt quá max="10". Browser tự kiểm tra ràng buộc min/max cho number.
Trường hợp 4: Vì pattern="[0-9]{10}" nghĩa là:chỉ được chứa số [0-9], đúng 10 chữ số, phải match toàn bộ input, nhưng abc123 chứa chữ và chỉ có 3 số → sai.
Trường hợp 5: Vì minlength="8" yêu cầu ít nhất 8 ký tự, chuỗi "123" chỉ có 3 ký tự.

A3.
1, Screen reader (NVDA, JAWS...) sẽ đọc theo kiểu:

"Email, edit text"

Tức là người khiếm thị biết chính xác ô này dùng để nhập gì.

Nếu bạn không có label hoặc for không khớp với id, screen reader có thể chỉ đọc:

"edit text"

=> Người dùng không biết phải nhập email hay nhập cái gì.

Khi click vào chữ "Email" thì con trỏ sẽ focus vào ô input.
Điều này giúp UX tốt hơn cho cả người bình thường.
2, Dùng khi bạn có một nhóm input liên quan nhau (thường là radio/checkbox) và muốn screen reader hiểu chúng thuộc cùng 1 nhóm.

Ví dụ: giới tính, phương thức thanh toán, lựa chọn giao hàng...
vd:
&lt;fieldset&gt;
&lt;legend&gt;Phương thức thanh toán&lt;/legend&gt;

&lt;label&gt;
&lt;input type="radio" name="payment" value="cod"&gt;
Thanh toán khi nhận hàng (COD)
&lt;/label&gt;

&lt;label&gt;
&lt;input type="radio" name="payment" value="momo"&gt;
Ví MoMo
&lt;/label&gt;

&lt;label&gt;
&lt;input type="radio" name="payment" value="visa"&gt;
Thẻ Visa/MasterCard
&lt;/label&gt;
&lt;/fieldset&gt;

3,
aria-label Dùng khi element KHÔNG có text mô tả rõ ràng.
KHÔNG nên dùng aria-label khi đã có label vì: label là cách chuẩn HTML, được browser hỗ trợ tự nhiên, dễ maintain.

A4.
1,
loading="lazy" :
(1) Tăng tốc độ load trang

Trang hiển thị nhanh hơn vì không tải tất cả ảnh cùng lúc.

(2) Giảm dung lượng tải ban đầu

Tiết kiệm data cho người dùng (quan trọng trên mobile).

(3) Cải thiện hiệu năng

Giảm số request mạng và giảm tải CPU/RAM.

KHÔNG nên dùng loading="lazy" khi dùng cho ảnh quan trọng hiển thị ngay đầu trang, banner, logo

2,
Nên cung cấp nhiều source trong video vì :
Không phải browser nào cũng hỗ trợ cùng 1 format video. Nếu browser không chơi được format đầu tiên → nó sẽ tự thử format tiếp theo.
3 format video web phổ biến:
MP4 (H.264/AAC) → phổ biến nhất, hỗ trợ rộng nhất
WebM (VP8/VP9/Opus) → tối ưu web, nhẹ
Ogg / OGV (Theora/Vorbis) → ít dùng hơn nhưng vẫn là chuẩn mở

3,
alt trong img dùng để :
-Screen reader đọc cho người khiếm thị
-Hiện chữ thay thế khi ảnh bị lỗi không load
-Hỗ trợ SEO (Google hiểu ảnh)

alt iPhone 16: iPhone 16 màu đen, phiên bản 256GB
alt Ảnh trang trí: ""
alt Ảnh biểu đồ doanh thu Q1/2026: Biểu đồ doanh thu Q1/2026: Tháng 1 đạt 2 tỷ, tháng 2 đạt 3 tỷ, tháng 3 đạt 4 tỷ đồng

A5,
Cách 1: Dùng khi ảnh đứng một mình, chỉ là nội dung đơn giản, không cần caption, không cần nhóm nội dung liên quan.
Cách 2: Dùng khi ảnh là một “đối tượng nội dung” hoàn chỉnh, thường đi kèm:
chú thích (caption)
giá tiền / mô tả ngắn
nguồn ảnh
giải thích dữ liệu
có ý nghĩa độc lập, có thể tách ra vẫn hiểu

C
C1.

Lỗi 1: Dòng 2 — Input "Tên" không có label for="...", thiếu id, name, và required → vi phạm accessibility + validation
Sửa:

&lt;label for="name"&gt;Tên:&lt;/label&gt;
&lt;input type="text" id="name" name="name" required&gt;

Lỗi 2: Dòng 4 — Input email không có label, thiếu id, name, và required
Sửa:

&lt;label for="email"&gt;Email:&lt;/label&gt;
&lt;input type="email" id="email" name="email" placeholder="Email của bạn" required&gt;

Lỗi 3: Dòng 6 — Password không có label, thiếu id, name, và required
Sửa:

&lt;label for="password"&gt;Mật khẩu:&lt;/label&gt;
&lt;input type="password" id="password" name="password" placeholder="Mật khẩu" required minlength="6"&gt;

Lỗi 4: Dòng 7 — Nhập lại mật khẩu không có label, thiếu id, name, và required
Sửa:

&lt;label for="confirmPassword"&gt;Nhập lại mật khẩu:&lt;/label&gt;
&lt;input type="password" id="confirmPassword" name="confirmPassword" placeholder="Nhập lại mật khẩu" required minlength="6"&gt;

Lỗi 5: Dòng 9 — Phone dùng type="text" và có value="0901234567" → sai best practice (tự điền sẵn dữ liệu), không có validation
Sửa:

&lt;label for="phone"&gt;Số điện thoại:&lt;/label&gt;
&lt;input type="tel" id="phone" name="phone" placeholder="0901234567" required pattern="0[0-9]{9}"&gt;

Lỗi 6: Dòng 11 — select không có label, thiếu id, name, và không có option mặc định → dễ bị chọn nhầm
Sửa:

&lt;label for="city"&gt;Thành phố:&lt;/label&gt;
&lt;select id="city" name="city" required&gt;
&lt;option value=""&gt;-- Chọn thành phố --&lt;/option&gt;
&lt;option value="hn"&gt;Hà Nội&lt;/option&gt;
&lt;option value="hcm"&gt;TP.HCM&lt;/option&gt;
&lt;/select&gt;

Lỗi 7: Dòng 16 — Checkbox đồng ý điều khoản bị thiếu input type="checkbox" và label không liên kết → lỗi validation + accessibility
Sửa:

&lt;label&gt;
&lt;input type="checkbox" id="agree" name="agree" required&gt;
Tôi đồng ý điều khoản
&lt;/label&gt;

Lỗi 8: Dòng 20 — form thiếu action và method → sai best practice (mặc định GET)
Sửa:

&lt;form action="#" method="post"&gt;

C2.
1, Pattern regex cho CMND/CCCD và Số tài khoản

CMND/CCCD (đúng 12 chữ số):

pattern="^[0-9]{12}$"

Số tài khoản (10–15 chữ số):

pattern="^[0-9]{10,15}$"

2,HTML5 validation Chưa đủ an toàn.

Vì HTML5 validation chỉ chạy ở trình duyệt (client-side), người dùng có thể:

tắt validation bằng DevTools
sửa HTML trực tiếp
gửi request bằng Postman / curl
giả mạo dữ liệu gửi lên server

3, loại validation HTML5 KHÔNG thể làm được (phải dùng JavaScript)

Loại 1: So sánh giữa 2 field

Ví dụ: nhập lại PIN phải giống PIN

Loại 2: Validation theo logic động / điều kiện

Ví dụ: nếu chọn “Visa” thì số thẻ phải đúng format Visa

Loại 3: Kiểm tra dữ liệu với hệ thống/server

Ví dụ: email đã tồn tại chưa, số tài khoản có hợp lệ không, CCCD đã đăng ký chưa

4, 2 rủi ro bảo mật nếu chỉ validate Frontend mà không validate Backend

Rủi ro 1: Người dùng có thể gửi dữ liệu sai / độc hại vào server

ví dụ SQL Injection, XSS payload, ký tự nguy hiểm

Rủi ro 2: Bypass quy trình nghiệp vụ

ví dụ nhập số tài khoản 1 ký tự vẫn tạo được tài khoản
gửi PIN không đúng format nhưng server vẫn lưu → gây lỗi hệ thống hoặc gian lận
