import MoviesPage from "./pages/MoviesPage";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import EditMovie from "./pages/EditMovie";
import CreateMovie from "./pages/CreateMovie";

function App() {
  return (
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/create" element={<CreateMovie />} />
        <Route path="/edit/:id" element={<EditMovie />} />
      </Routes>
    </div>
  );
}

export default App;