import React from 'react';
import TVSeries from "@/app/components/moviesAndTVcomponents/tvComponents/tvSeries/TVSeries";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const TVSeriesPage = ({searchParams}:ParamsProps) => {
    return (
        <div>
            <TVSeries searchParams={searchParams}/>
        </div>
    );
};

export default TVSeriesPage;