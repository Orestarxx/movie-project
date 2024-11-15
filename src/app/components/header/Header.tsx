import React from 'react';
import './header.style.css'
import UserAccount from "@/app/components/userAcc/UserAccount";
import Link from "next/link";

const Header = () => {
    return (
        <div id={'headerHolder'}>
            <header>
                <div id={"navHolder"}>
                    <Link href={'/nowPlaying'}>Now Playing</Link>
                    <Link href={'/popular'}>Popular</Link>
                    <Link href={'/top_rated'}>Top Rated</Link>
                    <Link href={'/upcoming'}>Upcoming</Link>
                </div>
                <div id={'searchFormHolder'}>
                    <form action="">
                        <input type="text"/>
                        <button>search</button>
                    </form>
                </div>
                <div id={'userAccHolder'}>
                    <UserAccount/>
                </div>
            </header>
        </div>
    )
};

export default Header;