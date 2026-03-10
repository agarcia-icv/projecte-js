import { useState } from "react";

export default function MovieForm() {

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [watched, setWatched] = useState(false);
  const [releaseDate, setReleaseDate] = useState("");
  const [genres, setGenres] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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

    alert("Movie created!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Movie</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />

      <input
        type="date"
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
      />

      <input
        placeholder="Genres (comma separated)"
        value={genres}
        onChange={(e) => setGenres(e.target.value)}
      />

      <label>
        Watched
        <input
          type="checkbox"
          checked={watched}
          onChange={(e) => setWatched(e.target.checked)}
        />
      </label>

      <button type="submit">Create Movie</button>
    </form>
  );
}