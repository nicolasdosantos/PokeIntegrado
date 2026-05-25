import css from "../styles/Cadastro.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import eevee from "../assets/eevee2.gif"
import pokeball from "../assets/pokeball.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faLock } from '@fortawesome/free-solid-svg-icons'

function Cadastro() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")

  const navigate = useNavigate()

  function cadastrar() {

    if(senha !== confirmarSenha){
      alert("senhas diferentes")
      return
    }

    axios.post("http://localhost/PokeApi/cadastro.php", {
      nome: nome,
      email: email,
      senha: senha
    })
    .then(res => {

      if(res.data.success){
        alert("cadastrado com sucesso")
        navigate("/")
      }else{
        alert("email já existe")
      }

    })
    .catch(() => {
      alert("erro no servidor")
    })

  }

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

            <FontAwesomeIcon icon={faCircleUser} className={css.iconeInput} />

            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

          </div>

          <div className={css.inputCadastro}>

            <FontAwesomeIcon icon={faCircleUser} className={css.iconeInput} />

            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <div className={css.inputCadastro}>

            <FontAwesomeIcon icon={faLock} className={css.iconeInput} />

            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

          </div>

          <div className={css.inputCadastro}>

            <FontAwesomeIcon icon={faLock} className={css.iconeInput} />

            <input
              type="password"
              placeholder="Confirmar Senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />

          </div>

          <div className={css.btns}>

            <div className={css.cadastroBtn}>
              <button className={css.cadastrar} onClick={cadastrar}>
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