import React, {FC} from 'react';
import TVSeries from "@/app/components/moviesAndTVcomponents/tvComponents/tvSeries/TVSeries";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const TVSeriesPage:FC<ParamsProps> = ({searchParams}) => {
    return (
        <div>
            <TVSeries searchParams={searchParams}/>
        </div>
    );
};

export default TVSeriesPage;