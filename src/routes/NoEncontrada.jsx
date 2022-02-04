import { Link } from "react-router-dom";

const NoEncontrada = () => {
  return (
    <div>
        <h1>No encontrada 404</h1>
        <Link to="/" className="btn btn-info">ir Inicio</Link> 
    </div>
  )
}
export default NoEncontrada;
