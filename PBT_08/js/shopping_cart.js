function createCart() {
  let items = [];
  let discount = { type: null, value: 0, code: null };

  function formatMoney(vnd) {
    return vnd.toLocaleString("vi-VN");
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

  function getSubTotal() {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  function getDiscountMoney(subTotal) {
    if (!discount.type) return 0;

    if (discount.type === "percent") {
      return Math.round(subTotal * discount.value);
    }

    if (discount.type === "fixed") {
      return discount.value > subTotal ? subTotal : discount.value;
    }

    return 0;
  }

  return {
    addItem(product, quantity = 1) {
      if (!product || typeof product.id !== "number")
        return "Lỗi: product không hợp lệ";
      if (typeof product.price !== "number" || product.price < 0)
        return "Lỗi: price không hợp lệ";
      if (typeof quantity !== "number" || quantity <= 0)
        return "Lỗi: quantity không hợp lệ";

      const existing = items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += quantity;
      } else {
        items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity,
        });
      }
    },

    removeItem(productId) {
      items = items.filter((item) => item.id !== productId);
    },

    updateQuantity(productId, newQuantity) {
      if (typeof newQuantity !== "number" || newQuantity < 0)
        return "Lỗi: số lượng không hợp lệ";

      const item = items.find((i) => i.id === productId);

      if (!item) return "Lỗi: không tìm thấy sản phẩm";

      if (newQuantity === 0) {
        items = items.filter((i) => i.id !== productId);
      } else {
        item.quantity = newQuantity;
      }
    },

    getTotal() {
      const subTotal = getSubTotal();
      const discountMoney = getDiscountMoney(subTotal);
      return subTotal - discountMoney;
    },

    applyDiscount(code) {
      if (code === "SALE10") {
        discount = { type: "percent", value: 0.1, code: code };
      } else if (code === "SALE20") {
        discount = { type: "percent", value: 0.2, code: code };
      } else if (code === "FREESHIP") {
        discount = { type: "fixed", value: 30000, code: code };
      } else {
        discount = { type: null, value: 0, code: null };
        return `Mã giảm giá '${code}' không hợp lệ`;
      }
    },

    printCart() {
      const subTotal = getSubTotal();
      const discountMoney = getDiscountMoney(subTotal);
      const total = subTotal - discountMoney;

      console.log(
        "┌────────────────────────────────────────────────────────────┐",
      );
      console.log(
        "│ # │ Sản phẩm         │ SL │ Đơn giá       │ Tổng           │",
      );
      console.log(
        "├────────────────────────────────────────────────────────────┤",
      );

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const lineTotal = item.price * item.quantity;

        let row =
          "│ " +
          padLeft(i + 1, 1) +
          " │ " +
          padRight(item.name, 15) +
          " │ " +
          padLeft(item.quantity, 2) +
          " │ " +
          padLeft(formatMoney(item.price), 12) +
          " │ " +
          padLeft(formatMoney(lineTotal), 14) +
          " │";

        console.log(row);
      }

      console.log(
        "├────────────────────────────────────────────────────────────┤",
      );

      if (discount.type) {
        console.log(
          "│ " +
            padRight("Tạm tính: " + formatMoney(subTotal) + "đ", 58) +
            " │",
        );
        console.log(
          "│ " +
            padRight(
              "Giảm giá (" +
                discount.code +
                "): -" +
                formatMoney(discountMoney) +
                "đ",
              58,
            ) +
            " │",
        );
      }

      console.log(
        "│ " + padRight("Tổng cộng: " + formatMoney(total) + "đ", 58) + " │",
      );
      console.log(
        "└────────────────────────────────────────────────────────────┘",
      );
    },

    getItemCount() {
      return items.reduce((sum, item) => sum + item.quantity, 0);
    },

    clearCart() {
      items = [];
      discount = { type: null, value: 0, code: null };
    },
  };
}

const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);

cart.printCart();

cart.applyDiscount("SALE10");
cart.printCart();

console.log("Số SP:", cart.getItemCount());
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount());
