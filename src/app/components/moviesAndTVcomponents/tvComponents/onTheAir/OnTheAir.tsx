import React from 'react';
import {tvService} from "@/app/services/tv.service";
import styles from "@/app/components/moviesAndTVcomponents/movieComponents/movies/movies.style.module.css";
import TVGenres from "@/app/components/genresComponents/tvGenrescomponent/genres/TVGenres";
import {ITelevision} from "@/app/models/ITelevision";
import TVSerie from "@/app/components/moviesAndTVcomponents/tvComponents/tvSerie/TVSerie";
import {Pagination} from "@/app/components/pagination/Pagination";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const OnTheAir = async ({searchParams}:ParamsProps) => {
    const {page} = await searchParams;
    const onTheAir = await tvService.tvSeries.getOnAirToday(page)
    console.log(onTheAir);
    return (
        <div id={styles.moviesHolder}>
            <div id={styles.moviesAndGenresHolder}>
                <div id={styles.genreHolder}>
                    <TVGenres/>
                </div>
                <div id={styles.movies}>{onTheAir.results?.map((tvSerie: ITelevision) => <TVSerie key={tvSerie.id}
                                                                                                  tvSerie={tvSerie}/>)}</div>
                <Pagination next={onTheAir.next} previous={onTheAir.previous}/>
            </div>
        </div>
    );
};

export default OnTheAir;