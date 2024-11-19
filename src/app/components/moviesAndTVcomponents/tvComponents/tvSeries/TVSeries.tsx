import React, {FC} from 'react';
import {tvService} from "@/app/services/tv.service";
import TVSerie from "@/app/components/moviesAndTVcomponents/tvComponents/tvSerie/TVSerie";
import {ITelevision} from "@/app/models/ITelevision";
import {Pagination} from "@/app/components/pagination/Pagination";
import TVGenres from "@/app/components/genresComponents/tvGenrescomponent/genres/TVGenres";
import styles from "@/app/components/moviesAndTVcomponents/movieComponents/movies/movies.style.module.css";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const TvSeries:FC<ParamsProps> = async ({searchParams}) => {
    const page =  await searchParams?? 1;
    console.log(page);
    const tvSeries = await tvService.tvSeries.getTV(page?.page?.toString())
    console.log(tvSeries);
    return (
        <div id={styles.moviesHolder}>
            <div id={ styles.moviesAndGenresHolder}>
                <div id={styles.genreHolder}>
                    <TVGenres/>
                </div>
                <div id={styles.movies}>{tvSeries.results?.map((tvSerie: ITelevision) => <TVSerie key={tvSerie.id} tvSerie={tvSerie}/>)}</div>
                <Pagination next={tvSeries.next} previous={tvSeries.previous}/>
            </div>
        </div>
    );
};

export default TvSeries;