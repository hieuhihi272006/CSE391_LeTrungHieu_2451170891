```
Câu A1

Thứ tự output:

 text
1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms


Giải thích:

Ban đầu JavaScript thực thi các lệnh đồng bộ (Synchronous) trong Call Stack:


console.log("1 - Start");


Output:

 text
1 - Start


Tiếp theo:


setTimeout(() => console.log("2 - Timeout 0ms"), 0);


Callback được đưa vào Macrotask Queue.

Tiếp theo:


Promise.resolve().then(() => console.log("3 - Promise"));


Callback được đưa vào Microtask Queue.

Tiếp theo:


console.log("4 - End");


Output:

 text
4 - End


Tiếp theo:


setTimeout(() => console.log("5 - Timeout 100ms"), 100);


Được đưa vào Macrotask Queue sau 100ms.

Tiếp theo:


Promise.resolve().then(() => {
    console.log("6 - Promise 2");
    setTimeout(() => console.log("7 - Nested timeout"), 0);
});


Callback được đưa vào Microtask Queue.

Sau khi Call Stack rỗng, Event Loop ưu tiên thực hiện toàn bộ Microtask Queue trước:

Microtask 1:


console.log("3 - Promise");


Output:

 text
3 - Promise


Microtask 2:


console.log("6 - Promise 2");


Output:

 text
6 - Promise 2


Trong callback này có:


setTimeout(() => console.log("7 - Nested timeout"), 0);


Callback được thêm vào Macrotask Queue.

Sau khi Microtask Queue rỗng, Event Loop xử lý Macrotask Queue:

Macrotask đầu tiên:


2 - Timeout 0ms


Tiếp theo:


7 - Nested timeout


Cuối cùng sau khoảng 100ms:


5 - Timeout 100ms


Kết quả cuối cùng:

 text
1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms


Khái niệm:

* Call Stack: nơi thực thi các lệnh đồng bộ.
* Microtask Queue: chứa Promise.then(), queueMicrotask(), MutationObserver.
* Macrotask Queue: chứa setTimeout(), setInterval(), DOM Events, I/O.
* Event Loop: liên tục kiểm tra Call Stack. Khi Stack rỗng, thực hiện toàn bộ Microtask Queue trước, sau đó mới lấy từng tác vụ từ Macrotask Queue để thực thi.

Câu A2

Giải thích từng dòng code:

async function getData() {
try {
const response = await fetch("https://api.example.com/data");

```

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    return data;

} catch (error) {
console.error("Failed:", error.message);
return null;
}

