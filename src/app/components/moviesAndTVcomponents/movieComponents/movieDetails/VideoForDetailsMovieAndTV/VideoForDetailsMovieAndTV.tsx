import React, {FC} from 'react';
import './videoForDetailsMovieAndTV.style.module.css'
import { IVideoMovie} from "@/app/models/IVideoMovie";
import {youTubeURL} from "@/app/urls/urls";
type VideoProps = {
    videos:{results:IVideoMovie[],id:number}
}
const VideoForDetailsMovieAndTV:FC<VideoProps> =  ({videos}) => {
    console.log(videos);

    return (
        <iframe width="900" height="400" src={`${youTubeURL}${videos.results?.length? videos?.results[0]?.key:''}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    );
};

export default VideoForDetailsMovieAndTV;