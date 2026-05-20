import Header from "../Components/Header";
import css from "./Perfil.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Perfil() {
    return (
        <div>
            <Header />
            <div className={css.container}>
                <div className={css.card}>
                    <div>
                        <h1>Perfil</h1>
                        <FontAwesomeIcon icon={faCircleUser}  size="5x"/>
                    </div>
                    <div className={css.info}>

                        <p><strong>Nome:</strong> John Doe</p>
                        <p><strong>Email:</strong> john.doe@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;