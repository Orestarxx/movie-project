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
                            pathname:'/searchMovie',
                            query:{page:1}
                        }}>Search Movie?</Link>
                        <Link href={{
                            pathname:'/searchTVshows',
                            query:{page:1}
                        }}>Search TV Shows?</Link>
                    </div>
                    <div id={'userAccHolder'}>
                        <UserAccount/>
                    </div>
                </header>
            </div>
    )
};

export default Header;