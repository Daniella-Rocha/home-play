
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import { plans } from '../../planos/planos';

import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

import styles from './Welcome.module.css';

const Welcome = () => {

    return (
        <div className={styles.container}>
            <div className={styles.parallax1}>
                <div>
                    <h1>Um universo de intretenimento.</h1>
                    <p>Planos a partir de R$ 5,99 BRL/Mês.</p>
                    <p>Assine hoje, cancele quando quiser.</p>
                    <p>Cadastre-se agora e ganhe 15 dias grátis.</p>
                </div>
                <div>
                    <ButtonLink  
                        border={'1px solid #fff'}
                        color={'#9b22e5'}
                        url={'/signup'}
                    >
                        Assinar Home Play
                    </ButtonLink>
                </div>
                <div>
                    <ButtonLink 
                        border={'1px solid #fff'}
                        assinante={true}
                        url={'/signin'}
                    >
                        Sou assinante
                    </ButtonLink>
                </div>
            </div>
            <div className={styles.parallax2}>
                <h1>Baixe séries para assistir offline</h1>
                <p>Assista em um avião, trem ou submarino...</p>
            </div>
            <div className={styles.parallax3}>
                <h1>FILMES E SÉRIES IMPERDÍVEIS</h1>
                <p>Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.</p>
            </div>
            <div className={styles.plans}>
                <div>
                    <h1>Escolha o melhor plano para você</h1>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>{plans[0].plano}</th>
                            </tr>
                            <tr>
                                <th>{plans[1].plano}</th>
                            </tr>
                            <tr>
                                <th>{plans[2].plano}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Preço por mês:</th>
                                <td>{plans[0].preco}</td>
                                <td>{plans[1].preco}</td>
                                <td>{plans[2].preco}</td>
                            </tr>
                            <tr>
                                <th>Resolução:</th>
                                <td>{plans[0].resolucao}</td>
                                <td>{plans[1].resolucao}</td>
                                <td>{plans[2].resolucao}</td>
                            </tr>
                            <tr>
                                <th>Sem Anúncios:</th>
                                <td><img src={plans[0].sem_anuncio} alt="um xis informando que este plano não é sem anúncios" /></td>
                                <td><img src={plans[1].sem_anuncio} alt="um check informando que este plano é sem anúncios" /></td>
                                <td><img src={plans[2].sem_anuncio} alt="um check informando que este plano é sem anúncios" /></td>
                            </tr>
                            <tr>
                                <th>Download:</th>
                                <td><img src={plans[0].download} alt="um xis informando que este plano não pode fazer downloads" /></td>
                                <td><img src={plans[1].download} alt="um xis informando que este plano não pode fazer downloads" /></td>
                                <td><img src={plans[2].download} alt="um check informando que este plano pode fazer downloads" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <ScrollToTop/>
        </div>
    )
}

export default Welcome
