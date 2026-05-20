import { useState } from "react"
import axios from "axios"

import Header from "../Components/Header"

import colors from "../ultilits/pokemonCor"

import css from "../styles/Favoritos.module.css"

function Favoritos() {

    const [pokemon, setPokemon] = useState("")
    const [dados, setDados] = useState(null)
    const [favoritos, setFavoritos] = useState([])

    function buscarPokemon() {

        if (pokemon == "") {
            return
        }

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)

            .then((resposta) => {

                let poke = {
                    id: resposta.data.id,
                    nome: resposta.data.name,
                    imagem: resposta.data.sprites.front_default,
                    tipo: resposta.data.types[0].type.name
                }

                setDados(poke)

            })

            .catch(() => {

                alert("Pokemon não encontrado")

            })

    }

    function favoritar() {

        if (!dados) {
            return
        }

        let existe = favoritos.find((item) => item.id == dados.id)

        if (!existe) {

            setFavoritos([...favoritos, dados])

        }

    }

    function remover(id) {

        let novaLista = favoritos.filter((item) => item.id != id)

        setFavoritos(novaLista)

    }

    return (

        <div>

            <Header />

            <div className="p-10">

                <h1 className="text-4xl font-bold mb-5">
                    Favoritos ⭐
                </h1>

                <div className="flex gap-3">

                    <input
                        type="text"
                        placeholder="Digite um Pokémon"
                        value={pokemon}
                        onChange={(e) => setPokemon(e.target.value)}
                        className="border border-gray-400 rounded-lg p-3"
                    />

                    <button
                        onClick={buscarPokemon}
                        className="bg-blue-500 text-white px-5 rounded-lg"
                    >
                        Buscar
                    </button>

                </div>

                {dados && (

                    <div
                        className={css.cardPokemon}
                        style={{ backgroundColor: colors[dados.tipo] }}
                    >

                        <img
                            src={dados.imagem}
                            alt=""
                        />

                        <h2>{dados.nome}</h2>

                        <p>ID: {dados.id}</p>

                        <p>Tipo: {dados.tipo}</p>

                        <button
                            onClick={favoritar}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
                        >
                            Favoritar
                        </button>

                    </div>

                )}

                <div className="flex flex-wrap gap-5 mt-10">

                    {favoritos.map((item) => (

                        <div
                            key={item.id}
                            className={css.cardPokemon}
                            style={{ backgroundColor: colors[item.tipo] }}
                        >

                            <img
                                src={item.imagem}
                                alt=""
                            />

                            <h2>{item.nome}</h2>

                            <p>ID: {item.id}</p>

                            <p>Tipo: {item.tipo}</p>

                            <button
                                onClick={() => remover(item.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
                            >
                                Remover
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    )
}

export default Favoritos