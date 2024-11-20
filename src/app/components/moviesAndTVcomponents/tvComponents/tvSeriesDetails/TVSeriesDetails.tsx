import React, {FC} from 'react';
import {tvService} from "@/app/services/tv.service";
import styles from "@/app/components/moviesAndTVcomponents/movieComponents/movieDetails/movieDetails.style.module.css";




type SearchParams = Promise<{[key:string]:string}>
type ParamsId = Promise<{id:string}>
type ParamsProps = {
    params:ParamsId,
    searchParams:SearchParams
}
const TvSeriesDetails:FC<ParamsProps> =  async ({params}) => {
    const {id} = await params;
    const tvShow = await tvService.singleTVSeries.getTVShowByID(id.toString())
    console.log(tvShow);
    return (
        <div id={styles.detailsMovie}>

        </div>
    );
};

export default TvSeriesDetails;