```

}

1. await fetch(...) — fetch trả về gì? Tại sao cần await?

fetch() gửi HTTP request đến server và trả về một Promise.

Ví dụ:

const response = fetch(url);

Lúc này response chưa phải dữ liệu thực tế mà là Promise<Response>.

Cần dùng await:

const response = await fetch(url);

để chờ request hoàn thành và nhận được đối tượng Response.

Nếu không dùng await:

const response = fetch(url);

response sẽ là Promise chứ không phải Response nên không thể truy cập:

response.ok
response.status
response.json()

2. response.ok — Khi nào false?

response.ok là thuộc tính boolean.

response.ok = true khi status nằm trong khoảng:

200 → 299

response.ok = false khi server trả về lỗi.

Ví dụ:

404 Not Found
500 Internal Server Error
403 Forbidden

Do đó đoạn:

if (!response.ok) {
throw new Error(`HTTP ${response.status}`);
}

sẽ tự tạo lỗi khi server trả về mã lỗi.

3. response.json() — Tại sao cần await lần nữa?

response.json() cũng trả về Promise.

Ví dụ:

const data = response.json();

data lúc này là Promise.

Cần:

const data = await response.json();

để chờ quá trình đọc response body và chuyển đổi JSON thành JavaScript object.

Quá trình này bất đồng bộ vì dữ liệu có thể còn đang được tải hoặc cần parse trước khi sử dụng.

4. try...catch bắt những lỗi gì?

try...catch sẽ bắt:

a, Network Error

Ví dụ:

* Mất internet
* Server không tồn tại
* DNS lỗi
* Request bị chặn

fetch sẽ reject Promise và nhảy vào catch.

b, Lỗi tự throw

Ví dụ:

if (!response.ok) {
throw new Error(`HTTP ${response.status}`);
}

Các status như:

404
403
500

sẽ bị bắt bởi catch vì ta chủ động throw.

c, JSON Parse Error

Ví dụ server trả về:

<html>Error</html>

nhưng code gọi:

await response.json();

JSON parse sẽ thất bại và phát sinh exception, catch sẽ bắt được lỗi này.

5. Lưu ý quan trọng

Mặc định fetch KHÔNG coi 404 hay 500 là lỗi.

Ví dụ:

const response = await fetch(url);

vẫn thành công dù server trả:

404 Not Found

Khi đó:

response.ok === false

nên cần tự kiểm tra:

if (!response.ok) {
throw new Error(...);
}

Nếu không kiểm tra, code vẫn tiếp tục chạy mặc dù request thất bại.

Tóm tắt:

* fetch() → trả về Promise<Response>.
* await fetch() → chờ nhận Response.
* response.ok = false với các status ngoài khoảng 200–299.
* response.json() trả về Promise nên cần await lần nữa.
* try...catch bắt được:

  * Network Error.
  * Lỗi tự throw.
  * JSON Parse Error.
* 404 và 500 không tự động gây lỗi trong fetch, phải kiểm tra response.ok.


Câu A3

1. Sơ đồ trạng thái của Promise

           Promise
              |
          Pending
         /       \
        /         \
       v           v
 Fulfilled      Rejected
 (resolve)      (reject)


* Pending: trạng thái ban đầu, Promise đang chờ kết quả.
* Fulfilled: Promise thực hiện thành công, gọi resolve().
* Rejected: Promise thất bại, gọi reject().

Lưu ý: Khi Promise đã chuyển sang Fulfilled hoặc Rejected thì không thể quay lại Pending.

2. Callback Hell là gì?

Callback Hell là tình trạng nhiều callback lồng nhau quá sâu, làm code khó đọc, khó bảo trì và khó xử lý lỗi.

Ví dụ Callback Hell 4 cấp:

function getUser(callback) {
setTimeout(() => {
callback({ id: 1 });
}, 1000);
}

function getOrders(userId, callback) {
setTimeout(() => {
callback(["Order1", "Order2"]);
}, 1000);
}

function getOrderDetail(order, callback) {
setTimeout(() => {
callback({ product: "Laptop" });
}, 1000);
}

function getPayment(detail, callback) {
setTimeout(() => {
callback("Paid");
}, 1000);
}

getUser(user => {
getOrders(user.id, orders => {
getOrderDetail(orders[0], detail => {
getPayment(detail, payment => {
console.log(payment);
});
});
});
});

Đặc điểm:

* Code bị thụt lề liên tục.
* Khó theo dõi luồng xử lý.
* Khó bắt lỗi.
* Khó mở rộng chương trình.

3. Refactor bằng async/await

function getUser() {
return Promise.resolve({ id: 1 });
}

function getOrders(userId) {
return Promise.resolve(["Order1", "Order2"]);
}

function getOrderDetail(order) {
return Promise.resolve({ product: "Laptop" });
}

function getPayment(detail) {
return Promise.resolve("Paid");
}

async function processOrder() {


try {

    const user = await getUser();

    const orders =
        await getOrders(user.id);

    const detail =
        await getOrderDetail(orders[0]);

    const payment =
        await getPayment(detail);

    console.log(payment);

} catch (error) {

    console.error(error);

}


}

processOrder();

Ưu điểm của async/await:

* Code đọc giống code đồng bộ.
* Không bị callback lồng nhau.
* Dễ bảo trì và mở rộng.
* Dễ xử lý lỗi bằng try...catch.
* Luồng thực thi rõ ràng hơn Promise chaining hoặc Callback Hell.


Câu C1

1. Network Errors (mất mạng giữa chừng)

Nguyên nhân:

* Mất kết nối Internet.
* DNS lỗi.
* Server không thể truy cập.
* Request bị chặn.

Cách xử lý:

* Hiển thị thông báo thân thiện cho người dùng.
* Cho phép Retry.
* Ghi log lỗi.
* Không làm crash ứng dụng.

Ví dụ:

async function getProducts() {
try {

```

    const response =
        await fetch("/api/products");

    return await response.json();

} catch (error) {

    console.error(error);

    alert(
        "Không thể kết nối tới máy chủ. Vui lòng thử lại."
    );

    return null;

}

```

}

2. API Errors

404 Not Found

Nguyên nhân:

* URL sai.
* Sản phẩm không tồn tại.

Xử lý:

if (response.status === 404) {
throw new Error("Product not found");
}

500 Internal Server Error

Nguyên nhân:

* Lỗi phía server.

Xử lý:

if (response.status === 500) {
throw new Error("Server error");
}

Thông báo:

"Máy chủ đang gặp sự cố. Vui lòng thử lại sau."

429 Too Many Requests

Nguyên nhân:

* Gửi quá nhiều request trong thời gian ngắn.

Xử lý:

if (response.status === 429) {
throw new Error("Too many requests");
}

Thông báo:

"Bạn đang thao tác quá nhanh. Vui lòng thử lại sau vài giây."

3. Timeout (> 10 giây)

Hàm fetchWithTimeout:

async function fetchWithTimeout(url, ms = 10000) {

```

