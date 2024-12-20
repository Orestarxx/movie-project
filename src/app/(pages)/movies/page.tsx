import React from 'react';
import Movies from "@/app/components/moviesAndTVcomponents/movieComponents/movies/Movies";
import styles from './moviesPage.style.module.css'
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}

const MoviesPage = ({searchParams}:ParamsProps) => {

    return (
        <div id={styles.moviesPage}>
            <Movies searchParams={searchParams}/>
        </div>
    );
};

export default MoviesPage;