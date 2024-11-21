'use client'
import React from 'react';
import { useState } from 'react';
import styles from './imagesScrollerStyles.module.css';
import {IMovie} from "@/app/models/IMovie";
import {ITelevision} from "@/app/models/ITelevision";
import {imgBaseURL} from "@/app/urls/urls";
type CarouselProps = {
    array:IMovie[] | ITelevision[]
}
const Carousel = ({array}:CarouselProps) => {


    const slidesToShow = 4;
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveSlide = (direction:string) => {
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % array.length);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - slidesToShow + array.length) % array.length);
        }
    };

    const visibleImages = array?.slice(currentIndex, currentIndex + slidesToShow);

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselWrapper}>
                <div className={styles.carousel}>
                    {visibleImages?.map((object:ITelevision|IMovie, index) => (
                        <div className={styles.carouselSlide} key={index}>
                            <img src={object.backdrop_path?
                                imgBaseURL+object.backdrop_path:imgBaseURL+object.poster_path} alt='poster' />
                            {index}
                        </div>
                    ))}
                </div>
            </div>
            <button className={styles.prev} onClick={() => moveSlide('prev')}>&#10094;</button>
            <button className={styles.next} onClick={() => moveSlide('next')}>&#10095;</button>
        </div>
    );
};

export default Carousel;