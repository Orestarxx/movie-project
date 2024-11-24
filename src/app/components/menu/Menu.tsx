import React from 'react';
import Link from "next/link";
import styles from './menu.style.module.css'

const Menu = () => {
    return (
        <div id={styles.menuHolder}>
            <div>
                <ul>
                    <li>
                        <h2 className={styles.name}>allMovies</h2>
                        <ul className={styles.lists}>
                            <li><Link href={{
                                pathname: '/movies',
                                query: {page: 1}
                            }}>Movies</Link></li>
                            <li><Link href={{
                                pathname: '/nowPlaying',
                                query: {page: 1}
                            }}>Now Playing</Link></li>
                            <li><Link href={{
                                pathname: '/popularMovies',
                                query: {page: 1}
                            }}>Popular</Link></li>
                            <li><Link href={{
                                pathname: '/topRatedMovies',
                                query: {page: 1}
                            }}>Top Rated</Link></li>
                            <li><Link href={{
                                pathname: '/upComing',
                                query: {page: 1}
                            }}>Upcoming</Link></li>
                        </ul>
                    </li>
                    <li>
                        <h2 className={styles.name}>All TV Series</h2>
                        <ul className={styles.lists}>
                            <li><Link href={{
                                pathname: '/tvseries',
                                query: {page: 1}
                            }}>TV Series</Link></li>
                            <li><Link href={{
                                pathname: '/airingToday',
                                query: {page: 1}
                            }}>Airing Today</Link></li>
                            <li><Link href={{
                                pathname: '/onTheAir',
                                query: {page: 1}
                            }}>On The Air</Link></li>
                            <li><Link href={{
                                pathname: '/popularTV',
                                query: {page: 1}
                            }}>Popular</Link></li>
                            <li><Link href={{
                                pathname: '/topRatedTV',
                                query: {page: 1}
                            }}>Top Rated</Link></li>
                        </ul>
                    </li>
                </ul>
                <ul id={styles.settingsAndLogOut}>
                    <li>
                        <Link href={'/favorite'}>Favorite</Link>
                    </li>
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