import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router";

export default function AlbumDetail({ album }) {
  return (
    <>
      <h1>Dettagli di {album.name}</h1>
      <section>
        <div className="row">
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
              <strong>Data publicazione:</strong> {album.releaseDate}
            </p>
            <p>
              <strong>Numero di tracce:</strong> {album.totalTracks}
            </p>
            <p>
              <strong>Durata:</strong> {album.totalDuration} minuti
            </p>
            <p className="d-inline me-1">
              <strong>Generi:</strong>
            </p>
            {album.genres.map((g) => (
              <Link to={`http://localhost:5173/genres/${g.id}`}>
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
                      <p className="mb-0">{song.duration}</p>
                    </div>
                    <div className="col-3">
                      <p className="mb-0">{song.isExplicit ? "Sí" : "No"}</p>
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
