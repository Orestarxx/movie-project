import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <Link href={{
                pathname:'/movies',
                query:{page:1}
            }}>Movies</Link>
            <Link href={'/tvseries'}>TV Series</Link>
        </div>
    );
};

export default Menu;