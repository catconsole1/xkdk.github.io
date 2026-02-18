const likes = JSON.parse(localStorage.getItem("likes") || "{}");

function saveLikes() {
    localStorage.setItem("likes", JSON.stringify(likes));
}

function toggleLike(id, element) {
    likes[id] = !likes[id];
    element.classList.toggle("liked", likes[id]);
    saveLikes();
}

function loadCategory(category) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    for (let i = 1; i <= 100; i++) {
        const id = `${category}${i}`;
        const imgPath = `image/${category}/${id}.png`;

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = imgPath;
        img.onclick = () => openModal(imgPath);

        img.onerror = () => card.remove();

        const like = document.createElement("div");
        like.className = "like";
        like.textContent = "❤";

        if (likes[id]) like.classList.add("liked");

        like.onclick = (e) => {
            e.stopPropagation();
            toggleLike(id, like);
        };

        card.appendChild(img);
        card.appendChild(like);
        gallery.appendChild(card);
    }
}

function openModal(src) {
    const modal = document.getElementById("modal");
    const img = document.getElementById("modalImg");
    img.src = src;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}


