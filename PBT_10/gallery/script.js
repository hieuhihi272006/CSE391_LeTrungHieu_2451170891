const gallery =
    document.getElementById("gallery");

const loading =
    document.getElementById("loading");

const trigger =
    document.getElementById("load-trigger");

const modalImage =
    document.getElementById("modalImage");

const photoModal =
    new bootstrap.Modal(
        document.getElementById(
            "photoModal"
        )
    );

let page = 1;
let isLoading = false;

async function loadMorePhotos() {

    if (isLoading) return;

    isLoading = true;

    loading.innerHTML = `
        <div class="spinner-border"></div>
        <p>Đang tải thêm...</p>
    `;

    try {

        const response =
            await fetch(
                `https://picsum.photos/v2/list?page=${page}&limit=20`
            );

        const photos =
            await response.json();

        renderPhotos(photos);

        page++;
    }
    catch (error) {
        alert(
            "Lỗi tải dữ liệu"
        );
    }
    finally {
        loading.innerHTML = "";
        isLoading = false;
    }
}

function renderPhotos(photos) {

    photos.forEach(photo => {

        const col =
            document.createElement("div");

        col.className =
            "col-12 col-md-6 col-lg-3";

        col.innerHTML = `
            <div class="card h-100">

                <img
                    class="card-img-top lazy-image"
                    data-src="${photo.download_url}"
                    alt="${photo.author}"
                    style="height:250px;object-fit:cover;cursor:pointer;"
                >

                <div class="card-body">
                    <p class="card-text">
                        ${photo.author}
                    </p>
                </div>

            </div>
        `;

        gallery.appendChild(col);

        const image =
            col.querySelector("img");

        image.addEventListener(
            "click",
            () => {
                modalImage.src =
                    photo.download_url;

                photoModal.show();
            }
        );

        lazyImageObserver.observe(
            image
        );
    });
}

const lazyImageObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    const img =
                        entry.target;

                    img.src =
                        img.dataset.src;

                    lazyImageObserver.unobserve(
                        img
                    );
                }
            });
        }
    );

const infiniteScrollObserver =
    new IntersectionObserver(
        entries => {

            if (
                entries[0]
                    .isIntersecting
            ) {
                loadMorePhotos();
            }
        }
    );

infiniteScrollObserver.observe(
    trigger
);

loadMorePhotos();