import React from 'react';

import styles from './home.style.module.css'
import {sortedMoviesAndTV} from "@/app/helpers/sortMoviesAndFilms";
import Carousel from "@/app/components/carousel/Carousel";
import {imgOriginal} from "@/app/urls/urls";

const Home = async () => {
   const sorted = await sortedMoviesAndTV();

    return (
        <div id={styles.home}>
            <div id={styles.topRatedHolder}>
                <img src={ imgOriginal+sorted.topRatedMovies[0].backdrop_path} alt=""/>
            </div>
            <div id={styles.carouselHolder}>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <Carousel array={sorted.popularMovies} pathAndName={{path:'/movies/',name:'Popular Movies'}}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <Carousel array={sorted.popularTV} pathAndName={{path:'/tvseries/',name:'Popular TV Shows'}}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <Carousel array={sorted.topRatedMovies} pathAndName={{path:'/movies/',name:'Top Rated Movies'}}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <Carousel array={sorted.topRatedTV} pathAndName={{path:'/tvseries/',name:'Top Rated TV Shows'}}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <Carousel array={sorted.nowPlaying} pathAndName={{path:'/movies/',name:'Now Playing Movies'}}/></div>
                <div className={styles.cardsHolder}>
                    <h2></h2>
                    <Carousel array={sorted.airingToday} pathAndName={{path:'/tvseries/',name:'Airing Today TV Shows'}}/></div>
            </div>
        </div>
    );
};

export default Home;