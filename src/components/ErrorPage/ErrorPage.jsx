import { Link, useRouteError } from "react-router-dom";

import styles from './ErrorPage.module.css';

import Error from '/error.jpg';

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className={styles.error_page}>
            <h1>Ooops!</h1>
            <p>Algo deu errado.</p>
            <img src={Error} alt="página de erro" />
            <Link to={'/'}>
                Voltar
            </Link>
        </div>
    )
}

export default ErrorPage;
