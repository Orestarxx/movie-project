'use client'
import React from 'react';
import { useState } from 'react';
import styles from './imagesScrollerStyles.module.css';

const Carousel = () => {
    // Масив з 20 карток (обкладинок фільмів)
    const images = [
        "https://via.placeholder.com/200x300/FF5733/FFFFFF?text=Film+1",
        "https://via.placeholder.com/200x300/33FF57/FFFFFF?text=Film+2",
        "https://via.placeholder.com/200x300/3357FF/FFFFFF?text=Film+3",
        "https://via.placeholder.com/200x300/FF33A8/FFFFFF?text=Film+4",
        "https://via.placeholder.com/200x300/33A8FF/FFFFFF?text=Film+5",
        "https://via.placeholder.com/200x300/FF5733/FFFFFF?text=Film+6",
        "https://via.placeholder.com/200x300/33FF57/FFFFFF?text=Film+7",
        "https://via.placeholder.com/200x300/3357FF/FFFFFF?text=Film+8",
        "https://via.placeholder.com/200x300/FF33A8/FFFFFF?text=Film+9",
        "https://via.placeholder.com/200x300/33A8FF/FFFFFF?text=Film+10",
        "https://via.placeholder.com/200x300/FF5733/FFFFFF?text=Film+11",
        "https://via.placeholder.com/200x300/33FF57/FFFFFF?text=Film+12",
        "https://via.placeholder.com/200x300/3357FF/FFFFFF?text=Film+13",
        "https://via.placeholder.com/200x300/FF33A8/FFFFFF?text=Film+14",
        "https://via.placeholder.com/200x300/33A8FF/FFFFFF?text=Film+15",
        "https://via.placeholder.com/200x300/FF5733/FFFFFF?text=Film+16",
        "https://via.placeholder.com/200x300/33FF57/FFFFFF?text=Film+17",
        "https://via.placeholder.com/200x300/3357FF/FFFFFF?text=Film+18",
        "https://via.placeholder.com/200x300/FF33A8/FFFFFF?text=Film+19",
        "https://via.placeholder.com/200x300/33A8FF/FFFFFF?text=Film+20"
    ];

    const slidesToShow = 4;  // кількість слайдів, які одночасно відображаються
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveSlide = (direction:string) => {
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % images.length);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - slidesToShow + images.length) % images.length);
        }
    };

    const visibleImages = images.slice(currentIndex, currentIndex + slidesToShow); // вибираємо тільки видимі картки

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselWrapper}>
                <div className={styles.carousel}>
                    {visibleImages.map((src, index) => (
                        <div className={styles.carouselSlide} key={index}>
                            <img src={src} alt='' />
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