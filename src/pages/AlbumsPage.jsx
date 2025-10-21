import axios from "axios";
import { useEffect, useState } from "react";
import AlbumList from "../components/albums/AlbumList";
import { Link } from "react-router-dom";
import Loader from "../components/ui/Loader";

export default function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  // const [size, setSize] = useState(12);
  const [inputName, setInputName] = useState("");
  const [searchedName, setSearchedName] = useState("");
  // const [searchedGenre, setSearchedGenre] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/albums?name=${searchedName}&page=${page}`)
      .then((res) => {
        setAlbums(res.data.content);
        setTotalPages(res.data.totalPages);
      })
      .finally(() => setLoading(false));
  }, [page, searchedName]);

  function handleChange(e) {
    setInputName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSearchedName(inputName);
    setPage(0);
  }

  if (loading) return <Loader />;

  return (
    <main>
      <div className="container min-vh-100">
        <h2 className="text-center display-4 fw-bold">Tutti gli Album</h2>
        <section>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <form onSubmit={handleSubmit}>
                <label htmlFor="nameSearch" className="form-label">
                  Cerca per nome
                </label>
                <input
                  id="nameSearch"
                  className="form-control"
                  type="text"
                  value={inputName}
                  onChange={handleChange}
                  placeholder="Inserisci l'album..."
                />
              </form>
            </div>
          </div>
          {albums.length > 0 ? (
            <AlbumList albums={albums} />
          ) : (
            <p className="py-5">Non ci sono Album al momento.</p>
          )}
          <div className="d-flex justify-content-between m-auto">
            <Link to={-1} className="btn btn-secondary">
              Torna indietro
            </Link>
            <div>
              {page == 0 ? (
                <button className="btn" disabled>
                  Album precedenti
                </button>
              ) : (
                <button className="btn" onClick={() => setPage(page - 1)}>
                  Album precedenti
                </button>
              )}
              <button
                className="btn"
                onClick={() => setPage(page + 1)}
                disabled={page + 1 >= totalPages}
              >
                Album successivi
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
