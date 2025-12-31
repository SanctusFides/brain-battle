import { Link } from "react-router-dom";


export default function NotFound() {
  return <div className="flex flex-col items-center justify-center min-h-screen">
    <h1>
      404 Not Found 
    </h1>
    <Link to="/"> <h2>Go Home </h2> </Link>
  </div>;
}