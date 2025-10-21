import GenreCard from "./GenreCard";

export default function GenreList({ genres }) {
  return (
    <div className="row g-3 my-2">
      {genres.map((g) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={g.id}>
          <GenreCard genre={g} />
        </div>
      ))}
    </div>
  );
}
