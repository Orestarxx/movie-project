import React from 'react';
import Link from "next/link";
import styles from './menu.style.module.css'

const Menu = () => {
    return (
        <div id={styles.menuHolder}>
            <ul>
                <li>
                    <h2>allMovies</h2>
                    <ul className={styles.lists}>
                        <li><Link href={{
                            pathname:'/movies',
                            query:{page:1}
                        }}>Movies</Link></li>
                        <li> <Link href={'/nowPlaying'}>Now Playing</Link></li>
                        <li><Link href={'/popular'}>Popular</Link></li>
                        <li><Link href={'/top_rated'}>Top Rated</Link></li>
                        <li><Link href={'/upcoming'}>Upcoming</Link></li>
                    </ul>
                    </li>
                <li>
                    <h2>All TV Series</h2>
                    <ul className={styles.lists}>
                        <li><Link href={{
                            pathname:'/tvseries',
                            query:{page:1}
                        }}>TV Series</Link></li>
                        <li><Link href={'/'}>Airing Today</Link></li>
                        <li><Link href={'/'}></Link>On The Air</li>
                        <li><Link href={'/'}></Link>Popular</li>
                        <li><Link href={'/'}></Link>Top Rated</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Menu;