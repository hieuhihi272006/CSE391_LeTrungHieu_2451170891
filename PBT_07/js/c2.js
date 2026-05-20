const orders = [
  { name: "Phở bò", price: 65000, qty: 2 },
  { name: "Trà đá", price: 5000, qty: 3 },
  { name: "Bún chả", price: 55000, qty: 1 },
];

const output = document.getElementById("output");

function formatMoney(vnd) {
  return vnd.toLocaleString("vi-VN") + "đ";
}

function padRight(text, width) {
  text = String(text);
  if (text.length >= width) return text.slice(0, width);
  return text + " ".repeat(width - text.length);
}

function padLeft(text, width) {
  text = String(text);
  if (text.length >= width) return text.slice(0, width);
  return " ".repeat(width - text.length) + text;
}

function restaurantBill(items, isTip = true, day = new Date().getDay()) {
  let subTotal = 0;

  for (let i = 0; i < items.length; i++) {
    let item = items[i];

    if (typeof item.price !== "number" || typeof item.qty !== "number") {
      output.textContent = "Lỗi: price hoặc qty không hợp lệ";
      return;
    }

    if (item.price < 0 || item.qty <= 0) {
      output.textContent = "Lỗi: giá hoặc số lượng không hợp lệ";
      return;
    }

    subTotal += item.price * item.qty;
  }

  let discountPercent = 0;

  if (subTotal > 1000000) discountPercent = 15;
  else if (subTotal > 500000) discountPercent = 10;

  if (day === 3) discountPercent += 5;

  let discountMoney = Math.round((subTotal * discountPercent) / 100);
  let afterDiscount = subTotal - discountMoney;

  let vat = Math.round(afterDiscount * 0.08);

  let tip = 0;
  if (isTip) tip = Math.round(afterDiscount * 0.05);

  let totalPay = afterDiscount + vat + tip;

  let bill = "";
  bill += "╔══════════════════════════════════════╗\n";
  bill += "║          HÓA ĐƠN NHÀ HÀNG            ║\n";
  bill += "╠══════════════════════════════════════╣\n";

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let itemTotal = item.price * item.qty;

    let line =
      (i + 1) +
      ". " +
      padRight(item.name, 10) +
      " x" +
      item.qty +
      "  @" +
      Math.round(item.price / 1000) +
      "k  = " +
      Math.round(itemTotal / 1000) +
      "k";

    bill += "║ " + padRight(line, 36) + " ║\n";
  }

  bill += "╠══════════════════════════════════════╣\n";
  bill += "║ " + padRight("Tổng cộng:" + padLeft(formatMoney(subTotal), 25), 36) + " ║\n";
  bill += "║ " + padRight(`Giảm giá (${discountPercent}%):` + padLeft(formatMoney(discountMoney), 17), 36) + " ║\n";
  bill += "║ " + padRight("VAT (8%):" + padLeft(formatMoney(vat), 25), 36) + " ║\n";

  if (isTip) {
    bill += "║ " + padRight("Tip (5%):" + padLeft(formatMoney(tip), 25), 36) + " ║\n";
  } else {
    bill += "║ " + padRight("Tip (0%):" + padLeft(formatMoney(0), 25), 36) + " ║\n";
  }

  bill += "╠══════════════════════════════════════╣\n";
  bill += "║ " + padRight("THANH TOÁN:" + padLeft(formatMoney(totalPay), 23), 36) + " ║\n";
  bill += "╚══════════════════════════════════════╝\n";

  output.textContent = bill;
}