import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Header from "../Components/Header"
import "../styles/Pokemon.css"
import colors from "../ultilits/pokemonCor"
import Geracao from "../ultilits/geracao"

function Pokemon() {

    const [lista, setLista] = useState([])
    const [limite, setLimite] = useState(10)
    const navigate = useNavigate()

    useEffect(() => {
        setLista([])

        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limite}`)
            .then(res => {
                res.data.results.forEach((item) => {

                    axios.get(item.url)
                        .then(respoke => {
                            let poke = respoke.data

                            let novo = {
                                id: poke.id,
                                nome: poke.name,
                                imagem: poke.sprites.front_default,
                                tipos: poke.types
                            }
                            setLista(listaAtual => [...listaAtual, novo])
                        })
                })
            })
    }, [limite])

    return (
        <div className="
            bg-[#f0f0f0]
            dark:bg-[#121212]
            min-h-screen
            transition-all
            duration-300
        ">
            <Header />
            <div className="main-poke">
                <h1  className="dark:text-white" style={{paddingTop: "10px"}}>Lista de Pokémon 📝</h1>
                <p  className="dark:text-white" >(Clique no card para mais informações do poekmon!)</p>
                <div className="grid-poke">
                    {lista
                        .sort((a, b) => a.id - b.id)
                        .map((pokemon, index) => {
                            let tipo = pokemon.tipos[0].type.name
                            let cor = colors[tipo] || "#eee"
                            return (
                                <div className="card-poke" key={index}
                                    style={{ backgroundColor: cor }}
                                    onClick={() => navigate(`/pokemon/${pokemon.id}`)}
                                >
                                    <img src={pokemon.imagem} alt={pokemon.nome} style={{ width: "120px" }} />
                                    <h3>{pokemon.nome}</h3>
                                    <p><strong>ID:</strong> {pokemon.id}</p>
                                    <p>
                                        <strong>Tipos:</strong>
                                        {pokemon.tipos.map((t, i) => (
                                            <span key={i}> {t.type.name}</span>
                                        ))}
                                    </p>
                                    <p><strong>Geração:</strong> {Geracao(pokemon.id)}</p>
                                </div>
                            )
                        })}
                </div>
                <button className="btn-poke" style={{marginBottom: "10px"}}  onClick={() => setLimite(limite + 10)}>
                    Ver mais
                </button>
            </div>
        </div>
    )
}

export default Pokemon