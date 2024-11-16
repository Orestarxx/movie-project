import React, {FC} from 'react';
import Movies from "@/app/components/movieComponents/movies/Movies";
import styles from './moviesPage.style.module.css'
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}

const MoviesPage:FC<ParamsProps> = ({searchParams}) => {

    return (
        <div id={styles.moviesPage}>
            <Movies searchParams={searchParams}/>
        </div>
    );
};

export default MoviesPage;