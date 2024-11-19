import React from 'react';
import Link from "next/link";
import styles from './menu.style.module.css'

const Menu = () => {
    return (
        <div id={styles.menuHolder}>
            <div>
                <ul>
                    <li>
                        <h2>allMovies</h2>
                        <ul className={styles.lists}>
                            <li><Link href={{
                                pathname: '/movies',
                                query: {page: 1}
                            }}>Movies</Link></li>
                            <li><Link href={{
                                pathname:'/nowPlaying',
                                query:{page:1}
                            }}>Now Playing</Link></li>
                            <li><Link href={{
                                pathname:'/popularMovies',
                                query:{page:1}
                            }}>Popular</Link></li>
                            <li><Link href={'/top_rated'}>Top Rated</Link></li>
                            <li><Link href={'/upcoming'}>Upcoming</Link></li>
                        </ul>
                    </li>
                    <li>
                        <h2>All TV Series</h2>
                        <ul className={styles.lists}>
                            <li><Link href={{
                                pathname: '/tvseries',
                                query: {page: 1}
                            }}>TV Series</Link></li>
                            <li><Link href={'/'}>Airing Today</Link></li>
                            <li><Link href={'/'}>On The Air</Link></li>
                            <li><Link href={'/'}>Popular</Link></li>
                            <li><Link href={'/'}>Top Rated</Link></li>
                        </ul>
                    </li>
                </ul>
                <ul id={styles.settingsAndLogOut}>
                    <li>
                        <Link href={'/settings'}>Settings</Link>
                    </li>
                    <li><Link href={'/'}> Log Out </Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;