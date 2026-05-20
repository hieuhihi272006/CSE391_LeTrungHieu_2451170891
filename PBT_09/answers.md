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
```
