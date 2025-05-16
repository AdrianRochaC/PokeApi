import "./style.css"
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/capturados">Capturados</Link>
          <Link to="/aleatorios">Aleatorio</Link>
          <Link to="/usuario">Usuarios</Link>
          <Link to="/favoritos">Favoritos</Link>
        </nav>
    )
  }
  
  export default Menu