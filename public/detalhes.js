import { movieList } from "./api.js";

const main = document.querySelector("#detalhes");

let params = new URLSearchParams(location.search);
const movie = movieList.find(function (movie) {
  return movie.id == params.get("id");
});

function loadData() {
  main.innerHTML = `
    <div id="poster">
        <img
          src="${movie.poster}"
          alt=""
        />
      </div>
      <div id="data">
        <h1>${movie.nome}</h1>
        <div class="info">
          <h2>Diretor:</h2>
          <h3>${movie.diretor}</h3>
        </div>
        <div class="info">
          <h2>Nota no IMDB:</h2>
          <h3>${movie.imdb}</h3>
        </div>
        <div class="info">
          <h2>Duração:</h2>
          <h3>${movie.duracao}min</h3>
        </div>
        <div class="info">
          <h2>Lançamento:</h2>
          <h3>${movie.lancamento}</h3>
        </div>
      </div>
      `;
}

window.onload = () => {
  loadData();
};
