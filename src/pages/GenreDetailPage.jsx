import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AlbumList from "../components/albums/AlbumList";

export default function GendreDetailPage() {
  const { genreId } = useParams();
  const [genre, setGenre] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/genres/${genreId}`)
      .then((res) => setGenre(res.data));
  }, [genreId]);

  if (!genre) return <h1>caricamento</h1>; // SEMPRE COMPONENTE DI CARICAMENTO, DA GESTIRE MEGLIO

  return (
    <main>
      <div className="container min-vh-100">
        <h2>{genre.name}</h2>
        <p>{genre.description}</p>
        <section className="mt-5">
          <h3>Album di questo Genere:</h3>
          <AlbumList albums={genre.albums} />
        </section>
      </div>
    </main>
  );
}
