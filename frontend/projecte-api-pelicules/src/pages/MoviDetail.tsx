import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";

export default function MovieDetail({ id }: { id: string }) {

  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>

      <p>⭐ Rating: {movie.rating}</p>

      <p>📅 Release Date: {movie.releaseDate}</p>

      <p>🎭 Genres: {movie.genres.join(", ")}</p>

      <p>
        {movie.watched ? "✅ Watched" : "❌ Not watched"}
      </p>
    </div>
  );
}