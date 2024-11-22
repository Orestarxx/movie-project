'use client'
import React from 'react';
import './wishListTV.style.css'
import {ITelevisionByID} from "@/app/models/ITelevisionByID";
type wishListProps ={
    tv:ITelevisionByID
}
const FavoriteForTV = ({tv}:wishListProps) => {
    const addToWishlist = (tv:ITelevisionByID) =>{
       const favoriteTVArr:string|ITelevisionByID[] =JSON.parse( localStorage.getItem('favoriteTV')|| '') ||[] ;
      const array = favoriteTVArr as ITelevisionByID[]
        if(Array.isArray(array)){
            array.push(tv)
            localStorage.setItem('wishList', JSON.stringify(array))
        }
    }
    return (
        <div className={'buttonHolder'}>
            <button onClick={() =>{
                addToWishlist(tv)
            }}>Add To Favorite</button>
        </div>
    );
};

export default FavoriteForTV;