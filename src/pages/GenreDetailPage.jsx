import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AlbumList from "../components/albums/AlbumList";
import NotFoundPage from "./NotFoundPage";
import Loader from "../components/ui/Loader";

export default function GendreDetailPage() {
  const { genreId } = useParams();
  const [genre, setGenre] = useState();
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  if (isNaN(Number(genreId))) return <NotFoundPage />;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/genres/${genreId}`)
      .then((res) => setGenre(res.data))
      .catch((err) => {
        if (err.response?.status === 404) setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [genreId]);

  if (notFound) return <NotFoundPage />;
  if (loading || !genre) return <Loader />;

  return (
    <main>
      <div className="container min-vh-100">
        <h2>{genre.name}</h2>
        <p>{genre.description}</p>
        <section className="mt-5">
          <h3>Album di questo Genere:</h3>
          {genre.albums.length > 0 ? (
            <AlbumList albums={genre.albums} />
          ) : (
            <p>Non ci sono Album appartenenti a questo Genere</p>
          )}
        </section>
        <div className="d-flex justify-content-between m-auto mt-3">
          <Link to={-1} className="btn btn-secondary">
            Torna indietro
          </Link>
          <Link to={"/genres"} className="btn btn-prim">
            Vai ai Generi
          </Link>
        </div>
      </div>
    </main>
  );
}
