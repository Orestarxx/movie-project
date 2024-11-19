import React from 'react';
import MovieDetails from "@/app/components/moviesAndTVcomponents/movieComponents/movieDetails/MovieDetails";
import styles from './detailsMovie.style.module.css'

type  Params  = Promise<{id:string}>

const DetailsMoviePage = ({params}:{params:Params}) => {

    return (
        <div id={styles.detailsPage}>
            <MovieDetails params={params}/>
        </div>
    );
};

export default DetailsMoviePage;