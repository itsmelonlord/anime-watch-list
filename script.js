document.addEventListener("DOMContentLoaded", function () {
    fetch("anime_data.csv")
        .then(response => response.text())
        .then(data => {
            const rows = data.split("\n").slice(1); // Skip headers
            const animeGrid = document.getElementById("anime-grid");

            rows.forEach(row => {
                const [id, title, imageUrl, genres] = row.split(",");
                
                const animeCard = document.createElement("div");
                animeCard.classList.add("anime-card");
                animeCard.innerHTML = `<img src="${imageUrl}" alt="${title}"><h3>${title}</h3><p>${genres}</p>`;
                
                animeGrid.appendChild(animeCard);
            });
        })
        .catch(error => console.error("Error loading anime data:", error));
});
