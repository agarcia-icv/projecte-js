import { Link } from "react-router-dom";
import MovieForm from "../components/MovieForm";

export default function CreateMovie() {
  return (
    <div>

      <Link to="/">
        <button>Tornar al menú principal</button>
      </Link>

      <h1>Crear pel·lícula</h1>

      <MovieForm />

    </div>
  );
}