async function getData() {
  const response = await fetch("./data.json");
  const data = await response.json();
  localStorage.setItem("data", JSON.stringify(data));
}
getData();

function displayProducts() {
  const listProduct = JSON.parse(localStorage.getItem("data"));

  listProduct.forEach((item) => {
    document.getElementById("box_products").innerHTML +=
      `<div class="col-4 product-item">
            <section class="rounded-4 border overflow-hidden shadow-lg">
              <figure class="text-center">
                <div class="overflow-hidden" style="height: 300px">
                  <img
                    src="${item.image}"
                    alt=""
                    class="img-fluid img-product object-fit-cover h-100 w-100"
                  />
                </div>

                <figcaption class="fs-5 mt-3">
                  ${item.name}
                </figcaption>
              </figure>
              <div
                class="d-flex p-3 justify-content-between align-items-center"
              >
                <div class="fw-bolder fs-3">$${item.price}</div>
                <button
                  class="btn btn-primary d-flex justify-content-between align-items-center gap-3 fs-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                    />
                  </svg>
                  Add
                </button>
              </div>
            </section>
          </div>`;
  });
}
displayProducts();
let statusMode = true;
document.getElementById("toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const light = document.getElementById("light");
  const night = document.getElementById("night");

  if (statusMode) {
    light.classList.remove("d-none");
    night.classList.add("d-none");
  } else {
    light.classList.add("d-none");
    night.classList.remove("d-none");
  }

  statusMode = !statusMode;
});
