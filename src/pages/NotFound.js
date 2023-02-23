import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not Found!</h2>
      <p>Come back to safety Money Manager !!</p>

      <p>
        To get back, <Link to="/">Click Here</Link>.
      </p>
    </div>
  );
}
