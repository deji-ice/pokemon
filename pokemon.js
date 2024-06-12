document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const fetchPokemon = async () => {
    const pokemonName = document.getElementById("input").value;
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => res.sprites.front_default)
      .catch((err) => console.log("err", err));
    const img = document.createElement("img");
    img.src = data;
    document.body.appendChild(img);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    clearUI();
    fetchPokemon();
  });

  const clearUI = () => {
    const img = document.querySelector("img");
    if (img) {
      img.remove();
    }
  };
});
