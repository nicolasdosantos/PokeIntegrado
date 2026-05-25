[READEME.txt](https://github.com/user-attachments/files/28225676/READEME.txt)
Projeto Pokédex

Integrantes:
- Nicolas Pichiteli dos Santos
- Thiago Panini Cassiano 

Tecnologias utilizadas:
- React
- PHP
- MySQL
- Axios
- Tailwind CSS

Como executar o projeto:

1. FRONT-END
- Abra a pasta front-end no VSCode
- Abra o terminal
- Execute:

npm install
npm run dev

- O React abrirá normalmente no localhost:5173

---------------------------------------------------

2. BACK-END
- Coloque a pasta PokeApi dentro da pasta htdocs do XAMPP/LAMPP

Exemplo:

htdocs/PokeApi

- Inicie o Apache e MySQL pelo XAMPP/LAMPP

---------------------------------------------------

3. BANCO DE DADOS
- Abra o MySQL Workbench ou phpMyAdmin
- Crie um banco chamado:

pokedex

- Importe o arquivo .sql enviado junto do projeto

---------------------------------------------------

4. CONFIGURAÇÃO DO BANCO

No arquivo Db.class.php, altere usuário e senha do MySQL caso necessário:

Exemplo:

$usudb = "root"
$senhadb = "root"

ou

$senhadb = ""

dependendo da configuração do computador.

---------------------------------------------------

Funções do projeto:
- Login
- Cadastro de usuário
- Pesquisa de Pokémon pela PokéAPI
- Sistema de favoritos
- Adicionar descrição personalizada
- CRUD completo de favoritos
- Edição e remoção de favoritos

Observações:
- O projeto foi desenvolvido para desktop
- O front-end utiliza consumo da PokéAPI
- O back-end foi desenvolvido em PHP puro
