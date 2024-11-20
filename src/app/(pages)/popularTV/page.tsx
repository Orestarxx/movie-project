import React from 'react';
import PopularTv from "@/app/components/moviesAndTVcomponents/tvComponents/popularTV/PopularTV";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const PopularTVPage = ({searchParams}:ParamsProps) => {
    return (
        <div>
            <PopularTv searchParams={searchParams}/>
        </div>
    );
};

export default PopularTVPage;