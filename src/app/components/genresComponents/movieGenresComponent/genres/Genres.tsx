import React from 'react';
import {movieService} from "@/app/services/movie.service";
import {IGenre} from "@/app/models/IGenre";
import Link from "next/link";

const Genres  = async () => {
    const genres = await movieService.genres.getGenres()
    console.log(genres);
    return (
        <div>
            {genres.genres?.map((genre:IGenre) => <div key={genre.id}><Link href={{
                pathname:'/genres/'+genre.id,
                query:{page:1}
            }}>{genre.name}</Link></div>)}
        </div>
    );
};

export default Genres ;