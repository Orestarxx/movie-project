import React, {FC} from 'react';
import {movieService} from "@/app/services/movie.service";
import {IGenre, IGenreData} from "@/app/models/IGenre";
import Link from "next/link";
import './genresStyle.css'

type GenresProps = {
    id?: string | undefined
}

const Genres: FC<GenresProps> = async ({id}) => {
    const genres: IGenreData = await movieService.genres.getGenres()
    console.log(id);
    return (
        <div>
            {genres.genres?.map((genre: IGenre) => <div key={genre.id}>
                <Link className={id && genre.id === +id ? 'activeLinkGenre' : ''} href={{
                    pathname: '/genres/' + genre.id,
                    query: {page: 1}
                }}>{genre.name}</Link></div>)}
        </div>
    );
};

export default Genres;