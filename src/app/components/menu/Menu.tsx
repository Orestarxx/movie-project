import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <Link href={{
                pathname:'/movies',
                query:{page:1}
            }}>Movies</Link>
            <Link href={{
                pathname:'/tvseries',
                query:{page:1}
            }}>TV Series</Link>
        </div>
    );
};

export default Menu;