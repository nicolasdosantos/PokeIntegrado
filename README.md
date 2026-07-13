# 🔴 Pokédex

Aplicação web full-stack de Pokédex com autenticação, busca por Pokémon via [PokéAPI](https://pokeapi.co/) e sistema de favoritos com CRUD completo, incluindo descrições personalizadas por usuário.

**Stack:** React 19 + Vite · Tailwind CSS 4 · PHP puro · MySQL · Axios

---

## Sobre o projeto

Projeto acadêmico full-stack construído do zero, com front-end desacoplado do back-end via API REST. O objetivo foi praticar a integração entre uma SPA em React e uma API própria em PHP, consumindo dados de uma API pública em conjunto com dados persistidos em banco relacional.

### Funcionalidades

- 🔐 **Autenticação** — login e cadastro de usuário
- 🔍 **Busca de Pokémon** — consumo da PokéAPI por nome/ID
- 🎲 **Pokémon aleatório** — descoberta rápida
- 📋 **Detalhes** — atributos, tipos e sprites de cada Pokémon
- ⭐ **Favoritos (CRUD)** — adicionar, editar, listar e remover, com descrição personalizada por usuário
- 👤 **Perfil** — área do usuário autenticado

---

## Arquitetura

```
ProjetoPoke/
├── FrontEnd/            # SPA React (Vite + Tailwind)
│   └── src/
│       ├── screen/      # Páginas: Home, Login, Cadastro, Perfil, Favoritos, Detalhes, Aleatorio, Sobre
│       ├── Components/  # Componentes compartilhados (Header, etc.)
│       ├── ultilits/    # Helpers (geração/cor de Pokémon)
│       └── styles/      # CSS Modules por tela
├── BackEnd/
│   └── PokeApi/         # API REST em PHP puro
│       ├── Db.class.php     # Camada de conexão/acesso ao MySQL
│       ├── login.php        # Autenticação
│       ├── cadastro.php     # Registro de usuário
│       ├── usuario.php      # Dados do usuário
│       └── favoritos.php    # CRUD de favoritos
└── BancoDeDados/
    └── Pokedex.sql      # Schema (usuarios, favoritos) + seed
```

**Fluxo:** o front-end React consome a PokéAPI diretamente para dados de Pokémon, e chama a API PHP própria (via Axios) para autenticação e persistência de favoritos no MySQL.

### Modelo de dados

| Tabela | Descrição |
|---|---|
| `usuarios` | Conta do usuário (nome, e-mail, senha) |
| `favoritos` | Pokémon favoritado por usuário, com `pokemon_id`, nome, imagem, tipo e descrição customizada — `FK` para `usuarios` |

---

## Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18+
- PHP 8+ com Apache/MySQL (via [XAMPP](https://www.apachefriends.org/) ou [LAMPP](https://www.apachefriends.org/index.html))
- MySQL Workbench ou phpMyAdmin

### 1. Banco de dados

```sql
CREATE DATABASE pokedex;
```

Importe o dump em `BancoDeDados/Pokedex.sql` (via MySQL Workbench, phpMyAdmin ou linha de comando):

```bash
mysql -u root -p pokedex < BancoDeDados/Pokedex.sql
```

### 2. Back-end (PHP)

Copie a pasta `BackEnd/PokeApi` para o diretório `htdocs` do XAMPP/LAMPP:

```
htdocs/PokeApi
```

Ajuste as credenciais do banco em `Db.class.php` conforme seu ambiente:

```php
$usudb = "root";
$senhadb = "";   // ou "root", dependendo da instalação
```

Inicie o Apache e o MySQL pelo painel do XAMPP/LAMPP.

### 3. Front-end (React)

```bash
cd FrontEnd
npm install
npm run dev
```

A aplicação sobe em `http://localhost:5173`.

---

## Tech stack

| Camada | Tecnologias |
|---|---|
| Front-end | React 19, React Router 7, Vite, Tailwind CSS 4, Axios, FontAwesome |
| Back-end | PHP (vanilla, sem framework) |
| Banco de dados | MySQL 8 |
| Dados externos | [PokéAPI](https://pokeapi.co/) |

---

## Observações

- Projeto desenvolvido com foco em **desktop**.
- O back-end é PHP puro (sem frameworks), para reforçar fundamentos de API REST e acesso a dados sem abstrações.

---

## Autores

- **Nicolas Pichiteli dos Santos**
- **Thiago Panini Cassiano**
