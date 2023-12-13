import { useEffect, useState } from 'react';

import useTmdData from '../../hooks/useTmdbData';

import ButtonLink from '../../components/ButtonLink/ButtonLink';

import { plans } from '../../planos/planos';

import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

import Carousel from 'react-bootstrap/Carousel';

import styles from './Welcome.module.css';

import './WelcomeCaroussel.css';

const apiKey = import.meta.env.VITE_API_KEY;

const urlMovieImg = import.meta.env.VITE_IMG;

const Welcome = () => {
    const fetchData = useTmdData(`/popular?api_key=${apiKey}&language=pt-BR`);

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        setSlides(fetchData);
    }, [fetchData, slides]);

    return (
        <div className={styles.container}>
            <div className='.parallax1'>
                <Carousel
                    style={{ height: '100%' }}
                >
                    {slides.map((slide) =>
                        <Carousel.Item>
                            <div
                                style={
                                    {
                                        backgroundImage: `url('https://image.tmdb.org/t/p/original${slide.backdrop_path}')`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        height: '100%'
                                    }
                                }
                            >
                                <Carousel.Caption>
                                    <h1>Um universo de intretenimento.</h1>
                                    <p>Planos a partir de R$ 5,99 BRL/Mês.</p>
                                    <p>Assine hoje, cancele quando quiser.</p>
                                    <p>Cadastre-se agora e ganhe 15 dias grátis.</p>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                    )}
                </Carousel>
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
            <ScrollToTop />
        </div >
    )
}

export default Welcome
