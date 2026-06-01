import Header from "../Components/Header";
import css from "../styles/Sobre.module.css";

function Sobre() {
  return (
    <div className={`
        ${css.container}
        bg-[#f0f0f0]
        dark:bg-[#121212]
        min-h-screen
        transition-all
        duration-300
    `}>
      <Header />

      <main className={`${css.main} dark:text-white`}>
        <section className={`
            ${css.card}
            bg-white
            dark:bg-zinc-800
            transition-all
            duration-300
        `}>
          <h1 className={`${css.title} dark:text-red-500`}>Boas-vindas à nossa Pokedex Interativa!</h1>
          
          <p className={`${css.text} dark:text-gray-200`}>
            Este site nasceu da paixão pelo universo Pokémon e do desejo de criar
            uma ferramenta que fosse além de uma simples enciclopédia digital.
            Conectado diretamente à <strong>PokéAPI</strong>, nossa plataforma traz dados
            atualizados sobre suas criaturas favoritas em tempo real.
          </p>

          <h2 className={`${css.subtitle} dark:text-white dark:border-zinc-600`}>O que você pode fazer por aqui?</h2>
          
          <p className={`${css.text} dark:text-gray-200`}>
            Diferente de uma Pokedex convencional, aqui você é o verdadeiro
            Treinador Pokémon. Nosso sistema foi moldado para que você tenha total
            controle sobre a sua jornada:
          </p>

          <ul className={css.featureList}>
            <li className="dark:bg-zinc-900 dark:text-gray-200 dark:shadow-none dark:border-red-500">
              <strong className="dark:text-red-400">Exploração Completa:</strong> Navegue por uma vasta lista de Pokémon,
              conferindo seus tipos, habilidades e estatísticas essenciais.
            </li>
            <li className="dark:bg-zinc-900 dark:text-gray-200 dark:shadow-none dark:border-red-500">
              <strong className="dark:text-red-400">Seus Favoritos em um Só Lugar:</strong> Encontrou aquele parceiro ideal para a
              sua equipe? Favorite-o com um clique para acessá-lo rapidamente sempre
              que quiser.
            </li>
            <li className="dark:bg-zinc-900 dark:text-gray-200 dark:shadow-none dark:border-red-500">
              <strong className="dark:text-red-400">Sua Pokedex, Suas Regras:</strong> Use o sistema de descrições personalizadas
              para anotar suas próprias estratégias, memórias de batalhas ou
              apelidos carinhosos para cada Pokémon.
            </li>
          </ul>

          <div className={`${css.credits} dark:border-zinc-600`}>
            <h3 className={`${css.creditsTitle} dark:text-red-500`}>Desenvolvedores</h3>
            <ul className={css.devList}>
              <li className="dark:bg-zinc-900 dark:border-zinc-600 dark:text-gray-200">
                <strong className="dark:text-white">Thiago Panini Cassiano</strong>
                <span className="dark:text-gray-300">RA: 221228</span>
              </li>
              <li className="dark:bg-zinc-900 dark:border-zinc-600 dark:text-gray-200">
                <strong className="dark:text-white">Nicolas Pichiteli dos Santos</strong>
                <span className="dark:text-gray-300">RA: 221360</span>
              </li>
            </ul>
          </div>

        </section>
      </main>
    </div>
  );
}

export default Sobre;