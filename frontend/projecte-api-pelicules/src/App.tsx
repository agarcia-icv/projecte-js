import MoviesPage from "./pages/MoviesPage";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import EditMovie from "./pages/EditMovie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MoviesPage />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/edit/:id" element={<EditMovie />} />
    </Routes>
  );
}

export default App;