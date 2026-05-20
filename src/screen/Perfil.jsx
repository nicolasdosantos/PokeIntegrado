import Header from "../Components/Header";
import css from "./Perfil.module.css";

function Perfil() {
    return (
        <div className="min-h-screen w-full bg-slate-50 pb-12">
            <Header />
            
            <div className={css.container}>
                <div className={css.cartao}>
                    
                    <div className={css.topoGradiente}></div>
                    
                    <div className={css.fotoPerfil}>
                        <div className={css.pokebola}>
                            <div className={css.parteVermelha}></div>
                            <div className={css.linhaPreta}></div>
                            <div className={css.botaoMeio}>
                                <div className={css.centroBotao}></div>
                            </div>
                            <div className={css.parteBranca}></div>
                        </div>
                    </div>

                    <div className={css.dadosPrincipais}>
                        <h2>ash_ketchum</h2>
                    </div>

                    <div className={css.linhaDivisoria}></div>

                    <div className={css.listaInfo}>
                        
                        <div className={css.campo}>
                            <span className={css.tituloCampo}>Username</span>
                            <div className={css.caixaTexto}>
                                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                <span>ash_ketchum</span>
                            </div>
                        </div>

                        <div className={css.campo}>
                            <span className={css.tituloCampo}>Email</span>
                            <div className={css.caixaTexto}>
                                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>sadasdasd</span>
                            </div>
                        </div>

                        <div className={css.campo}>
                            <span className={css.tituloCampo}>Password</span>
                            <div className={css.caixaTexto}>
                                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                <span className={css.pontosSenha}>••••••••••••</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;