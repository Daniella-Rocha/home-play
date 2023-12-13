import { useRef } from "react";

import { Link } from "react-router-dom";

import { TiThMenuOutline } from "react-icons/ti";

import Title from '/img/novo-logo2.png';

import styles from './NavMobile.module.css';

const NavMobile = () => {
    return (
        <>
            <nav className={styles.mobile_menu}>
                <div className={styles.title_container}>
                    <img src={Title} alt="imagem escrito home play, a qual se refere ao logo da aplicação" />
                </div>
                <div>
                    <TiThMenuOutline />
                </div>
            </nav>
            <div className={styles.mobile_options}>
                    <ul>
                        <li>
                            <Link> Filmes</Link>
                        </li>
                        <li>
                            <Link>Séries</Link>
                        </li>
                        <li>
                            <Link>Perfil</Link>
                        </li>
                    </ul>
                </div>
        </>

    )
}

export default NavMobile
