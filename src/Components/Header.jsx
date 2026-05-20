import './Header.css'
import logo from '../assets/logo_pokedex-removebg-preview 2.svg'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="nav">
                <img src={logo} alt="logo" />

                <Link to="/home">
                    <button>Home</button>
                </Link>

                <Link to="/pokemon">
                    <button>Pokemons</button>
                </Link>

                <Link to="/aleatorio">
                    <button>Surpreendame</button>
                </Link>

                <Link to="/favoritos">
                    <button>Favoritos</button>
                </Link>
                <Link to="/perfil">
                    <button>Perfil</button>
                </Link>
                <Link to="/sobre">
                    <button>Sobre</button>
                </Link>
                <Link to="/">
                    <button>Sair</button>
                </Link>
            </nav>
        </div>
    )
}

export default Header