import React from 'react';
import UpComing from "@/app/components/moviesAndTVcomponents/movieComponents/upComing/UpComing";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const UpComingPage = ({searchParams}:ParamsProps) => {
    return (
        <div>
        <UpComing searchParams={searchParams}/>
        </div>
    );
};

export default UpComingPage;