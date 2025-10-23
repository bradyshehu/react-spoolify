import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import AlbumDetail from "../components/albums/AlbumDetail";
import NotFoundPage from "./NotFoundPage";
import Loader from "../components/ui/Loader";

export default function AlbumDetailPage() {
  const { albumId } = useParams();
  const [album, setAlbum] = useState();
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  if (isNaN(Number(albumId))) return <NotFoundPage />;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/albums/${albumId}`)
      .then((res) => setAlbum(res.data))
      .catch((err) => {
        if (err.response?.status === 404) setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [albumId]);

  if (notFound) return <NotFoundPage />;
  if (loading || !album) return <Loader />;

  return (
    <main>
      <div className="container min-vh-100">
        <AlbumDetail album={album} />
        <div className="d-flex justify-content-between m-auto mt-3">
          <Link to={-1} className="btn btn-secondary">
            Torna indietro
          </Link>
          <Link to={"/albums"} className="btn btn-prim">
            Vai agli Album
          </Link>
        </div>
      </div>
    </main>
  );
}
