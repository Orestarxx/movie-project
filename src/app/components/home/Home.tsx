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
                <div><ImagesScroller/></div>
                <div><ImagesScroller/></div>
                <div><ImagesScroller/></div>
                <div><ImagesScroller/></div>
                <div><ImagesScroller/></div>
                <div><ImagesScroller/></div>
            </div>
        </div>
    );
};

export default Home;