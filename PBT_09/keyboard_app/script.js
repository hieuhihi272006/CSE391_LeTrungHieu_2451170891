const images = [
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1016/800/400",
  "https://picsum.photos/id/1018/800/400",
  "https://picsum.photos/id/1020/800/400",
  "https://picsum.photos/id/1024/800/400",
  "https://picsum.photos/id/1025/800/400",
  "https://picsum.photos/id/1035/800/400",
  "https://picsum.photos/id/1038/800/400",
  "https://picsum.photos/id/1043/800/400",
];

const commands = [
  "Open Settings",
  "Open Dashboard",
  "Create User",
  "Delete User",
  "Logout",
];

let currentImage = 0;
let slideshow = null;

const galleryImage = document.getElementById("galleryImage");
const modalImage = document.getElementById("modalImage");
const counter = document.getElementById("counter");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

const palette = document.getElementById("palette");
const searchInput = document.getElementById("searchInput");
const commandList = document.getElementById("commandList");

let selectedIndex = 0;
let filteredCommands = [...commands];

function renderImage() {
  galleryImage.src = images[currentImage];
  counter.textContent = `Image ${currentImage + 1} / ${images.length}`;
}

renderImage();

function nextImage() {
  currentImage = (currentImage + 1) % images.length;

  renderImage();
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;

  renderImage();
}

document.getElementById("nextBtn").addEventListener("click", nextImage);

document.getElementById("prevBtn").addEventListener("click", prevImage);

galleryImage.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modalImage.src = images[currentImage];
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

function renderCommands(keyword = "") {
  filteredCommands = commands.filter((cmd) =>
    cmd.toLowerCase().includes(keyword.toLowerCase()),
  );

  commandList.innerHTML = "";

  filteredCommands.forEach((cmd, index) => {
    const li = document.createElement("li");

    li.textContent = cmd;

    li.setAttribute("role", "option");

    if (index === selectedIndex) {
      li.classList.add("selected");
    }

    commandList.appendChild(li);
  });
}

renderCommands();

searchInput.addEventListener("input", () => {
  selectedIndex = 0;
  renderCommands(searchInput.value);
});

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "k") {
    e.preventDefault();

    palette.classList.remove("hidden");

    searchInput.focus();

    renderCommands();
    return;
  }

  if (e.key === "ArrowRight") {
    nextImage();
  }

  if (e.key === "ArrowLeft") {
    prevImage();
  }

  if (e.key >= "1" && e.key <= "9") {
    const index = Number(e.key) - 1;

    if (index < images.length) {
      currentImage = index;
      renderImage();
    }
  }

  if (e.code === "Space") {
    e.preventDefault();

    if (slideshow) {
      clearInterval(slideshow);
      slideshow = null;
    } else {
      slideshow = setInterval(nextImage, 2000);
    }
  }

  if (e.key === "Escape") {
    modal.classList.add("hidden");
    palette.classList.add("hidden");
  }

  if (!palette.classList.contains("hidden")) {
    if (e.key === "ArrowDown") {
      selectedIndex = Math.min(selectedIndex + 1, filteredCommands.length - 1);

      renderCommands(searchInput.value);
    }

    if (e.key === "ArrowUp") {
      selectedIndex = Math.max(selectedIndex - 1, 0);

      renderCommands(searchInput.value);
    }

    if (e.key === "Enter") {
      if (filteredCommands[selectedIndex]) {
        alert("Selected: " + filteredCommands[selectedIndex]);

        palette.classList.add("hidden");
      }
    }
  }
});
