import axios from "axios";
import { useEffect, useState } from "react";
import GenreList from "../components/genres/GenresList";

export default function GenresPage() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/genres`)
      .then((res) => setGenres(res.data));
  });

  return (
    <main>
      <div className="container min-vh-100">
        <h2 className="text-center display-4 fw-bold">Tutti i Generi</h2>
        <section>
          <GenreList genres={genres} />
        </section>
      </div>
    </main>
  );
}
