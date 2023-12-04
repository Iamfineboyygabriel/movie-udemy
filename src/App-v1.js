import { useState } from "react";

//Original

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAJQMBIgACEQEDEQH/xAAaAAACAgMAAAAAAAAAAAAAAAAABgMEAgUH/8QAMhAAAgEDAwEGBAQHAAAAAAAAAQIDAAQRBRIhMQYTIkFhgTJRcaEUcpGSFSNSosHS8f/EABgBAQADAQAAAAAAAAAAAAAAAAIAAQME/8QAHxEAAgIBBAMAAAAAAAAAAAAAAAECEQMSIUGhEzJR/9oADAMBAAIRAxEAPwDm1vYNK8h7wIe82YI/L/t9qxfS+8fG9we73ZEWQenAOeetXrWye4eVwF5foowB7DpV6501fwE/USxsuPUED/J+1W4SfJI5sKSTh2Lb6bGuQbrxCPeVVAcdOvi4+L7H3lGj7WIa4xtzlinhwM9Dnr4eR5VsYtEklcAQl3IJCg+QqC8s2s4C7oyksQvi4Pr60fHL6LzYb9O2aTUbV4bkx8ErjP6A0VndGQynxgedFQDdvYe+zlttDC5YBjKfi48qYxp8c9rfbWTfuTB28MM9AfaqHZnTppJoXkDYZs4HAxkgn249qZNAeGfU5dORlJRt8kJGSBnrnHzyK6LVUcii27NZBok0TK0EiLuJDtk+Fc+WOc0qdtYxBK8D5eRDyzE8kgdM11GzvbDUDqNlFPFHNbTyKSgI2omMnn4huyCR8sUodorbSdWeN4P5rSKzu4l28A44GfnkGjdj00zlUxCyYADDAxvzn7UUxXlhDfRwPDIZRGpjYqvRgfU/T7UVnoYtaHqzvXXtXpqdy0docxxDdkFlXcSf3Ae1XeyNx/A+0mv3ly73DSM/cgcs5DqSv1Jkjxj50s3l5dy3FiyBXW3l7wvu8XTGP0q9b6jDHN3sBaGcMWB56ngk+vArdxsMZVRR7EfidUvblbuVyJNNmEp/p3cnGRwdxFVdRjaHs3NLIyx38MTh41bJ2FomH18Lsf8AlWezdzLpura1bNyszI+75htzY/uqPU0kj069t5HWWKdeWIwVOwLkftFFR5Lcq2Nv2B0yOz7NQyu53XcjTbducDhR18ztz7iiljRtZKaZBHJOyugIIOfmcUU0o0CWqyaO4bACsR7ZqbbIyjEi5/LRRULIrvTTAGuI5mWVyhdgxOcrkdTWCtfBcd+jr6iiis8TtCybMwkkxgOibvPC0UUVoE//2Q==",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "data:image/jpeg;base64,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",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) => arr.reduce((acc, cur) => acc + cur, 0) / arr.length;

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <Search />
        <Numresult movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </box>
      </Main>
    </>
  );
}

function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img" aria-label="Popcorn">
        🍿
      </span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function Numresult({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
/*
function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
}
*/

function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function Movie({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} Poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span role="img" aria-label="Calendar">
            🗓
          </span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span role="img" aria-label="Number">
            #️⃣
          </span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span role="img" aria-label="Star">
            ⭐️
          </span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span role="img" aria-label="Star">
            🌟
          </span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span role="img" aria-label="Clock">
            ⏳
          </span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMovieList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} Poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span role="img" aria-label="Star">
            ⭐️
          </span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span role="img" aria-label="Star">
            🌟
          </span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span role="img" aria-label="Clock">
            ⏳
          </span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}
