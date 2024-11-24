import React from 'react';
import './header.style.css'
import UserAccountCircleForHeader
    from "@/app/components/userAccount/userAccountCircleForHeader/UserAccountCircleForHeader";
import Link from "next/link";

const Header = () => {
    return (

        <div id={'headerHolder'}>
            <header>
                <div id={'searchFormHolder'}>
                    <div className={'searchDiv'}>
                        <Link href={{
                            pathname: '/searchMovie',
                            query: {page: 1}
                        }}>Search Movie?</Link>
                    </div>
                    <div className={'searchDiv'}>
                        <Link href={{
                            pathname: '/searchTVshows',
                            query: {page: 1}
                        }}>Search TV Shows?</Link>
                    </div>
                </div>
                <div id={'userAccHolder'}>
                    <UserAccountCircleForHeader/>
                </div>
            </header>
        </div>
    )
};

export default Header;