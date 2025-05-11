const container = document.querySelector("#movies");

function createCard(title, poster, id) {
  const card = document.createElement("div");
  card.classList.add("col-6");
  card.innerHTML = `<a href="detalhes.html?id=${id}"><div class="card">
      <img src="${poster}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
      </div>
    </div></a>`;
  container.appendChild(card);
}

window.onload = async () => {
  try {
    const response = await fetch("../db/db.json");
    const data = await response.json();
    console.log(data);
    data.movieList.forEach((movie) => {
      createCard(movie.nome, movie.poster, movie.id);
    });
  } catch (error) {
    console.error("Failed to load movie list:", error);
  }
};
