import React, {FC} from 'react';
import {tvService} from "@/app/services/tv.service";
import TVSerie from "@/app/components/moviesAndTVcomponents/tvComponents/tvSerie/TVSerie";
import {ITelevision} from "@/app/models/ITelevision";
import {Pagination} from "@/app/components/pagination/Pagination";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const TvSeries:FC<ParamsProps> = async ({searchParams}) => {
    const page =  await searchParams?? 1;
    console.log(page);
    const tvSeries = await tvService.tvSeries.getTV(page?.page?.toString())
    console.log(tvSeries);
    return (
        <div>
            {tvSeries.results?.map((tvSerie:ITelevision) =><TVSerie key={tvSerie.id} tvSerie={tvSerie}/>)}
            <Pagination next={tvSeries.next} previous={tvSeries.previous}/>
            </div>
    );
};

export default TvSeries;