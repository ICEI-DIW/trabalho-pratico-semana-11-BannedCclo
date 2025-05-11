const main = document.querySelector("#detalhes");

window.onload = async () => {
  try {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    // Busca todos os filmes
    const response = await fetch("http://localhost:3000/movieList");
    const data = await response.json();

    // Encontra o filme pelo ID
    const movie = data.find((movie) => movie.id == id);

    if (!movie) {
      main.innerHTML = "<p>Filme não encontrado.</p>";
      return;
    }

    main.innerHTML = `
      <div id="poster">
        <img src="${movie.poster}" alt="Capa de ${movie.nome}" />
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
  } catch (error) {
    console.error("Erro ao carregar os detalhes do filme:", error);
    main.innerHTML = "<p>Erro ao carregar os dados do filme.</p>";
  }
};
