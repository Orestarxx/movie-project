import React from 'react';
import NowPlaying from "@/app/components/moviesAndTVcomponents/movieComponents/nowPlaying/NowPlaying";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}

const NowPlayingPage = ({searchParams}:ParamsProps) => {
    return (
        <div>
          <NowPlaying searchParams={searchParams}/>
        </div>
    );
};

export default NowPlayingPage;