const timeoutPromise =
new Promise((\_, reject) => {

        setTimeout(() => {

            reject(
                new Error("Request timeout")
            );

        }, ms);

    });

return Promise.race([
fetch(url),
timeoutPromise
]);

```

}

Sử dụng:

try {

```

const response =
await fetchWithTimeout(
"/api/products",
10000
);

```

} catch (error) {

```

console.error(error.message);

```

}

Giải thích:

* fetch(url) và timeoutPromise chạy song song.
* Promise.race() lấy Promise hoàn thành đầu tiên.
* Nếu quá 10 giây sẽ báo timeout.

4. Retry Logic (thử lại 3 lần)

async function fetchWithRetry(
url,
maxRetries = 3
) {

```

let attempt = 0;

while (attempt <= maxRetries) {

    try {

        const response =
            await fetch(url);

        return response;

    } catch (error) {

        attempt++;

        if (attempt > maxRetries) {
            throw error;
        }

        console.log(
            `Retry ${attempt}`
        );
    }

}

```

}

Sử dụng:

try {

```

const response =
await fetchWithRetry(
"/api/products",
3
);

```

} catch (error) {

```

console.error(
"All retries failed"
);

```

}

Giải thích:

* Nếu lỗi mạng xảy ra thì thử lại.
* Tối đa 3 lần.
* Nếu vẫn thất bại thì throw lỗi.

Tóm tắt chiến lược E-Commerce:

* Network Error → Retry + thông báo người dùng.
* 404 → Hiển thị "Không tìm thấy dữ liệu".
* 500 → Báo lỗi server.
* 429 → Yêu cầu chờ rồi thử lại.
* Timeout → Hủy request và báo timeout.
* Retry → Tự động thử lại các lỗi tạm thời.


Câu C2

Bảng so sánh:

| Method               | Khi nào resolve?            | Khi nào reject?            | Use case                          |
| -------------------- | --------------------------- | -------------------------- | --------------------------------- |
| Promise.all()        | Tất cả Promise thành công   | Chỉ cần 1 Promise thất bại | Cần toàn bộ dữ liệu               |
| Promise.allSettled() | Khi tất cả Promise hoàn tất | Không bao giờ reject       | Muốn biết kết quả từng request    |
| Promise.race()       | Promise đầu tiên resolve    | Promise đầu tiên reject    | Timeout, chọn phản hồi nhanh nhất |
| Promise.any()        | Chỉ cần 1 Promise resolve   | Khi tất cả Promise reject  | Dùng server dự phòng              |

1. Promise.all()

Ví dụ trang Product Detail cần:

* Product Info
* Reviews
* Related Products

const [
product,
reviews,
related
] = await Promise.all([
fetch("/api/product/1")
.then(r => r.json()),
fetch("/api/reviews/1")
.then(r => r.json()),
fetch("/api/related/1")
.then(r => r.json())
]);

Nếu một API lỗi thì toàn bộ Promise.all() reject.

2. Promise.allSettled()

Ví dụ Dashboard:

* User Profile
* Notifications
* Recommendations

const results =
await Promise.allSettled([
fetch("/api/profile"),
fetch("/api/notifications"),
fetch("/api/recommendations")
]);

Kết quả:

[
{ status: "fulfilled" },
{ status: "rejected" },
{ status: "fulfilled" }
]

Ứng dụng vẫn hiển thị dữ liệu có sẵn dù một API thất bại.

3. Promise.race()

Ví dụ timeout API:

const response =
await Promise.race([
fetch("/api/products"),
new Promise((_, reject) =>
setTimeout(
() =>
reject(
new Error("Timeout")
),
10000
)
)
]);

Nếu API phản hồi trước:

→ Thành công.

Nếu timeout xảy ra trước:

→ Reject.

4. Promise.any()

Ví dụ hệ thống có nhiều CDN:

const image =
await Promise.any([
fetch("cdn1/image.jpg"),
fetch("cdn2/image.jpg"),
fetch("cdn3/image.jpg")
]);

Chỉ cần một CDN hoạt động là đủ.

Promise.any() chỉ reject khi:

* cdn1 lỗi
* cdn2 lỗi
* cdn3 lỗi

tức là tất cả Promise đều reject.

Tóm tắt:

* Promise.all() → cần tất cả thành công.
* Promise.allSettled() → cần biết kết quả của từng Promise.
* Promise.race() → lấy Promise hoàn thành đầu tiên.
* Promise.any() → chỉ cần một Promise thành công.


```
