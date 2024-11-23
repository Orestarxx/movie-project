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
    const favoriteTVArr = JSON.parse( localStorage.getItem('tvList')|| '[]');
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
        const newTV = tv?.map((show:ITelevisionByID) =>{
              if(tv?.length > 10){
                  tv?.pop()
              }
              return show
        })
return {movies:newMovies,tv:newTV}
    }
   const array = (conditions(getFromLocalStorage().movies, getFromLocalStorage().tv));
    console.log(array.tv);
    console.log(array.movies);

    return (
        <div id={'favoriteHolder'}>
         <div id={'favoriteMovies'}>
             <h2>Favorite Movies</h2>
            <div>
                {array.movies && array.movies.length?array.movies.map((movie:IMovieByID) =>
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
                    </Link>):<div className={'message'}>Add some TV Shows to this list,Here can be only ten Movies If you add eleven one the first one you added would be deleted</div>}
            </div>
         </div>
            <div id={'favoriteTVs'}>
                <h2>Favorite TV shows</h2>
                <div>
                    {array.tv && array.tv.length ? array.tv.map((show: ITelevisionByID) =>
                        <Link href={'/tvseries/' + show.id} key={show.id}>
                            <div className={styles.card}>
                                <div className={styles.first}>
                                    <span><img src={imgBaseURL + show.poster_path} alt=""/></span>
                                </div>
                                <div className={styles.second}>
                    <span>
                        <img src={show.poster_path ? imgBaseURL + show.poster_path : imgBaseURL + show.backdrop_path}
                             alt=""/>
                        <div>
                            <div className={styles.title}>{show.name}</div>
                            <div className={styles.description}><p>{show.overview}</p></div>
                            <div className={styles.releaseAndRating}>
                                <div>{show.popularity}</div>
                                <div>{show.first_air_date}</div>
                            </div>
                        </div>
                    </span>
                                </div>


                            </div>
                        </Link>) : <div className={'message'}>Add some TV Shows to this list,Here can be only ten TV show If you add eleven one the first one you added would be deleted</div>}
                </div>

            </div>
        </div>
    );
};

export default Favorite;