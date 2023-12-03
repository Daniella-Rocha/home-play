import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

import Title from '/img/home-play (2).png';

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_logo}>
                <img src={Title} alt="imagem escrito home play, a qual se refere ao logo da aplicação" />
            </div>
            <div>
                <ul>
                    <li>
                        <Link>Quem somos</Link>
                    </li>
                    <li>
                        <Link>Assine o Home Play</Link>
                    </li>
                    <li>
                        <Link>Política de privacidade</Link>
                    </li>
                    <li>
                        <Link>Lançamentos</Link>
                    </li>
                    <li>
                        <Link>Programação Home Play</Link>
                    </li>
                    <li>
                        <Link>Como anunciar</Link>
                    </li>
                    <li>
                        <Link>Trabalhe no Home Play</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
