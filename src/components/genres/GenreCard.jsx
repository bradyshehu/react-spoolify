import { Link } from "react-router";

export default function GenreCard({ genre }) {
  return (
    <div className="card border-primar primary-bg overflow-hidden">
      <Link to={`http://localhost:5173/genres/${genre.id}`}>
        <div className="card-head text-center mt-3 fw-bold">
          <p className="">{genre.name}</p>
        </div>
        <div className="card-body primary-bg">
          <p className="">{genre.description}</p>
        </div>
      </Link>
    </div>
  );
}
