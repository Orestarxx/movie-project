'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from './tvandMovieList.module.css'

const HeaderTvAndMovieChanger = () => {
    const path = usePathname()
    console.log(path);
    return (
        <div id={styles.tvAndMovieList}>
            <Link href={'/nowPlaying'}>Now Playing</Link>
            <Link href={'/popular'}>Popular</Link>
            <Link href={'/top_rated'}>Top Rated</Link>
            <Link href={'/upcoming'}>Upcoming</Link>
        </div>
    );
};

export default HeaderTvAndMovieChanger;