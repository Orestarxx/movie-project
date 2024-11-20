import React, {FC} from 'react';
import {tvService} from "@/app/services/tv.service";
import {IGenre, IGenreData} from "@/app/models/IGenre";
import Link from "next/link";
import '../../movieGenresComponent/genres/genresStyle.css'
type GenresProps = {
    id?:string| undefined
}
const TVGenres:FC<GenresProps> = async ({id}) => {
    const tvGenres:IGenreData = await tvService.genres.getTVGenres();
    console.log(id);
    return (
        <div>
            {tvGenres.genres.map((genre:IGenre) =>
                <div key={genre.id}>
                    <Link className={id && genre.id === +id? 'activeLinkGenre':''} href={{
                        pathname:'/tvGenres/'+genre.id,
                        query:{page:1}
                    }}>{genre.name}</Link>
                </div>)}
            </div>
    );
};

export default TVGenres;