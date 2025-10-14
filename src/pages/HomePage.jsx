import { useEffect, useState } from "react";
import AlbumList from "../components/albums/AlbumList";
import axios from "axios";

// QUI CHIAMATA SOLO PER VEDERE I PRIMI ELEMENTI

export default function HomePage() {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(0);
  const [urlParams, setUrlParams] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/albums?page=${page}${urlParams}`)
      .then((res) => setAlbums(res.data.content));
  }, [page, urlParams]);

  return (
    <main>
      <section id="hero" className="position-relative overflow-hidden py-5">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                id="music-badge"
                className="mb-4 d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill bg-primary bg-opacity-10 border border-primary border-opacity-25"
              >
                {/* <span className="me-2 fs-5">🎵</span> DOVRÁ ESSERE UN LINK */}
                <span className="fw-medium">Scopri gli Album</span>
              </div>
              <h1 className="display-4 fw-bold mt-3 mb-4">
                I Tuoi Album Preferiti Ti Aspettano
              </h1>
              <p
                className="lead text-muted mx-auto mb-0"
                style={{ maxWidth: 600 }}
              >
                Esplora la nostra vasta collezione di album, scoprine di nuovi e
                rispolvera i tuoi preferiti, da gemme Underground fino alle Hit
                piú popolari.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container py-5">
        <h1 className="text-center display-6 fw-bold">Album in evidenza</h1>
        <section>
          <AlbumList albums={albums.slice(0, 4)} />
        </section>
      </div>
    </main>
  );
}
