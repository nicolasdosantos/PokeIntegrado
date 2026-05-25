import { useEffect, useState } from "react"
import axios from "axios"
import Header from "../Components/Header"
import css from "../styles/Sobre.module.css"

function Sobre() {
    return (
        <div>

            <Header />

            <div className={css.main}>

                <h1>Sobre o projeto</h1>
            </div>

        </div>
    )
}

export default Sobre