import './Header.css'
import logo from '../assets/logo_pokedex-removebg-preview 2.svg'
import { Link , useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {

    const [dark, setDark] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {

        const tema = localStorage.getItem("tema")

        if (tema == "dark") {

            document.documentElement.classList.add("dark")
            setDark(true)

        }

    }, [])

    function trocarTema() {

        document.documentElement.classList.toggle("dark")

        const temaAtivo = document.documentElement.classList.contains("dark")

        setDark(temaAtivo)

        localStorage.setItem(
            "tema",
            temaAtivo ? "dark" : "light"
        )

    }

    function sair() {

        localStorage.removeItem("usuario")

        navigate("/")

    }


    return (
        <div className="dark:bg-[#9b0000]">
            <nav className="nav bg-[#fc1f1f] dark:bg-[#9b0000] transition-all duration-300 
            [&_button]:text-[#5f5f5f] dark:[&_button]:text-[#afabab]">

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

                <button onClick={trocarTema}>
                    {dark ? "☀️" : "🌙"}
                </button>

                <button onClick={sair}>
                    Sair
                </button>

            </nav>
        </div>
    )
}

export default Header