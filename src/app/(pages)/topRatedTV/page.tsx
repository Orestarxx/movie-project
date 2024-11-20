import React from 'react';
import TopRatedTV from "@/app/components/moviesAndTVcomponents/tvComponents/topRatedTV/TopRatedTV";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const TopRatedTVPage = ({searchParams}:ParamsProps) => {
    return (
        <div>
            <TopRatedTV searchParams={searchParams}/>
        </div>
    );
};

export default TopRatedTVPage;