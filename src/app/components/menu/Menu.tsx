import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <Link href={{
                pathname:'/movies'
            }}>Movies</Link>
            <Link href={'/tvseries'}>TV Series</Link>
        </div>
    );
};

export default Menu;