import "./Login.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import pikachu from "../assets/pikachu.gif"
import pokeball from "../assets/pokeball.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

function Login() {

  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")

  const navigate = useNavigate()

  return (
    <div className="login-container">

      <div className="card-login">

        <div className="esq">
          <img src={pikachu} alt="" />
        </div>

        <div className="dir">

          <div className="titulo-login">

            <h1>Login</h1>

            <img src={pokeball} alt="" />

          </div>

          <div className="input-login">

            <FontAwesomeIcon
              icon={faCircleUser}
              className="icone-input"
            />

            <input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

          </div>

          <div className="input-login">

            <FontAwesomeIcon
              icon={faLock}
              className="icone-input"
            />

            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

          </div>

          <div className="btns">

            <div className="login">
              <button className="entrar" onClick={() => navigate("/home")}>
                Entrar
              </button>
            </div>

            <div className="cadastrar">

              <button
                className="cadastro"
                onClick={() => navigate("/cadastro")}
              >
                Não tem conta? Crie aqui!
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login