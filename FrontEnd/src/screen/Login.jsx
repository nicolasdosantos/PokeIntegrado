import "../styles/Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import pikachu from "../assets/pikachu.gif"
import pokeball from "../assets/pokeball.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faLock } from '@fortawesome/free-solid-svg-icons'

function Login() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const navigate = useNavigate()

  function logar() {

    axios.post("http://localhost/PokeApi/login.php", {
      email: email,
      senha: senha
    })
    .then(res => {

      if(res.data.success){

        localStorage.setItem("usuario", JSON.stringify(res.data.usuario))

        navigate("/home")

      }else{
        alert("login ou senha incorretos")
      }

    })
    .catch(() => {
      alert("erro no servidor")
    })

  }

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

            <FontAwesomeIcon icon={faCircleUser} className="icone-input" />

            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <div className="input-login">

            <FontAwesomeIcon icon={faLock} className="icone-input" />

            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

          </div>

          <div className="btns">

            <div className="login">
              <button className="entrar" onClick={logar}>
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