'use client'
import React, {FC} from "react";
import {useSearchParams, usePathname, useRouter} from "next/navigation";

type PaginationControlsProps = {
    next:boolean,
    previous:boolean
}

export const Pagination:FC<PaginationControlsProps> = ({next,previous}) =>{
    const params = useSearchParams();
    const router = useRouter()
    const page = params.get('page')?? 1;
    const pathName = usePathname()
    console.log(pathName);


    const nextPage = () =>{
           let newPage= +page;
           newPage++
        router.push(`${pathName}/?page=${newPage}` )
    }
    const previousPage = () =>{
        let newPage= +page;
        newPage--
        router.push(`${pathName}/?page=${newPage}` )
    }
    return (
        <div>
            <button onClick={previousPage}>next</button>
            <button onClick={nextPage}>prev</button>
        </div>
    )

}