import React from 'react';
import './header.style.css'
import UserAccount from "@/app/components/userAcc/UserAccount";
import FormForSearch from "@/app/components/search/formForSearch/FormForSearch";
import HeaderTvAndMovieChanger from "@/app/components/header/headerListMoviesAndTVChanger/HeaderTVAndMovieChanger";
const Header = () => {
    return (
        <div id={'headerHolder'}>
            <header>
                <div id={"navHolder"}>
                   <HeaderTvAndMovieChanger/>
                </div>
                <div id={'searchFormHolder'}>
                    <FormForSearch/>
                </div>
                <div id={'userAccHolder'}>
                    <UserAccount/>
                </div>
            </header>
        </div>
    )
};

export default Header;