'use client'
import React from 'react';
import './wishListTV.style.css'
import {ITelevisionByID} from "@/app/models/ITelevisionByID";
type wishListProps ={
    tv:ITelevisionByID
}
const WishListForTv = ({tv}:wishListProps) => {
    const addToWishlist = (tv:ITelevisionByID) =>{
        const localStorageArr = JSON.parse(localStorage.getItem('wishList')||'') || [];
        const array = localStorageArr as ITelevisionByID[]
        if(Array.isArray(localStorageArr)){
            array.push(tv)
        localStorage.setItem('wishList', JSON.stringify(localStorageArr))
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

export default WishListForTv;