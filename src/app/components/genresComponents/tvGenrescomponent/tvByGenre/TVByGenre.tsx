import React, {FC} from 'react';
import TVGenres from "@/app/components/genresComponents/tvGenrescomponent/genres/TVGenres";
import {tvService} from "@/app/services/tv.service";
import {ITelevision} from "@/app/models/ITelevision";
import TVSerie from "@/app/components/moviesAndTVcomponents/tvComponents/tvSerie/TVSerie";
import {Pagination} from "@/app/components/pagination/Pagination";
import {query} from "@/app/urls/urls";
import styles from "@/app/components/moviesAndTVcomponents/movieComponents/movies/movies.style.module.css";

type SearchParams = Promise<{ [key: string]: string }>
type ParamsId = Promise<{ id: string }>
type ParamsProps = {
    searchParams: SearchParams,
    params: ParamsId
}
const TvByGenre: FC<ParamsProps> = async ({params, searchParams}) => {
    const page = await searchParams ?? 1;
    const {id} = await params;
    const tvWithGenre = await tvService.tvSeries.getTV(page?.page?.toString(), query.with_genres + id);
    console.log(tvWithGenre);
    return (
        <div>
            <div id={styles.moviesAndGenresHolder}>
                <div id={styles.genreHolder}><TVGenres id={id}/></div>
                <div id={styles.movies}>{tvWithGenre.results?.map((tvGenre: ITelevision) => <TVSerie key={tvGenre.id}
                                                                                                     tvSerie={tvGenre}/>)}</div>
            </div>
            <div id={styles.paginationHolder}><Pagination next={tvWithGenre.next} previous={tvWithGenre.previous}/>
            </div>
        </div>
    );
};

export default TvByGenre;