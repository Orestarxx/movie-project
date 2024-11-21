import React from 'react';

import styles from './home.style.module.css'
import {sortedMoviesAndTV} from "@/app/helpers/sortMoviesAndFilms";
import {imgOriginal} from "@/app/urls/urls";
import ButtonForMainPoster from "@/app/components/home/buttonForMainPoster/ButtonForMainPoster";
import CarouselForTVsAndMovies from "@/app/components/carousel/carouselForTVsAndMovies/CarouselForTVsAndMovies";

const Home = async () => {
   const sorted = await sortedMoviesAndTV();

    return (
        <div id={styles.home}>
            <div id={styles.topRatedHolder}>
                <div id={styles.infoBigPoster}>
                    <div id={styles.leftSide}>
                        <ButtonForMainPoster id={sorted.topRatedMovies[0].id}/>
                    </div>
                    <div id={styles.rightSide}>
                        <h2>{sorted.topRatedMovies[0].title}</h2>
                    </div>
                </div>
                <img src={ imgOriginal+sorted.topRatedMovies[0].backdrop_path} alt=""/>
            </div>
            <div id={styles.carouselHolder}>
                <div className={styles.cardsHolder}>
                    <CarouselForTVsAndMovies array={sorted.popularMovies} pathAndName={{path:'/movies/',name:'Popular Movies'}}/>
                </div>
                <div className={styles.cardsHolder}>
                    <CarouselForTVsAndMovies array={sorted.popularTV} pathAndName={{path:'/tvseries/',name:'Popular TV Shows'}}/>
                </div>
                <div className={styles.cardsHolder}>
                    <CarouselForTVsAndMovies array={sorted.topRatedMovies} pathAndName={{path:'/movies/',name:'Top Rated Movies'}}/>
                </div>
                <div className={styles.cardsHolder}>
                    <CarouselForTVsAndMovies array={sorted.topRatedTV} pathAndName={{path:'/tvseries/',name:'Top Rated TV Shows'}}/>
                </div>
                <div className={styles.cardsHolder}>
                    <CarouselForTVsAndMovies array={sorted.nowPlaying} pathAndName={{path:'/movies/',name:'Now Playing Movies'}}/>
                </div>
                <div className={styles.cardsHolder}>
                    <CarouselForTVsAndMovies array={sorted.airingToday} pathAndName={{path:'/tvseries/',name:'Airing Today TV Shows'}}/>
                </div>
            </div>
        </div>
    );
};

export default Home;