import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Movie } from "../types/Movie";
import { useNavigate } from "react-router-dom";

export default function MovieDetail() {

  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);
  const navigate = useNavigate();

const handleDelete = async () => {
  await fetch(`http://localhost:3000/movies/${id}`, {
    method: "DELETE"
  });

  navigate("/");
};
  if (!movie) {
    return <p>Carregant pelicules...</p>;
  }

 return (
  <div className="card shadow p-4">

    <h2 className="mb-3">{movie.title}</h2>

    <p><strong>Puntuacio:</strong> {movie.rating}</p>
    <p><strong>Data:</strong> { new Date(movie.releaseDate).toLocaleDateString()}</p>
    

    <p><strong>Generes:</strong> {movie.genres.join(", ")}</p>
    <p><strong>Vista:</strong> {movie.watched ? "Sí" : "No"}</p>

    <div className="mt-3">

      <Link to={`/edit/${movie._id}`} className="btn btn-warning me-2">
        Editar
      </Link>

      <button className="btn btn-danger me-2" onClick={handleDelete}>
        Eliminar
      </button>

      <Link to="/" className="btn btn-secondary">
        Tornar
      </Link>

    </div>

  </div>
);
}