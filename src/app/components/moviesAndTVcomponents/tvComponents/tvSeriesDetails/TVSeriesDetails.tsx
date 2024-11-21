import React, {FC} from 'react';
import {tvService} from "@/app/services/tv.service";

import {ITelevisionByID} from "@/app/models/ITelevisionByID";
import styles from './tvSerieByID.module.css'
import StarRatings from "@/app/components/starRatings/StarRatings";
type SearchParams = Promise<{[key:string]:string}>
type ParamsId = Promise<{id:string}>
type ParamsProps = {
    params:ParamsId,
    searchParams:SearchParams
}
const TvSeriesDetails:FC<ParamsProps> =  async ({params}) => {
    const {id} = await params;
    const tvShow:ITelevisionByID = await tvService.singleTVSeries.getTVShowByID(id.toString())
    console.log(tvShow);
    return (
        <div id={styles.detailsTV}>
            <div id={styles.infoHolder}>
                <div>
                    <h1>{tvShow.name}</h1>
                    <div id={styles.posterAndDescriptionHolder}>
                        <div id={styles.posterHolder}>
                            {/*<img src={imgBaseURL + images?.posters[3]?.file_path} alt=""/>*/}
                            <div id={styles.starsHolder}>
                                <StarRatings rating={tvShow.vote_average}/>
                                <div id={styles.ratingCircle}>{tvShow.vote_average}</div>
                                <div id={styles.release}>{tvShow.first_air_date}</div>
                            </div>
                        </div>
                        <div id={styles.overviewHolder}>
                            {/*overview*/}
                            <div id={styles.overview}>
                                <p>{tvShow.overview}</p>
                            </div>
                            <img src={imgOriginal + tvShow.poster_path} alt="poster"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TvSeriesDetails;