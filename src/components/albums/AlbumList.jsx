import AlbumCard from "./AlbumCard";

export default function AlbumList({ albums }) {
  return (
    <div className="row g-3 my-2">
      {albums.map((a) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={a.id}>
          <AlbumCard album={a} />
        </div>
      ))}
    </div>
  );
}
