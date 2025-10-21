import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main>
      <div className="container min-vh-100 d-flex flex-column align-items-center">
        <h1 className="display-4">404</h1>
        <p className="lead text-center">Risorsa non trovata.</p>
        <Link to="/" className="btn mt-3">
          Torna alla Home
        </Link>
      </div>
    </main>
  );
}
