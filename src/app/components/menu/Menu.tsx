import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <Link href={'/movies'}></Link>
            <Link href={'/tvseries'}></Link>
        </div>
    );
};

export default Menu;