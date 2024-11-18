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
        <div className="relative w-full mx-auto mt-4">

        </div>
    );
};

export default VideoSlider;