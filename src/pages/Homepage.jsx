import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h1>Worldwise</h1>
      <Link to="/product">Product</Link>
      <Link to="/pricing">Pricing</Link>
    </div>
  );
}
