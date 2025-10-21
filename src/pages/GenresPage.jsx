import axios from "axios";
import { useEffect, useState } from "react";
import GenreList from "../components/genres/GenresList";
import Loader from "../components/ui/Loader";

export default function GenresPage() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/genres`)
      .then((res) => setGenres(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

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
