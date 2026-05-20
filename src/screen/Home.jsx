import { useState } from "react"
import Header from "../Components/Header"
import "../styles/Home.css"
import logo from '../assets/logo_pokedex-removebg-preview 2.svg'


function Home() {

    const [pokemon, setPokemon] = useState(null)
    const [busca, setBusca] = useState("")
    const [erro, setErro] = useState(false)

    function procurarPokemon() {
        const url = "https://pokeapi.co/api/v2/pokemon/" + busca.toLowerCase()

        setErro(false)

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro na busca")
                }
                return response.json()
            })
            .then(data => {
                setPokemon(data)
            })
            .catch(() => {
                setPokemon(null)
                setErro(true)
            })
    }

    function Geracao(id) {
        if (id <= 151) return "1º Geração"
        else if (id <= 251) return "2º Geração"
        else if (id <= 386) return "3º Geração"
        else if (id <= 494) return "4º Geração"
        else if (id <= 649) return "5º Geração"
        else if (id <= 721) return "6º Geração"
        else if (id <= 809) return "7º Geração"
        else if (id <= 905) return "8º Geração"
        else return "9º Geração"
    }

    return (
        <div>
            <Header />

            <div className="main">
                <div className="card">
                    <div className="titulo">
                        <h3>Bem-Vindo ao Pokedex!</h3>
                    </div>
                    <div className="poke-logo">
                        <img src={logo} alt="logo" />

                    </div>
                </div>
                <div className="card">
                    <div>
                        <h1>Seja Bem vindo a PokeDex!</h1>
                        <p>Digite o nome ou ID do pokemon que deseja!</p>
                    </div>
                    <div className="poke-pesq">
                        <input
                            type="text"
                            placeholder="Digite aqui..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                        />
                        <button onClick={procurarPokemon}>
                            Buscar
                        </button>
                    </div>

                    {erro && (
                        <div className="erro">
                            <p>❌ Pokémon não encontrado!</p>
                        </div>
                    )}

                    {pokemon && (
                        <div className="poke-info">
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width:"200px" }} />
                            <div style={{}}>
                                <div>
                                    <h2>{pokemon.name}</h2>
                                    <p>ID: {pokemon.id}</p>
                                </div>
                                <div>
                                    <p>Altura: {pokemon.height / 10} m</p>
                                    <p>Peso: {pokemon.weight / 10} Kg</p>
                                </div>
                                <p>
                                    Tipos:
                                    {pokemon.types.map((t, index) => (
                                        <span key={index}> {t.type.name}</span>
                                    ))}
                                </p>
                                <p>{Geracao(pokemon.id)}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home