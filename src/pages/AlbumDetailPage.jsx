import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AlbumDetail from "../components/albums/AlbumDetail";

export default function AlbumDetailPage() {
  const { albumId } = useParams();
  const [album, setAlbum] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/albums/${albumId}`)
      .then((res) => setAlbum(res.data));
  }, [albumId]);

  if (!album) return <p>Caricamento</p>; // FAI COMPONENTE DI CARICAMENTO E METTILO QUI

  return (
    <main>
      <div className="container min-vh-100">
        <AlbumDetail album={album} />
      </div>
    </main>
  );
}
