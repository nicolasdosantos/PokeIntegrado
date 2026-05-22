import { useState } from "react"
import Header from "../Components/Header"
import "../styles/Home.css"
import logo from "../assets/logo_pokedex-removebg-preview 2.svg"
import Geracao from "../ultilits/geracao"

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

    return (
        <div>
            <Header />
            <div className="main">
                <div className="card">
                    <div className="titulo">
                        <h3>
                            Bem-Vindo ao Pokedex!
                        </h3>
                    </div>
                    <div className="poke-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <h1>
                            Seja Bem vindo a PokeDex!
                        </h1>
                        <p>
                            Digite o nome ou ID do pokemon que deseja!
                        </p>
                    </div>
                    <div className="poke-pesq">
                        <input type="text" placeholder="Digite aqui..." value={busca} onChange={(e) => setBusca(e.target.value)}/>
                        <button onClick={procurarPokemon}>
                            Buscar
                        </button>
                    </div>
                    {erro && (
                        <div className="erro">
                            <p>
                                ❌ Pokémon não encontrado!
                            </p>
                        </div>
                    )}
                    {pokemon && (
                        <div className="poke-info">
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: "200px" }} />
                            <div>
                                <div>
                                    <h2>
                                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                    </h2>
                                    <p>
                                        <strong>ID:</strong> {pokemon.id}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <strong>Altura:</strong> {pokemon.height / 10} m
                                    </p>
                                    <p>
                                        <strong>Peso:</strong> {pokemon.weight / 10} Kg
                                    </p>
                                </div>
                                <p>
                                    <strong>Tipos:</strong>
                                    {pokemon.types.map((t, index) => (

                                        <span key={index}>
                                            {" "}{t.type.name}
                                        </span>
                                    ))}
                                </p>
                                <p>
                                    <strong>Geração:</strong> {Geracao(pokemon.id)}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home