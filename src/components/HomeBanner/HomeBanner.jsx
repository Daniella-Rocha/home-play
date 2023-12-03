import { useEffect, useState } from 'react';

import useTdmdData from '../../hooks/useTdmdData';

import ButtonLink from '../ButtonLink/ButtonLink';

import styles from './HomeBanner.module.css';

const apiKey = import.meta.env.VITE_API_KEY;

const urlMovieImg = import.meta.env.VITE_IMG;

const HomeBanner = () => {
  const fetchData = useTdmdData(`/popular?api_key=${apiKey}&language=pt-BR`);

  const [selectedRandomMovie, setSelectedRandomMovie] = useState({});

  const [backgroundImg, setbackgroundImg] = useState('');

  const selectBanner = () => {
    if (fetchData) {
      const randomMovie = Math.floor(Math.random() * fetchData.length - 1);
      setSelectedRandomMovie(fetchData[randomMovie]);
      setbackgroundImg(selectedRandomMovie?.backdrop_path);
    }
  }

  useEffect(() => {
    selectBanner();
  }, [fetchData, selectedRandomMovie]);


  return (
    <>
      {
        selectedRandomMovie ?
          (
            <div
              className={styles.movie_banner}
              style={{ backgroundImage: `url(${urlMovieImg}/w1280${backgroundImg})` }}
            >
              <div className={styles.banner_content}>
                <h1>{selectedRandomMovie.title}</h1>
                <div>
                  <p
                    className={styles.overview}
                  >
                    {selectedRandomMovie.overview}
                  </p>
                </div>
                <div className={styles.btn_links}>
                  <div>
                    <ButtonLink
                      bdRadius={'5px'}
                      bgColor={'#43079d'}
                      url={'/'}
                    >
                      Play
                    </ButtonLink>
                  </div>
                  <div>
                    <ButtonLink
                      bdRadius={'5px'}
                      bgColor={'#43079d'}
                      url={'/'}
                    >
                      My List
                    </ButtonLink>
                  </div>
                </div>

              </div>
            </div>
          )
          :
          (
            <p>
              Carregando lista de filmes...
            </p>
          )
      }
    </>
  )
}

export default HomeBanner;
