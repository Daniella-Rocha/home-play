import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import './carousel.css';

import CardMovie from '../CardMovie/CardMovie';

const CarouselSlides = ({ movieList }) => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={'auto'}
            navigation={true}
            modules={[Navigation]}
            pagination={{ clickable: true }}
            className="mySwiper"
        >
            {movieList.map(
                (movie, index) =>
                    <SwiperSlide key={index}>
                        <CardMovie movie={{ ...movie }} key={movie.id} />
                    </SwiperSlide>
            )
            }
        </Swiper >
    )

}

export default CarouselSlides;
