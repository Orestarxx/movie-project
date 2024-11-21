import React from 'react';

import styles from './home.style.module.css'
import {sortedMoviesAndTV} from "@/app/helpers/sortMoviesAndFilms";
import Carousel from "@/app/components/carousel/Carousel";

const Home = async () => {
   const sorted = await sortedMoviesAndTV();

    return (
        <div id={styles.home}>
            <div id={styles.topRatedHolder}>
               Top Rated,the first card in top rated Movies
            </div>
            <div id={styles.carouselHolder}>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <Carousel array={sorted.popularMovies}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <Carousel array={sorted.popularTV}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <Carousel array={sorted.topRatedMovies}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <Carousel array={sorted.topRatedTV}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <Carousel array={sorted.nowPlaying}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <Carousel array={sorted.airingToday}/></div>
            </div>
        </div>
    );
};

export default Home;