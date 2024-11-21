import React from 'react';
import styles from './userCircle.module.css'
import {accountService} from "@/app/services/account.service";

const UserAccountCircleForHeader = async () => {
    const account = await accountService.getMyAcc()
    return (
        <div id={styles.accHolder}>
            <div id={styles.circleAcc}>
                <img src="https://avatars.githubusercontent.com/u/109023600?v=4" alt="avatar"/>
            </div>
            <div id={styles.userNameHolder}>{account.username}</div>
        </div>
    );
};

export default UserAccountCircleForHeader;