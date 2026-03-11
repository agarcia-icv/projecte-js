import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Movie } from "../types/Movie";

export default function EditMovie() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`http://localhost:3000/movies/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movie)
    });

    navigate("/");
  };

  if (!movie) return <p>Carregant pelicula...</p>;

  return (
    <form onSubmit={handleSubmit}>

      <h2>Editar Pelicula</h2>

      <input
        value={movie.title}
        onChange={(e) => setMovie({...movie, title: e.target.value})}
      />

      <input
        type="number"
        value={movie.rating}
        onChange={(e) => setMovie({...movie, rating: Number(e.target.value)})}
      />

      <input
        value={movie.releaseDate}
        onChange={(e) => setMovie({...movie, releaseDate: e.target.value})}
      />

      <input
        value={movie.genres.join(", ")}
        onChange={(e) =>
          setMovie({...movie, genres: e.target.value.split(",")})
        }
      />

      <label>
        Watched
        <input
          type="checkbox"
          checked={movie.watched}
          onChange={(e) =>
            setMovie({...movie, watched: e.target.checked})
          }
        />
      </label>

      <button type="submit">Guardar</button>

    </form>
  );
}