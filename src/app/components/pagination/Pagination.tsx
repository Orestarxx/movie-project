'use client'
import React from "react";
import {useSearchParams ,usePathname} from "next/navigation";

export default function Pagination () {
   const params = useSearchParams();
    console.log(params);
    const pathname = usePathname();
    const searchParams = useSearchParams();
       let currentPage = Number(searchParams.get('page')) || 1;
    console.log(searchParams.get('page'));

    const nextPage = () =>{
        // const params = new URLSearchParams(searchParams);
        // // const page = ++ currentPage ;
        // console.log(page);
        // console.log(params);
        // params.set('page', page.toString());

        // return `${pathname}?${page.toString()}`;

   }
   const previousPage = () =>{
       const params = new URLSearchParams(searchParams);
       currentPage --
       params.set('page', currentPage.toString());
       console.log(params.get('page'));
       return `${pathname}?${params.toString()}`
   }
    return (
    <div>
        <button onClick={nextPage}>prev</button>
        <button onClick={previousPage}>next</button>
    </div>
)

}