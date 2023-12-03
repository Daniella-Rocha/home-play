import { useContext } from 'react';

import CarouselSlides from '../Carousel/CarouselSlides';

import styles from './Section.module.css';

const Section = ({title, context}) => {
    const dataContext = useContext(context);
    
    return (
        <div className={styles.container}>
            <div className={styles.title_box}>
                <h1>{title}</h1>
            </div>
            <CarouselSlides movieList={dataContext}/>
        </div>
    )
}

export default Section
