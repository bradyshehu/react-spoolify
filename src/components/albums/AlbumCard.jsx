import { Link } from "react-router";

export default function AlbumCard({ album }) {
  return (
    <div className="card border-primar primary-bg overflow-hidden">
      <Link to={`http://localhost:5173/albums/${album.id}`}>
        <div className="card-media">
          <img className="album-cover" src={album.img} alt="cover" />
        </div>
        <div className="card-body primary-bg">
          <p className="my-1">{album.name}</p>
          <p className="my-1">{album.mainArtist}</p>
        </div>
      </Link>
    </div>
  );
}
