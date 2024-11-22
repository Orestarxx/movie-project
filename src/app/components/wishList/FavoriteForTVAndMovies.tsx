'use client'
import React, {useState} from 'react';
import './wishListTV.style.css'

import {IMovieByID} from "@/app/models/IMovieByID";
type wishListProps ={
    movie:IMovieByID
}
const FavoriteForTVAndMovies = ({movie}: wishListProps) => {
     const [isObjectHere,setIsObjectHere] = useState<boolean>()
    const findId = () => {
        const favoriteMoviesArr = JSON.parse(localStorage.getItem('movieList') || '[]');
        const array = favoriteMoviesArr as IMovieByID[]
        return array.find((obj: IMovieByID) => obj.id === movie.id);
    }

    const addFavoriteList = () => {
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
    }
    return (
        <div className={'buttonHolder'}>
            <button onClick={addFavoriteList}
                    disabled={isObjectHere}>{findId()? 'added to Favorite' : 'add to Favorite'}</button>
        </div>
    );

};

export default FavoriteForTVAndMovies;