'use client'
import React, {FC} from 'react';
import './videoSlider.style.module.css'
import {IVideoMovie} from "@/app/models/IVideoMovie";
type VideoProps = {
    videos:{results:IVideoMovie[],id:number}
}
const VideoSlider:FC<VideoProps> = ({videos}) => {
    console.log(videos);

    return (
        <iframe width="700" height="400" src={`https://www.youtube.com/embed/${videos.results[0]?.key||videos.results[1]?.key ||videos.results[2]?.key}?si=Lj_5tAQpemUbf-o2`}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    );
};

export default VideoSlider;