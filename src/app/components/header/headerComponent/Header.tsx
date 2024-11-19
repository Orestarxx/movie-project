import React from 'react';
import './header.style.css'
import UserAccount from "@/app/components/userAcc/UserAccount";
import Link from "next/link";
const Header = () => {
    return (

            <div id={'headerHolder'}>
                <header>
                    <div id={'searchFormHolder'}>
                        <Link href={{
                            pathname:'/search/movies',
                            query:{page:1}
                        }}>Search Movie?</Link>
                        <Link href={'/'}>Search TV Shows?</Link>
                    </div>
                    <div id={'userAccHolder'}>
                        <UserAccount/>
                    </div>
                </header>
            </div>
    )
};

export default Header;