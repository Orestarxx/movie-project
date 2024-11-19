import React from 'react';
import TVSeriesDetails from "@/app/components/moviesAndTVcomponents/tvComponents/tvSeriesDetails/TVSeriesDetails";

type SearchParams = Promise<{[key:string]:string}>
type ParamsId = Promise<{id:string}>
type ParamsProps = {
    searchParams: SearchParams,
    params:ParamsId
}
const Page = ({searchParams,params}:ParamsProps) => {
    return (
        <div>
            <TVSeriesDetails searchParams={searchParams} params={params}/>
        </div>
    );
};

export default Page;