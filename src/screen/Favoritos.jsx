import { useState, useEffect } from "react"
import axios from "axios"
import Header from "../Components/Header"
import colors from "../ultilits/pokemonCor"
import Geracao from "../ultilits/geracao"
import css from "../styles/Favoritos.module.css"

function Favoritos() {

    const [pokemon, setPokemon] = useState("")
    const [dados, setDados] = useState(null)
    const [favoritos, setFavoritos] = useState([])
    const [editDesc, setEditDesc] = useState({})
    const usuario = JSON.parse(localStorage.getItem("usuario"))

    function buscarPokemon() {

        if (pokemon == "") return

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

    function carregarFavoritos() {

        if (!usuario) return

        axios.get(`http://localhost/PokeApi/favoritos.php?id_usuario=${usuario.id}`)
            .then((res) => {
                setFavoritos([...res.data])
            })

    }

    function favoritar() {

        if (!dados || !usuario) return

        axios.post("http://localhost/PokeApi/favoritos.php", {
            id_usuario: usuario.id,
            pokemon_id: dados.id,
            nome: dados.nome,
            imagem: dados.imagem,
            tipo: dados.tipo,
            descricao: ""
        }).then(() => {
            carregarFavoritos()
        })

    }

    function remover(id) {

        axios.delete("http://localhost/PokeApi/favoritos.php", {
            data: { id: id }
        }).then(() => {
            carregarFavoritos()
        })

    }

    function atualizarDescricao(id) {

        const descricao = editDesc[id]

        axios.put("http://localhost/PokeApi/favoritos.php", {
            id: id,
            descricao: descricao
        })
            .then(() => {

                carregarFavoritos()
            })
            .catch((err) => {

                console.log(err)

            })
    }
    useEffect(() => {
        carregarFavoritos()
    }, [])

    return (

        <div>

            <Header />

            <div className="grid grid-cols-2 bg-[#f0f0f0] justify-items-center content-start text-center h-[93vh]">

                <div className={css.esq}>

                    <h2 className="text-4xl font-bold mb-5">
                        Pesquisar 🔍
                    </h2>

                    <p>(Digite o nome ou ID de um Pokémon)</p>

                    <div className="flex gap-3">

                        <input
                            type="text"
                            value={pokemon}
                            onChange={(e) => setPokemon(e.target.value)}
                            className="border border-gray-400 rounded-lg"
                        />

                        <button onClick={buscarPokemon}>
                            Buscar
                        </button>

                    </div>

                    <div className="mt-10">

                        {dados && (

                            <div
                                className={css.cardPokemon}
                                style={{ backgroundColor: colors[dados.tipo] }}
                            >

                                <img src={dados.imagem} alt="" />

                                <h2>
                                    {dados.nome.charAt(0).toUpperCase() + dados.nome.slice(1)}
                                </h2>

                                <p><strong>ID:</strong> {dados.id}</p>
                                <p><strong>Tipo:</strong> {dados.tipo}</p>

                                <button onClick={favoritar}>
                                    Favoritar
                                </button>

                            </div>

                        )}

                    </div>

                </div>

                <div className={css.dir}>

                    <h2 className="text-4xl font-bold mb-5">
                        Favoritos ⭐
                    </h2>

                    <p>(Seus Pokémon favoritos)</p>

                    <div className="flex flex-wrap gap-5 mt-10 justify-center items-center">

                        {favoritos.map((item) => (

                            <div
                                key={item.id}
                                className={css.cardPokemon}
                                style={{ backgroundColor: colors[item.tipo] }}
                            >

                                <div className="grid grid-cols-3 justify-between items-center gap-10 h-[80%]">

                                    <div>
                                        <img src={item.imagem} alt="" />

                                        <h2>
                                            {item.nome.charAt(0).toUpperCase() + item.nome.slice(1)}
                                        </h2>
                                    </div>

                                    <div>
                                        <p><strong>ID:</strong> {item.pokemon_id}</p>
                                        <p><strong>Tipo:</strong> {item.tipo}</p>
                                        <p><strong>Geração:</strong> {Geracao(item.pokemon_id)}</p>
                                    </div>

                                    <div className={css.descBox}>

                                        <p><strong>Descrição:</strong></p>
                                        <div className={css.desc}>

                                            <p>
                                                {item.descricao || "Sem descrição"}
                                            </p>
                                        </div>

                                        <input
                                            type="text"
                                            placeholder="Editar descrição"
                                            value={editDesc[item.id] ?? ""}
                                            onChange={(e) => {
                                                setEditDesc({
                                                    ...editDesc,
                                                    [item.id]: e.target.value
                                                })
                                            }}
                                            className={css.inputDesc}
                                        />
                                        <button
                                            onClick={() => {
                                                console.log("Salvo")
                                                atualizarDescricao(item.id)
                                            }}
                                        >
                                            Salvar
                                        </button>

                                    </div>

                                </div>

                                <div className={css.remover}>
                                    <button
                                        onClick={() => remover(item.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
                                    >
                                        Remover
                                    </button>
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Favoritos