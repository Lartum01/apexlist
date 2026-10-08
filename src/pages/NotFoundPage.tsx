import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="page">
      <h1>Page not found</h1>
      <p className="lede">That path does not exist.</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}
