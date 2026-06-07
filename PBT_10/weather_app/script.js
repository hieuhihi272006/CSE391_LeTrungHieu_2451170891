const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const loadingDiv = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const weatherDiv = document.getElementById("weather");
const historyDiv = document.getElementById("history");

let historyCities = JSON.parse(localStorage.getItem("weatherHistory")) || [];

renderHistory();

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (city === "") {
    return;
  }

  getWeather(city);
});

async function getWeather(city) {
  loadingDiv.innerHTML = `
        <div class="text-center">
            <div class="spinner-border text-primary"></div>
            <p class="mt-2">Đang tải...</p>
        </div>
    `;

  errorDiv.innerHTML = "";
  weatherDiv.innerHTML = "";

  try {
    const response = await fetch(`https://wttr.in/${city}?format=j1`);

    if (!response.ok) {
      throw new Error("Không thể lấy dữ liệu");
    }

    const data = await response.json();

    const weather = data.current_condition[0];

    weatherDiv.innerHTML = `
            <div class="card mt-3">
                <div class="card-body text-center">

                    <h4>${city}</h4>

                    <img
                        src="${weather.weatherIconUrl[0].value}"
                        alt="weather"
                    >

                    <p class="mt-3">
                        <strong>Nhiệt độ:</strong>
                        ${weather.temp_C} °C
                    </p>

                    <p>
                        <strong>Độ ẩm:</strong>
                        ${weather.humidity} %
                    </p>

                    <p>
                        <strong>Mô tả:</strong>
                        ${weather.weatherDesc[0].value}
                    </p>

                </div>
            </div>
        `;

    saveHistory(city);
  } catch (error) {
    errorDiv.innerHTML = `
            <div class="alert alert-danger mt-3">
                ${error.message}
            </div>
        `;
  } finally {
    loadingDiv.innerHTML = "";
  }
}

function saveHistory(city) {
  historyCities = [
    city,
    ...historyCities.filter(
      (item) => item.toLowerCase() !== city.toLowerCase(),
    ),
  ];

  historyCities = historyCities.slice(0, 5);

  localStorage.setItem("weatherHistory", JSON.stringify(historyCities));

  renderHistory();
}

function renderHistory() {
  historyDiv.innerHTML = "";

  historyCities.forEach((city) => {
    const li = document.createElement("li");

    li.className = "list-group-item list-group-item-action";

    li.textContent = city;

    li.addEventListener("click", () => {
      cityInput.value = city;
      getWeather(city);
    });

    historyDiv.appendChild(li);
  });
}
