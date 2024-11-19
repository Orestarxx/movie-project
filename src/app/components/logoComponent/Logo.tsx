import React from 'react';
import styles from './logoStyle.module.css'
import Link from "next/link";

const Logo = () => {
    return (
        <div id={styles.logoCircle}>
            <Link href={'/'}> <img
                src="https://bllighting.com/wp-content/uploads/2016/12/Paramount-Pictures-print-logo.png"
                alt="logo"/></Link>
        </div>
    );
};

export default Logo;