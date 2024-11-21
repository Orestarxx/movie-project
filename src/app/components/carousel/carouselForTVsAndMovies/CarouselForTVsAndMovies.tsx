'use client'
import React from 'react';
import { useState } from 'react';
import styles from './carouselForMoviesAndTVs.module.css';
import {IMovie} from "@/app/models/IMovie";
import {ITelevision} from "@/app/models/ITelevision";
import {imgBaseURL} from "@/app/urls/urls";
import Link from "next/link";
type CarouselProps = {
    array:IMovie[] | ITelevision[]
    pathAndName:{path:string,name:string}
}
const CarouselForFilms = ({array,pathAndName:{path,name}}:CarouselProps) => {
    const changedArray:(IMovie|ITelevision)[] =  array.map(
        (item:IMovie|ITelevision,index):IMovie|ITelevision =>({...item,position:index+1}))
    const slidesToShow = 4;
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveSlide = (direction:string) => {
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % changedArray.length);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - slidesToShow + changedArray.length) % changedArray.length);
        }
    };

    const visibleImages = changedArray?.slice(currentIndex, currentIndex + slidesToShow);

    return (
        <div className={styles.carouselHolder}>
            <div className={styles.nameHolder}>
                <h2>{name}</h2>
            </div>
            <div className={styles.carouselContainer}>
                <div className={styles.carouselWrapper}>
                    <div className={styles.carousel}>
                        {visibleImages?.map((object, index) => (
                            <Link href={path + object.id} key={index}>
                                <div className={styles.carouselSlide}>
                                    <div className={styles.infoCarouselDiv}>
                                        <div className={styles.numberHolder}>
                                            <h2>{object.position}</h2>
                                        </div>
                                        <div className={styles.infoDivCard}>

                                        </div>
                                    </div>
                                    <img src={object.backdrop_path ?
                                        imgBaseURL + object.backdrop_path : imgBaseURL + object.poster_path}
                                         alt='poster'/>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <button className={styles.prev} onClick={() => moveSlide('prev')}>&#10094;</button>
                <button className={styles.next} onClick={() => moveSlide('next')}>&#10095;</button>
            </div>
        </div>
    );
};

export default CarouselForFilms;