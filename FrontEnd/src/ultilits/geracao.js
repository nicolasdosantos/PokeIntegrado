function Geracao(id) {

    if (id <= 151) return "1º Geração"
    else if (id <= 251) return "2º Geração"
    else if (id <= 386) return "3º Geração"
    else if (id <= 494) return "4º Geração"
    else if (id <= 649) return "5º Geração"
    else if (id <= 721) return "6º Geração"
    else if (id <= 809) return "7º Geração"
    else if (id <= 905) return "8º Geração"
    else return "9º Geração"

}

export default Geracao