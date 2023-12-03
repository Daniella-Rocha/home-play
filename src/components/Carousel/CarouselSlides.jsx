import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

// import { FaArrowAltCircleLeft } from "react-icons/fa";

// import { FaArrowAltCircleRight } from "react-icons/fa";

// import styles from './Carousel.module.css';
import './carousel.css';

const CarouselSlides = ({ movieList, index }) => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            {movieList.map((movie) =>

                <SwiperSlide
                    style={{
                        backgroundImage: `url("https://image.tmdb.org/t/p/w300${movie.backdrop_path}")`,
                    }}
                    key={movie.id}
                >
                </SwiperSlide>
            )}
        </Swiper>
    )

}

export default CarouselSlides
