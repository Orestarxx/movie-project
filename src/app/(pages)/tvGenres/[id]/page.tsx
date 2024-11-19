import React, {FC} from 'react';
import TVByGenre from "@/app/components/genresComponents/tvGenrescomponent/tvByGenre/TVByGenre";

type SearchParams = Promise<{[key:string]:string}>
type ParamsId = Promise<{id:string}>
type ParamsProps = {
    searchParams: SearchParams,
    params:ParamsId
}
const TVGenrePage:FC<ParamsProps> = ({searchParams,params}) => {
    return (
        <div>
            <TVByGenre searchParams={searchParams} params={params}/>
        </div>
    );
};

export default TVGenrePage;