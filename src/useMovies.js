import { useEffect, useState } from "react";

const KEY = "2b2ace15";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  //This is a state that happens before data arrived. more like loading...
  const [isLoading, setIsLoading] = useState(false);
  //This piece of state indicates if we have an error or not
  const [error, setError] = useState("");

  useEffect(
    function () {
    //   callback?.();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies");
          }

          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("Movies was not found");
          }
          setMovies(data.Search);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();
    },
    [query]
  );
  return { movies, isLoading, error };
}
