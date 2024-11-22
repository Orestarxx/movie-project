'use client'
import React, {useState} from 'react';
import './wishListTV.style.css'
import {ITelevisionByID} from "@/app/models/ITelevisionByID";
import {IMovieByID} from "@/app/models/IMovieByID";
type wishListProps ={
    tv?:ITelevisionByID|undefined,
    movie?:IMovieByID|undefined
}
const FavoriteForTV = ({tv,movie}:wishListProps) => {
       const [state,setState] = useState<boolean>(false)
    const addToWishlist = () => {

            if(tv){
                const favoriteTVArr = JSON.parse( localStorage.getItem('favoriteTV')|| '[]');
                const array = favoriteTVArr as ITelevisionByID[]
                const newObjectTV = array.find(obj => obj.id === tv.id);
                if(newObjectTV === undefined){
                    setState(true)
                }else{
                    setState(false)
                }
                if(!newObjectTV){
                    array.push(tv)
                }
                localStorage.setItem('favoriteTV',JSON.stringify(array));
            }
            if (movie){
                const favoriteTVArr = JSON.parse( localStorage.getItem('movieList')|| '[]');
                const array = favoriteTVArr as IMovieByID[]
                const newObjectTV = array.find(obj => obj.id === movie.id);
                if(newObjectTV === undefined){
                    setState(true)
                }else{
                    setState(false)
                }
                if(!newObjectTV){
                    array.push(movie)
                }
                localStorage.setItem('movieList',JSON.stringify(array));
            }
    }
        return (
            <div className={'buttonHolder'}>
                <button onClick={addToWishlist}
                        disabled={state}>{state ?'added to favorite':'Add to Favorite'}</button>
            </div>
        );

};

export default FavoriteForTV;