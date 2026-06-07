const widget1 =
    document.getElementById("widget1");

const widget2 =
    document.getElementById("widget2");

const widget3 =
    document.getElementById("widget3");

const loadTime =
    document.getElementById("loadTime");

const globalLoading =
    document.getElementById("globalLoading");

const refreshBtn =
    document.getElementById("refreshBtn");

function showGlobalLoading() {
    globalLoading.innerHTML = `
        <div class="text-center my-3">
            <div class="spinner-border"></div>
            <p>Loading dashboard...</p>
        </div>
    `;
}

function hideGlobalLoading() {
    globalLoading.innerHTML = "";
}

function renderWidget(index, data) {

    const widgets = [
        widget1,
        widget2,
        widget3
    ];

    switch (index) {

        case 0:
            widgets[index].innerHTML = `
                <div class="card-body">
                    <h5>User</h5>

                    <p>
                        ${data.results[0].name.first}
                        ${data.results[0].name.last}
                    </p>

                    <img
                        src="${data.results[0].picture.large}"
                        class="img-fluid rounded"
                    >
                </div>
            `;
            break;

        case 1:
            widgets[index].innerHTML = `
                <div class="card-body">
                    <h5>Weather</h5>

                    <p>
                        Temperature:
                        ${data.current_weather.temperature}°C
                    </p>

                    <p>
                        Wind:
                        ${data.current_weather.windspeed}
                    </p>
                </div>
            `;
            break;

        case 2:
            widgets[index].innerHTML = `
                <div class="card-body">

                    <h5>Country</h5>

                    <p>
                        ${data[0].name.common}
                    </p>

                    <img
                        src="${data[0].flags.png}"
                        class="img-fluid"
                    >

                </div>
            `;
            break;
    }
}

function renderWidgetError(index, message) {

    const widgets = [
        widget1,
        widget2,
        widget3
    ];

    widgets[index].innerHTML = `
        <div class="card-body">

            <div class="alert alert-danger">
                ${message}
            </div>

        </div>
    `;
}

async function loadDashboard() {

    const startTime =
        Date.now();

    showGlobalLoading();

    widget1.innerHTML =
        loadingCard();

    widget2.innerHTML =
        loadingCard();

    widget3.innerHTML =
        loadingCard();

    try {

        const results =
            await Promise.allSettled([

                fetch(
                    "https://randomuser.me/api/"
                ).then(r => r.json()),

                fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current_weather=true"
                ).then(r => r.json()),

                fetch(
                    "https://restcountries.com/v3.1/name/vietnam"
                ).then(r => r.json())
            ]);

        results.forEach(
            (result, index) => {

                if (
                    result.status ===
                    "fulfilled"
                ) {
                    renderWidget(
                        index,
                        result.value
                    );
                }
                else {
                    renderWidgetError(
                        index,
                        result.reason
                            .message
                    );
                }
            }
        );

        loadTime.innerHTML = `
            Data loaded in
            ${Date.now() - startTime}
            ms
        `;
    }
    finally {
        hideGlobalLoading();
    }
}

function loadingCard() {
    return `
        <div class="card-body">

            <div class="placeholder-glow">

                <span class="placeholder col-12"></span>

                <span class="placeholder col-8"></span>

                <span class="placeholder col-6"></span>

            </div>

        </div>
    `;
}

refreshBtn.addEventListener(
    "click",
    loadDashboard
);

loadDashboard();