import React from 'react';
import styles from './logoStyle.module.css'

const Logo = () => {
    return (
        <div id={styles.logoCircle}>
            <img src="https://bllighting.com/wp-content/uploads/2016/12/Paramount-Pictures-print-logo.png" alt="logo"/>
        </div>
    );
};

export default Logo;