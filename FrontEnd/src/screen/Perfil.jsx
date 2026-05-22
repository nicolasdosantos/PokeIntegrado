import Header from "../Components/Header";
import css from "../styles/Perfil.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Perfil() {

    const [usuario, setUsuario] = useState({})

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("usuario"))

        if(user){

            axios.get("http://localhost/PokeApi/usuario.php?id=" + user.id)
            .then(res => {
                setUsuario(res.data)
            })

        }

    }, [])

    return (
        <div className="min-h-screen w-full bg-slate-50 pb-12">
            <Header />

            <div className={css.container}>
                <div className={css.cartao}>

                    <div className={css.topoGradiente}></div>

                    <div className={css.fotoPerfil}>
                        <div className={css.pokebola}>
                            <div className={css.parteVermelha}></div>
                            <div className={css.linhaPreta}></div>
                            <div className={css.botaoMeio}>
                                <div className={css.centroBotao}></div>
                            </div>
                            <div className={css.parteBranca}></div>
                        </div>
                    </div>

                    <div className={css.dadosPrincipais}>
                        <h2>{usuario.nome}</h2>
                    </div>

                    <div className={css.linhaDivisoria}></div>

                    <div className={css.listaInfo}>

                        <div className={css.campo}>
                            <span className={css.tituloCampo}>Username</span>
                            <div className={css.caixaTexto}>
                                <span>{usuario.nome}</span>
                            </div>
                        </div>

                        <div className={css.campo}>
                            <span className={css.tituloCampo}>Email</span>
                            <div className={css.caixaTexto}>
                                <span>{usuario.email}</span>
                            </div>
                        </div>

                        <div className={css.campo}>
                            <span className={css.tituloCampo}>Password</span>
                            <div className={css.caixaTexto}>
                                <span>••••••••••••</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;