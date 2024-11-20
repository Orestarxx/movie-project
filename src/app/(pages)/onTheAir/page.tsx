import React from 'react';
import OnTheAir from "@/app/components/moviesAndTVcomponents/tvComponents/onTheAir/OnTheAir";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const OnTheAirPage = ({searchParams}:ParamsProps) => {
    return (
        <div>
            <OnTheAir searchParams={searchParams}/>
        </div>
    );
};

export default OnTheAirPage;