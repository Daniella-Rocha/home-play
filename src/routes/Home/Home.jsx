import { PopularMoviesListContext } from '../../contexts/popularMoviesContext';

import { TopRatedMoviesListContext } from '../../contexts/topRatedContext';

import { NowPlayingData } from '../../contexts/nowPlayingContext';

import HomeBanner from '../../components/HomeBanner/HomeBanner';

import Section from '../../components/Section/Section';

import useTmdbData from '../../hooks/useTmdbData';

const apiKey = import.meta.env.VITE_API_KEY;

import styles from './Home.module.css';

const Home = () => {

  const nowPlaying = useTmdbData(`/now_playing?api_key=${apiKey}&language=pt-BR`);

  const popular = useTmdbData(`/popular?api_key=${apiKey}&language=pt-BR`);

  const topRated = useTmdbData(`/top_rated?api_key=${apiKey}&language=pt-BR`);

  return (
    <div className={styles.home_container}>
      <HomeBanner />

      <NowPlayingData.Provider value={nowPlaying}>
        <Section
          title={'Laçamentos'}
          context={NowPlayingData}

        />
      </NowPlayingData.Provider>

      <PopularMoviesListContext.Provider value={popular}>
        <Section
          title={'Populares'}
          context={PopularMoviesListContext}
        />
      </PopularMoviesListContext.Provider>

      <TopRatedMoviesListContext.Provider value={topRated}>
        <Section
          title={'Mais Bem Avaliados'}
          context={TopRatedMoviesListContext}
        />
      </TopRatedMoviesListContext.Provider>
    </div>

  )
}

export default Home
