import React from 'react';
import FormForSearch from "@/app/components/search/formForSearch/FormForSearch";
import {tvService} from "@/app/services/tv.service";
import {ITelevision} from "@/app/models/ITelevision";
import {Pagination} from "@/app/components/pagination/Pagination";
import TVSerie from "@/app/components/moviesAndTVcomponents/tvComponents/tvSerie/TVSerie";
import styles from "@/app/components/search/searchMovies/searchMoviesStyle.module.css";

type SearchParams = Promise<{ [key: string]: string }>
type ParamsProps = {
    searchParams: SearchParams
}
const SearchTVShows = async ({searchParams}: ParamsProps) => {
    const query = await searchParams;
    const page = await searchParams ?? 1;
    console.log(query?.query);
    const searchTV = await tvService.searchSection(query?.query ? query?.query : 'friend', page?.page.toString())
    console.log(searchTV);
    return (
        <div>
            <div id={styles.inputHolder}>
                <FormForSearch/>
            </div>
            <div id={styles.searchMoviesHolder}>{searchTV.results?.map((tv: ITelevision) => <TVSerie key={tv.id}
                                                                                                     tvSerie={tv}/>)}</div>
            <Pagination next={searchTV.next} previous={searchTV.previous}/>
        </div>
    );
};

export default SearchTVShows;