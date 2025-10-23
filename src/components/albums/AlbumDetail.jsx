import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AlbumDetail({ album }) {
  function formatDuration(minSec) {
    const [min, sec] = String(minSec).split(".");
    let minutes = Number(min);
    const seconds = sec ? Number(sec.padEnd(2, "0")) : 0;
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  return (
    <>
      <h1>Dettagli di {album.name}</h1>
      <section>
        <div className="row g-3">
          <div className="col-lg-6 col-md-12">
            <img className="album-cover detail" src={album.img} alt="cover" />
          </div>
          <div className="col-lg-6 col-md-12">
            <p>
              <strong>Titolo:</strong> {album.name}
            </p>
            <p>
              <strong>Artista:</strong> {album.mainArtist}
            </p>
            <p>
              <strong>Descrizione:</strong> {album.description}
            </p>
            <p>
              <strong>Data publicazione:</strong>{" "}
              {formatDate(album.releaseDate)}
            </p>
            <p>
              <strong>Numero di tracce:</strong> {album.totalTracks}
            </p>
            <p>
              <strong>Durata:</strong> {formatDuration(album.totalDuration)}
            </p>
            <p className="d-inline me-1">
              <strong>Generi:</strong>
            </p>
            {album.genres.map((g) => (
              <Link key={g.id} to={`/genres/${g.id}`}>
                <div className="badge secondary-bg mx-1">{g.name}</div>
              </Link>
            ))}
          </div>
          <div className="col-12 mt-3">
            {/* VEDI BENE SINTASSI DEI LIST GROUP APPENA HAI INTERNET */}
            <h4>Canzoni</h4>
            <ListGroup>
              <ListGroupItem className="primary-bg py-2">
                <div className="row align-items-center g-0  ">
                  <div className="col-3">
                    <p className="mb-0">Traccia no.</p>
                  </div>
                  <div className="col-3">
                    <p className="mb-0">Titolo</p>
                  </div>
                  <div className="col-3">
                    <p className="mb-0">Durata</p>
                  </div>
                  <div className="col-3">
                    <p className="mb-0">Testo esplicito</p>
                  </div>
                </div>
              </ListGroupItem>
              {album.songs.map((song, i) => (
                <ListGroupItem key={song.id} className="primary-bg py-2">
                  {/* Row interna full-width per far funzionare le col */}
                  <div className="row align-items-center g-0  ">
                    <div className="col-3">
                      <p className="mb-0">{i + 1}</p>
                    </div>
                    <div className="col-3">
                      <p className="mb-0">{song.name}</p>
                    </div>
                    <div className="col-3">
                      <p className="mb-0">{formatDuration(song.duration)}</p>
                    </div>
                    <div className="col-3">
                      <p className="mb-0">{song.isExplicit ? "Sì" : "No"}</p>
                    </div>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        </div>
      </section>
    </>
  );
}
