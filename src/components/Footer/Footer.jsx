import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_logo}>
                <h3>Home Play</h3>
            </div>
            <div className={styles.footer_links}>
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
        </footer>
    )
}

export default Footer
