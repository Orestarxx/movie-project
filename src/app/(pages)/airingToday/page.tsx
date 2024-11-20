import React from 'react';
import AiringToday from "@/app/components/moviesAndTVcomponents/tvComponents/airingToday/AiringToday";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const AiringTodayPage = ({searchParams}:ParamsProps) => {
    return (
        <div>
            <AiringToday searchParams={searchParams}/>
        </div>
    );
};

export default AiringTodayPage;