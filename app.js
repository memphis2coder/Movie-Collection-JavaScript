// movie class: shows the movie on the table & grab the data
class movie {
  constructor(title, director, runtime) {
    this.title = title;
    this.director = director;
    this.runtime = runtime;
  }
}
// UI class: handle ui task
class UI {
  static displayMovies() {
    // storing movie data in myMovies //
    const storedMovies = [
      {
        title: "The Matrix",
        director: "Wachowski Brothers",
        runtime: "2h 30m"
      },
      {
        title: "Avatar",
        director: "James Cameron",
        runtime: "3h 10m"
      }
    ];

    const movie = storedMovies;
    // loop through all the movies in array //
    movie.forEach(movie => UI.addMovieToList(movie));
  }

  // adding movies to the list of the tbody  //
  static addMovieToList(movie) {
    // grab movieCollection & set to list
    const list = document.getElementById("movieCollection");
    // create a  new tr element //
    const row = document.createElement("tr");
    // use `` so I can use variables inside string //
    row.innerHTML = `
      <td>${movie.title}</td>
      <td>${movie.director}</td>
      <td>${movie.runtime}</td>
      <td><a href="#' class="btn btn-danger btn-sm delete">X</a></td>
    `;
    // append row to list //
    list.appendChild(row);
  }
} // end of class UI //

// store class: handle the storage

// event: display movies
document.addEventListener("DOMContentLoaded", UI.displayMovies);

// event:  add a movie to list
document.getElementById("movie-form").addEventListener("submit", e => {
  // prevent actual submit //
  e.preventDefault();
  // get form values //
  const title = document.getElementById("title").value;
  const director = document.getElementById("director").value;
  const runtime = document.getElementById("runtime").value;
  // Instatiate movie //
  const Movie = new movie(title, director, runtime);

  console.log(movie);
});

// event: remove a movie
