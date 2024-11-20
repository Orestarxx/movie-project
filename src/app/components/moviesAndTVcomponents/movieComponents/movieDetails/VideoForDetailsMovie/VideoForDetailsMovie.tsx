'use client'
import React, {FC} from 'react';
import './videoForDetailsMovie.style.module.css'
import {IVideoMovie} from "@/app/models/IVideoMovie";
import {youTubeURL} from "@/app/urls/urls";
type VideoProps = {
    videos:{results:IVideoMovie[],id:number}
}
const VideoForDetailsMovie:FC<VideoProps> = ({videos}) => {
    console.log(videos);

    return (
        <iframe width="700" height="400" src={`${youTubeURL}${videos.results[0]?.key||videos.results[1]?.key ||videos.results[2]?.key}?si=Lj_5tAQpemUbf-o2`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    );
};

export default VideoForDetailsMovie;