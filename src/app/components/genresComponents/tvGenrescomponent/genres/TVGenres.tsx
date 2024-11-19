import React from 'react';
import {tvService} from "@/app/services/tv.service";
import {IGenre, IGenreData} from "@/app/models/IGenre";
import Link from "next/link";

const TVGenres = async () => {
    const tvGenres:IGenreData = await tvService.genres.getTVGenres();
    console.log(tvGenres);
    return (
        <div>
            {tvGenres.genres.map((genre:IGenre) =>
                <div key={genre.id}>
                    <Link href={{
                        pathname:'/tvGenres/'+genre.id,
                        query:{page:1}
                    }}>{genre.name}</Link>
                </div>)}
            </div>
    );
};

export default TVGenres;