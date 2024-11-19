import React, {FC} from 'react';
import {tvService} from "@/app/services/tv.service";

type SearchParams = Promise<{[key:string]:string}>
type ParamsId = Promise<{id:string}>
type ParamsProps = {
    params:ParamsId,
    searchParams:SearchParams
}
const TvSeriesDetails:FC<ParamsProps> =  async ({params}) => {
    const {id} = await params;
    const tvShow = await tvService.singleTVSeries.getTVShowByID(id.toString())
    console.log(tvShow);
    return (
        <div>
            detailsOfTV
        </div>
    );
};

export default TvSeriesDetails;