import css from "./Cadastro.module.css"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import pikachu from "../assets/pikachu.gif"
import totodile from "../assets/totodile.gif"
import eevee from "../assets/eevee2.gif" 

import pokeball from "../assets/pokeball.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

function Cadastro() {

  const [login, setLogin] = useState("")
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")

  const navigate = useNavigate()

  return (
    <div className={css.cadastroContainer}>

      <div className={css.cardCadastro}>

        <div className={css.esq}>
          <img src={eevee} alt="" />
        </div>

        <div className={css.dir}>

          <div className={css.tituloCadastro}>

            <h1>Cadastro</h1>

            <img src={pokeball} alt="" />

          </div>

          <div className={css.inputCadastro}>

            <FontAwesomeIcon
              icon={faCircleUser}
              className={css.iconeInput}
            />

            <input
              type="text"
              placeholder="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />

          </div>

          <div className={css.inputCadastro}>

            <FontAwesomeIcon
              icon={faCircleUser}
              className={css.iconeInput}
            />

            <input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

          </div>

          <div className={css.inputCadastro}>

            <FontAwesomeIcon
              icon={faLock}
              className={css.iconeInput}
            />

            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

          </div>

          <div className={css.inputCadastro}>

            <FontAwesomeIcon
              icon={faLock}
              className={css.iconeInput}
            />

            <input
              type="password"
              placeholder="Confirmar Senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />

          </div>

          <div className={css.btns}>

            <div className={css.cadastroBtn}>
              <button className={css.cadastrar}>
                Cadastrar
              </button>
            </div>

            <div className={css.loginBtn}>

              <button
                className={css.login}
                onClick={() => navigate("/")}
              >
                Já possui conta? Faça login!
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Cadastro