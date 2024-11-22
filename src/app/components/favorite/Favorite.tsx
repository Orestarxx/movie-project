'use client'
import React from 'react';
import './favorite.style.css'
import {IMovieByID} from "@/app/models/IMovieByID";
import Link from "next/link";
import styles from "@/app/components/moviesAndTVcomponents/movieComponents/movie/movie.style.module.css";
import {imgBaseURL} from "@/app/urls/urls";
import {ITelevisionByID} from "@/app/models/ITelevisionByID";

const Favorite = () => {
    const getFromLocalStorage = () =>{
    const favoriteMovieArr = JSON.parse( localStorage.getItem('movieList')|| '[]');
    const arrayOfMovies = favoriteMovieArr as IMovieByID[]|[];
    const favoriteTVArr = JSON.parse( localStorage.getItem('favoriteTV')|| '[]');
    const arrayOfTVs = favoriteTVArr as ITelevisionByID[]
        return {movies:arrayOfMovies,tv:arrayOfTVs}
    }
    const conditions = (movies?:IMovieByID[],tv?:ITelevisionByID[]) =>{
   const newMovies = movies?.map((movie:IMovieByID) =>{
       if(movies?.length > 10){
           movies?.pop()
       }
       return movie
   })
return newMovies
    }
   const arraysof = (conditions(getFromLocalStorage().movies, getFromLocalStorage().tv));


    return (
        <div id={'favoriteHolder'}>
         <div id={'favoriteMovies'}>
             <h2>Favorite Movies</h2>
            <div>
                {arraysof && arraysof.length?arraysof.map((movie:IMovieByID) =>
                    <Link href={'/movies/'+movie.id} key={movie.id}>
                        <div className={styles.card}>
                            <div className={styles.first}>
                                <span><img src={imgBaseURL + movie.poster_path} alt=""/></span>
                            </div>
                            <div className={styles.second}>
                    <span>
                        <img src={movie.poster_path?imgBaseURL + movie.poster_path:imgBaseURL+movie.backdrop_path} alt=""/>
                        <div>
                            <div className={styles.title}>{movie.title}</div>
                            <div className={styles.description}><p>{movie.overview}</p></div>
                            <div className={styles.releaseAndRating}>
                                <div>{movie.popularity}</div>
                                <div>{movie.release_date}</div>
                            </div>
                        </div>
                    </span>
                            </div>


                        </div>
                    </Link>):<div id={'message'}>Add some Movies to this list</div>}
            </div>
         </div>
            <div id={'favoriteTVs'}></div>
        </div>
    );
};

export default Favorite;