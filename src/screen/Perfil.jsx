import Header from "../Components/Header";
import css from "../styles/Perfil.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Perfil() {

    const [usuario, setUsuario] = useState({})

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("usuario"))

        if (user) {

            axios.get("http://localhost/PokeApi/usuario.php?id=" + user.id)
                .then(res => {
                    setUsuario(res.data)
                })

        }

    }, [])

    return (

        <div className="
            min-h-screen
            bg-[#f0f0f0]
            dark:bg-[#121212]
            transition-all
            duration-300
        ">

            <Header />

            <div className={css.main}>

                <div className={css.container}>
                    <div className={css.banner}>

                        <div className={css.foto}>

                        </div>

                    </div>

                    <div className={css.card}>

                        <h1>
                            Perfil 👤
                        </h1>

                        <div className={css.info}>

                            <p>
                                <strong>Registro:</strong> {usuario.id}
                            </p>

                            <p>
                                <strong>Nome:</strong> {usuario.nome}
                            </p>

                            <p>
                                <strong>Email:</strong> {usuario.email}
                            </p>

                        </div>

                        <div className={css.botoes}>

                            <button>
                                Editar Perfil
                            </button>

                            <button>
                                Trocar Foto
                            </button>

                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
}

export default Perfil;