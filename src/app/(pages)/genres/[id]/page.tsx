import React from 'react';
import MoviesByGenre from "@/app/components/genresComponents/movieGenresComponent/moviesByGenre/MoviesByGenre";
import styles from './genresPage.styles.module.css'
type SearchParams = Promise<{[key:string]:string}>
type Params = Promise<{id:string}>
type ParamsProps = {
    searchParams: SearchParams,
    params:Params
}
const GenresPage =  ({searchParams,params}:ParamsProps) => {
    return (
        <div id={styles.genresPageMovie}>
            <MoviesByGenre searchParams={searchParams} params={params}/>
        </div>
    );
};

export default GenresPage;