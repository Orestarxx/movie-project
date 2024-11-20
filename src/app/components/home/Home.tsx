import React from 'react';
import ImagesScroller from "@/app/components/carousel/Carousel";
import styles from './home.style.module.css'
import {sortedMoviesAndTV} from "@/app/helpers/sortMoviesAndFilms";
import {IObjectWithFilmsAndTVs} from "@/app/models/IObjectWithFilmsAndTVs";

const Home = async () => {
   const sorted:IObjectWithFilmsAndTVs = await sortedMoviesAndTV();
    console.log(sorted);
    return (
        <div id={styles.home}>
            <div id={styles.topRatedHolder}>
               Top Rated,the first card in top rated Movies
            </div>
            <div id={styles.carouselHolder}>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <ImagesScroller array={sorted.popularMovies}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <ImagesScroller array={sorted.popularTV}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <ImagesScroller array={sorted.topRatedMovies}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <ImagesScroller array={sorted.topRatedTV}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <ImagesScroller array={sorted.nowPlaying}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <ImagesScroller array={sorted.airingToday}/></div>
            </div>
        </div>
    );
};

export default Home;