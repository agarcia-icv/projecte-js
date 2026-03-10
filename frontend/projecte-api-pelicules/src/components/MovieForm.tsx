import { useState } from "react";

export default function MovieForm() {

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [watched, setWatched] = useState(false);
  const [releaseDate, setReleaseDate] = useState("");
  const [genres, setGenres] = useState("");
  const [error, setError] = useState("");

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!title) {
    setError("has de posar titol");
    return;
  }

  if (rating < 0 || rating > 10) {
    setError("La puntuacio ha de ser del 0 al 10");
    return;
  }

  if (!genres) {
    setError("minim has de posar un genere");
    return;
  }

  setError("");

  const movie = {
    title,
    rating,
    watched,
    releaseDate,
    genres: genres.split(",").map(g => g.trim())
  };

  await fetch("http://localhost:3000/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(movie)
  });

  alert("pelicula creada");
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Afegir pelicula</h2>
{error && <p style={{color: "red"}}>{error}</p>}
      <input
        placeholder="Titol"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Puntuacio"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />

      <input
        type="date"
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
      />

      <input
        placeholder="Genre (Separat per comes)"
        value={genres}
        onChange={(e) => setGenres(e.target.value)}
      />

      <label>
        Vista
        <input
          type="checkbox"
          checked={watched}
          onChange={(e) => setWatched(e.target.checked)}
        />
      </label>

      <button type="submit">Crear pelicula</button>
    </form>
  );
  
}