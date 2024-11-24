'use client'
import React, {useState} from 'react';
import './wishListTVAndMovies.style.css'

import {IMovieByID} from "@/app/models/IMovieByID";
import {ITelevisionByID} from "@/app/models/ITelevisionByID";
type wishListProps ={
    movie?:IMovieByID,
    tv?:ITelevisionByID
}
const FavoriteForTVAndMovies = ({movie,tv}: wishListProps) => {
     const [isObjectHere,setIsObjectHere] = useState<boolean>()
    const findId = () => {
        if (tv) {
            const favoriteMoviesArr = JSON.parse(localStorage.getItem('tvList') || '[]');
            const array = favoriteMoviesArr as ITelevisionByID[]
            return array.find((obj: ITelevisionByID) => obj.id === tv.id);
        } else if (movie) {
            const favoriteMoviesArr = JSON.parse(localStorage.getItem('movieList') || '[]');
            const array = favoriteMoviesArr as IMovieByID[]
            return array.find((obj: IMovieByID) => obj.id === movie.id);
        }
    }

    const addFavoriteList = () => {
        if(movie){
            const favoriteMoviesArr = JSON.parse(localStorage.getItem('movieList') || '[]');
            const array = favoriteMoviesArr as IMovieByID[]
            const newObjectMovie = findId()
            if (!newObjectMovie) {
                array.unshift(movie)
                setIsObjectHere(false)
            }else{
                setIsObjectHere(true)
            }
            localStorage.setItem('movieList', JSON.stringify(array));
        }else if(tv){
            const favoriteMoviesArr = JSON.parse(localStorage.getItem('tvList') || '[]');
            const array = favoriteMoviesArr as ITelevisionByID[]
            const newObjectMovie = findId()
            if (!newObjectMovie) {
                array.unshift(tv)
                setIsObjectHere(false)
            }else{
                setIsObjectHere(true)
            }
            localStorage.setItem('tvList', JSON.stringify(array));
        }
    }
    return (
        <div className={'buttonHolder'}>
            <button onClick={addFavoriteList}
                    disabled={isObjectHere}
                    className={'addToFavorite'}
            >{findId()? 'added ' : 'add'}</button>
            <div className={'bell'}>to Favorite</div>
        </div>
    );

};

export default FavoriteForTVAndMovies;