const API_URL = "http://localhost:3000/movies";

export async function getMovies() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}