import { useEffect, useState } from "react"
import axios from "axios"

import Header from "../Components/Header"
import './Aleatorio.css'

import colors from "../ultilits/pokemonCor"
import Geracao from "../ultilits/geracao"

function Aletorio(){

    const [pokemon, setPokemon] = useState(null)

    function buscarPokemon(){

        let id = Math.floor(Math.random() * 905) + 1

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {

                let dados = res.data

                let novo = {
                    id: dados.id,
                    nome: dados.name,
                    imagem: dados.sprites.front_default,
                    tipo: dados.types[0].type.name,
                    altura: dados.height,
                    peso: dados.weight
                }

                setPokemon(novo)

            })

    }

    useEffect(() => {

        buscarPokemon()

    }, [])

    return(
        <div>

            <Header />

            <div className="main-random">

                <h1>Surpreenda-se 🎲</h1>

                {pokemon && (

                    <div
                        className="card-random"
                        style={{ backgroundColor: colors[pokemon.tipo] }}
                    >

                        <img src={pokemon.imagem} alt={pokemon.nome} />

                        <h2><strong>Nome:</strong> {pokemon.nome}</h2>

                        <p><strong>ID:</strong> {pokemon.id}</p>

                        <p><strong>Tipo:</strong> {pokemon.tipo}</p>

                        <p><strong>Altura:</strong> {pokemon.altura / 10} m</p>

                        <p><strong>Peso:</strong> {pokemon.peso / 10} Kg</p>

                        <p><strong>Geração:</strong> {Geracao(pokemon.id)}</p>

                    </div>

                )}

                <button
                    className="btn-random"
                    onClick={buscarPokemon}
                >
                    Gerar outro
                </button>

            </div>

        </div>
    )
}

export default Aletorio