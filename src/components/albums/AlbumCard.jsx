export default function AlbumCard({ album }) {
  return (
    <div className="card border-primar primary-bg overflow-hidden">
      <div className="card-media">
        <img className="album-cover" src={album.img} alt="cover" />
      </div>
      <div className="card-body primary-bg">
        <p className="my-1">{album.name}</p>
        <p className="my-1">{album.mainArtist}</p>
      </div>
    </div>
  );
}
