```
A1.
DOM TREE:
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
└── main
    ├── form#todoForm
    │   ├── input#todoInput[type="text"]
    │   └── button[type="submit"]
    │       └── "Add"
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"


1. Chọn thẻ <h1>
document.querySelector("#app h1");

2. Chọn input trong form
document.querySelector("#todoForm input");

3. Chọn tất cả .todo-item
document.querySelectorAll(".todo-item");

4. Chọn link đang active
document.querySelector("nav a.active");

5. Chọn <li> đầu tiên trong #todoList
document.querySelector("#todoList li:first-child");

6. Chọn tất cả <a> bên trong <nav>
document.querySelectorAll("nav a");

A2.
innerHTML dùng để đọc/ghi HTML thật bên trong element (parse thành thẻ HTML).
textContent dùng để đọc/ghi text thuần, không parse HTML, hiển thị đúng ký tự.

Ví dụ:

result.innerHTML = "<b>Hello</b>";

result.textContent = "<b>Hello</b>";


innerHTML gây XSS

Vì nó chèn trực tiếp HTML vào trang, nên hacker có thể inject code chạy được (script, event handler như onerror, onclick...).
Ví dụ user nhập:

<img src=x onerror="alert('Hacked!')">

Code nguy hiểm:

const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput;

Khi render ra DOM, thẻ <img> được tạo thật và onerror sẽ chạy → XSS.

Cách sửa an toàn

Dùng textContent:

const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput;

Kết quả: nó chỉ hiển thị chữ <img src=...> chứ không chạy code.

A3.
 Click vào button (#btn) khi KHÔNG stopPropagation():
 Thứ tự bubbling: btn -> inner -> outer

 Output:
BUTTON
INNER
OUTER


 Nếu uncomment e.stopPropagation():
 Event không bubble lên parent nữa

 Output:
BUTTON

C1.Câu C1

Các lỗi trong chương trình:

1. Sai tên sự kiện:

 
addEventListener("onclick", ...)

Sửa thành:

 
addEventListener("click", ...)

2. Gán giá trị cho phần tử DOM sai:

 
countDisplay = count;

Sửa thành:

 
countDisplay.textContent = count;


3. Biến `countDisplay` được khai báo bằng `const` nhưng lại bị gán lại:

 
countDisplay = count;

Cần cập nhật nội dung phần tử thay vì gán lại biến.

4. Xóa history sai:

 
historyList.innerHTML = null;

Sửa thành:

 
historyList.innerHTML = "";

5. Gọi hàm remove sai:

 
item.remove;

Sửa thành:

 
item.remove();

6. Dữ liệu lấy từ localStorage có kiểu string:

 
count = localStorage.getItem("count");

Sửa thành:


count = Number(localStorage.getItem("count")) || 0;


7. Chưa khôi phục lịch sử từ localStorage khi tải lại trang:

 
historyList.innerHTML =
    localStorage.getItem("history") || "";

8. Sau khi load history từ localStorage, các phần tử `<li>` không còn sự kiện click để xóa.
   Cần gắn lại event listener cho các phần tử được khôi phục.

9. Nút Decrement không lưu lịch sử thay đổi count như Increment.
   Cần bổ sung đoạn thêm history sau khi giảm count.

Câu C2

1. Tại sao bind event lên 1000 elements riêng lẻ là bad practice?

Khi gắn event listener cho 1000 phần tử, trình duyệt phải tạo và quản lý 1000 event listener khác nhau. Điều này làm tăng mức sử dụng bộ nhớ, giảm hiệu năng và gây khó khăn khi thêm hoặc xóa các phần tử động.

Ví dụ:

  
items.forEach(item => {
    item.addEventListener("click", handleClick);
});
 
Nếu có 1000 item thì sẽ có 1000 event listener.

2. Event Delegation giải quyết như thế nào?

Event Delegation tận dụng cơ chế Event Bubbling. Thay vì gắn listener cho từng phần tử con, chỉ cần gắn một listener lên phần tử cha.

Ví dụ:

  
container.addEventListener("click", (event) => {
    if (event.target.matches(".item")) {
        console.log(event.target.textContent);
    }
});
 
Ưu điểm:

* Chỉ cần 1 event listener thay vì 1000 listener.
* Tiết kiệm bộ nhớ.
* Dễ quản lý.
* Tự động hoạt động với các phần tử được thêm động sau này.

3. Refactor sử dụng DocumentFragment

Code ban đầu:

  
for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    document.body.appendChild(div);
}
 
Code cải tiến:

  
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}

document.body.appendChild(fragment);
 
4. Tại sao DocumentFragment nhanh hơn?

Trong code ban đầu, mỗi lần gọi:

  
document.body.appendChild(div);
 
trình duyệt có thể phải cập nhật DOM, tính toán lại layout (reflow) và vẽ lại giao diện (repaint).

Với 1000 phần tử sẽ xảy ra rất nhiều lần cập nhật DOM.

DocumentFragment là một vùng chứa tạm thời nằm ngoài DOM thực. Các phần tử được thêm vào fragment sẽ không làm trình duyệt reflow ngay lập tức. Sau khi hoàn tất, chỉ cần:

  
document.body.appendChild(fragment);
 
DOM được cập nhật một lần duy nhất, giảm số lần reflow và repaint, từ đó tăng hiệu năng đáng kể.

```
