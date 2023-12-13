import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import './carousel.css';

import SlideItem from '../SlideItem/SlideItem';

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
                (movie) =>
                    <SwiperSlide key={movie.id}>
                        <SlideItem key={movie.id} movie={{ ...movie }} />
                    </SwiperSlide>
            )
            }
        </Swiper >
    )

}

export default CarouselSlides
