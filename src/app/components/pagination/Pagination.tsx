'use client'
import React, {FC} from "react";
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import './pagination.style.css'

type PaginationControlsProps = {
    next:boolean|undefined,
    previous:boolean|undefined
    pageData?:number
}

export const Pagination:FC<PaginationControlsProps> = ({next,previous}) =>{
    const params = useSearchParams();
    console.log(params);
    const router = useRouter()
    const page = params.get('page')?? 1;
    const pathName = usePathname()
    console.log(pathName);


    const nextPage = () =>{
           let newPage= +page;
           newPage++
        if(pathName === '/search'){
            router.push(`${pathName}/?page=${newPage}&query=`)
        }else
            router.push(`${pathName}/?page=${newPage}`)
    }
    const previousPage = () =>{
        let newPage= +page;
        newPage--
        if(pathName === '/search'){
            router.push(`${pathName}/?page=${newPage}&query=`)
        }else
            router.push(`${pathName}/?page=${newPage}`)
    }
    return (
        <div>
            <button onClick={previousPage} disabled={previous} className={"button type1"}>prev</button>
            <button onClick={nextPage} disabled={next} className={"button type1"} >next</button>
        </div>
    )

}