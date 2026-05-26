let text = "";
document.getElementById("text").addEventListener("change", () => {
  text = document.getElementById("text").value;
});

let count = 0;
function showCount() {
  document.getElementById("count").innerText = count;
}
const btnAdd = document.getElementById("btn__add");
btnAdd.addEventListener("click", () => {
  if (text != "") {
    // document.getElementById("list__event").insertAdjacentHTML(
    //   "beforeend",
    //   `<div class="list-group-item d-flex justify-content-between event__item">
    //   <div class="d-flex align-items-center">
    //     <input
    //       class="form-check-input mt-0 mx-3"
    //       type="checkbox"
    //       value=""
    //     />
    //     <input type="text" class="input__edit fs-5" value="${text}" />
    //   </div>

    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="34"
    //     height="34"
    //     fill="red"
    //     class="bi bi-x icon-delete"
    //     viewBox="0 0 16 16"
    //   >
    //     <path
    //       d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
    //     />
    //   </svg>
    // </div>`,
    // );

    let item = document.createElement("div");
    item.className =
      "list-group-item d-flex justify-content-between event__item";
    item.innerHTML = `<div class="d-flex align-items-center">
         <input
          class="form-check-input mt-0 mx-3"
          type="checkbox"
          value=""
         />
         <input type="text" class="input__edit fs-5" value="${text}" />
       </div>

      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="34"
         height="34"
         fill="red"
         class="bi bi-x icon-delete"
         viewBox="0 0 16 16"
       >
         <path
           d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
         />
       </svg>`;

    document.getElementById("list__event").appendChild(item);
    count++;
    showCount();
  }
  document.getElementById("text").value = "";
  text = "";
});

const list = document.getElementById("list__event");
list.addEventListener("click", function (e) {
  if (e.target.classList.contains("icon-delete")) {
    e.target.closest(".event__item").remove();
    count--;
    showCount();
  }
});

const btnAll = document.getElementById("btn__all");
const btnActive = document.getElementById("btn__active");
const btnCompleted = document.getElementById("btn__completed");

btnActive.addEventListener("click", () => {
  btnActive.classList.add("active");
  btnAll.classList.remove("active");
  btnCompleted.classList.remove("active");

  const listChecked = document.getElementById("list__event");
  const listItem = listChecked.querySelectorAll(".checked");
  Array.from(listItem).forEach((item) => {
    item.classList.add("hidden");
  });
});
btnAll.addEventListener("click", () => {
  btnAll.classList.add("active");
  btnActive.classList.remove("active");
  btnCompleted.classList.remove("active");

  const listChecked = document.getElementById("list__event");
  const listItem = listChecked.querySelectorAll(".checked");
  Array.from(listItem).forEach((item) => {
    item.classList.remove("hidden");
  });
});
btnCompleted.addEventListener("click", () => {
  btnCompleted.classList.add("active");
  btnAll.classList.remove("active");
  btnActive.classList.remove("active");

  const listChecked = document.getElementById("list__event");
  const listItem = listChecked.querySelectorAll(".hidden");
  Array.from(listItem).forEach((item) => {
    item.classList.add("checked");
  });
});

list.addEventListener("change", function (e) {
  if (e.target.type == "checkbox") {
    const parent = e.target.closest(".align-items-center");
    const children = parent.querySelector(".input__edit ");

    const item = e.target.closest(".event__item");
    item.classList.toggle("checked");
    if (e.target.checked) {
      children.style.textDecoration = "line-through";
      children.style.color = "gray";
      count--;
      showCount();
    }
    if (!e.target.checked) {
      children.style.textDecoration = "none";
      children.style.color = "black";
      count++;
      showCount();
    }
  }
});
