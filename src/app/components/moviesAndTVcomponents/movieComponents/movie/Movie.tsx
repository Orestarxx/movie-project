import React, {FC} from 'react';
import {IMovie} from "@/app/models/IMovie";
import styles from './movie.style.module.css'
import {imgBaseURL} from "@/app/urls/urls";
import Link from "next/link";
type MovieProps = {
    movie:IMovie
}
const Movie:FC<MovieProps> = ({movie}) => {
    return (
        <Link href={'/movies/'+movie.id}>
            <div className={styles.card}>
                <div className={styles.first}>
                    <span><img src={imgBaseURL + movie.poster_path} alt=""/></span>
                </div>
                <div className={styles.second}>
                    <span>
                        <img src={imgBaseURL + movie.poster_path} alt=""/>
                        <div>
                            <div className={styles.title}>{movie.title}</div>
                            <div className={styles.description}><p>{movie.overview}</p></div>
                            <div className={styles.releaseAndRating}>
                                <div>{movie.popularity}</div>
                                <div>{movie.release_date}</div>
                            </div>
                        </div>
                    </span>
                </div>


            </div>
        </Link>
    );
};

export default Movie;