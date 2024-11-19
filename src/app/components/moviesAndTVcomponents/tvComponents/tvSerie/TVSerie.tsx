import React, {FC} from 'react';
import {ITelevision} from "@/app/models/ITelevision";
import Link from "next/link";
import styles from "@/app/components/moviesAndTVcomponents/movieComponents/movie/movie.style.module.css";
import {imgBaseURL} from "@/app/urls/urls";
type TVProps = {
    tvSerie:ITelevision
}
const TvSerie:FC<TVProps> = ({tvSerie}) => {
    return (
        <Link href={'/movies/'+tvSerie.id}>
            <div className={styles.card}>
                <div className={styles.first}>
                    <span><img src={imgBaseURL + tvSerie.poster_path} alt=""/></span>
                </div>
                <div className={styles.second}>
                    <span>
                        <img src={tvSerie.poster_path?imgBaseURL + tvSerie.poster_path:imgBaseURL+tvSerie.backdrop_path} alt=""/>
                        <div>
                            <div className={styles.title}>{tvSerie.original_name}</div>
                            <div className={styles.description}><p>{tvSerie.overview}</p></div>
                            <div className={styles.releaseAndRating}>
                                <div>{tvSerie.popularity}</div>
                                <div>{tvSerie.first_air_date}</div>
                            </div>
                        </div>
                    </span>
                </div>


            </div>
        </Link>
    );
};

export default TvSerie;