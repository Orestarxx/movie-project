import React from 'react';
import styles from './home.style.module.css'
import {imgOriginal} from "@/app/urls/urls";
import ButtonForMainPoster from "@/app/components/home/buttonForMainPoster/ButtonForMainPoster";
import CarouselForTVsAndMovies from "@/app/components/carousel/carouselForTVsAndMovies/CarouselForTVsAndMovies";
import {movieService} from "@/app/services/movie.service";
import {tvService} from "@/app/services/tv.service";

const Home = async () => {
    const promised = await Promise.all([
         movieService.movies.getPopularMovies('1'),
         movieService.movies.getNowPlaying('1'),
         movieService.movies.getTopRated('1'),
         tvService.tvSeries.getPopularTV('1'),
         tvService.tvSeries.getAiringToday('1'),
         tvService.tvSeries.getTopRatedTV('1')
    ])

    return (
        <div id={styles.home}>
            <div id={styles.topRatedHolder}>
                <div id={styles.infoBigPoster}>
                    <div id={styles.leftSide}>
                        <ButtonForMainPoster id={promised && promised[2].results[0].id}/>
                    </div>
                    <div id={styles.rightSide}>
                        <h2>{promised[2].results[0].title}</h2>
                    </div>
                </div>
                <img src={imgOriginal + promised[2].results[0].backdrop_path} alt=""/>
            </div>
            <div id={styles.carouselHolder}>
                <div className={styles.cardsHolder}>
                    <CarouselForTVsAndMovies array={promised[0].results}
                                             pathAndName={{path: '/movies/', name: 'Popular Movies'}}/>
                </div>
                <div className={styles.cardsHolder}>
                    <CarouselForTVsAndMovies array={promised[3].results}
                                             pathAndName={{path: '/tvseries/', name: 'Popular TV Shows'}}/>
                </div>
                <div className={styles.cardsHolder}>
                    <CarouselForTVsAndMovies array={promised[2].results}
                                             pathAndName={{path: '/movies/', name: 'Top Rated Movies'}}/>
                </div>
                <div className={styles.cardsHolder}>
                    <CarouselForTVsAndMovies array={promised[5].results}
                                             pathAndName={{path: '/tvseries/', name: 'Top Rated TV Shows'}}/>
                </div>
                <div className={styles.cardsHolder}>
                    <CarouselForTVsAndMovies array={promised[1].results}
                                             pathAndName={{path: '/movies/', name: 'Now Playing Movies'}}/>
                </div>
                <div className={styles.cardsHolder}>
                    <CarouselForTVsAndMovies array={promised[4].results}
                                             pathAndName={{path: '/tvseries/', name: 'Airing Today TV Shows'}}/>
                </div>
            </div>
        </div>
    );
};

export default Home;