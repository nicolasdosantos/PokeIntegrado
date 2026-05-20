import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import Header from "../Components/Header"
import "./Detalhes.css"

import colors from "../ultilits/pokemonCor"
import Geracao from "../ultilits/geracao"

function Detalhes() {

    const { id } = useParams()
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                let dados = res.data

                let pokemonNovo = {
                    nome: dados.name,
                    imagem: dados.sprites.front_default,
                    tipos: dados.types,
                    altura: dados.height,
                    peso: dados.weight,
                    hp: dados.stats[0].base_stat,
                    attack: dados.stats[1].base_stat,
                    defense: dados.stats[2].base_stat,
                    speed: dados.stats[5].base_stat,
                    id: dados.id
                }
                setPokemon(pokemonNovo)
            })
    }, [])

    if (!pokemon) {
        return <h1>Carregando...</h1>
    }

    let tipo = pokemon.tipos[0].type.name
    let cor = colors[tipo]

    return (
        <div>
            <Header />
            <div className="main-detalhes">
                <div className="card-detalhes" style={{ backgroundColor: cor }} >
                    <img src={pokemon.imagem} alt={pokemon.nome} />
                    <h1>{pokemon.nome}</h1>
                    <p><strong>ID:</strong> {pokemon.id}</p>
                    <p><strong>Tipo:</strong>
                        {pokemon.tipos.map((t, index) => (
                            <span key={index}> {t.type.name}</span>
                        ))}
                    </p>
                    <p><strong>Altura:</strong> {pokemon.altura / 10} m</p>
                    <p><strong>Peso:</strong> {pokemon.peso / 10} Kg</p>
                    <p><strong>HP:</strong> {pokemon.hp}</p>
                    <p><strong>Ataque:</strong> {pokemon.attack}</p>
                    <p><strong>Defesa:</strong> {pokemon.defense}</p>
                    <p><strong>Velocidade:</strong> {pokemon.speed}</p>
                    <p><strong>Geração:</strong> {Geracao(pokemon.id)}</p>
                </div>
                <a href="/pokemon">
                    <button className="btn-poke-detalhe">Voltar!</button>
                </a>
            </div>
        </div>
    )
}

export default Detalhes