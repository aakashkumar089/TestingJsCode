const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.infoKey.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");

    let text = movie.infoKey.title + "-";

    for (const key in movie.infoKey) {
      if (key !== "title") {
        text = text + `${key}: ${movie.infoKey[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (title.trim() == "" || extraName.trim() == "" || extraValue.trim() == "") {
    return alert("Cannot be empty");
  }

  const newMovie = {
    infoKey: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
};

const searchMovieFilter = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};
addMovieBtn.addEventListener("click", addMovieHandler);

searchBtn.addEventListener("click", searchMovieFilter);
