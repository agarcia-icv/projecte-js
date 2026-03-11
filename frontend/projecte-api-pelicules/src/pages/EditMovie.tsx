import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditMovie() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [watched, setWatched] = useState(false);
  const [releaseDate, setReleaseDate] = useState("");
  const [genres, setGenres] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then(res => res.json())
      .then(movie => {
        setTitle(movie.title);
        setRating(movie.rating);
        setWatched(movie.watched);
        setReleaseDate(movie.releaseDate.split("T")[0]);
        setGenres(movie.genres.join(", "));
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const movie = {
      title,
      rating,
      watched,
      releaseDate,
      genres: genres.split(",").map(g => g.trim())
    };

    await fetch(`http://localhost:3000/movies/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movie)
    });

    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center">

      <form className="card p-4 shadow" style={{width: "400px"}} onSubmit={handleSubmit}>

        <h2 className="mb-3">Editar pelicula</h2>

        <input
          className="form-control mb-2"
          placeholder="Titol"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="form-control mb-2"
          type="number"
          placeholder="Puntuacio"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />

        <input
          className="form-control mb-2"
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Generes (separat per comes)"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
        />

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={watched}
            onChange={(e) => setWatched(e.target.checked)}
          />
          <label className="form-check-label">
            Vista
          </label>
        </div>

        <button className="btn btn-warning mb-2">
          Guardar
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/")}
        >
          Tornar
        </button>

      </form>

    </div>
  );
}