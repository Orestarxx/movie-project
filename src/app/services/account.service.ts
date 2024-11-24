import {baseURL, endPoints} from "@/app/urls/urls";
import {headers} from "@/app/data/data";
import {IAccount} from "@/app/models/IAccount";

export const accountService = {
    getMyAcc: async (): Promise<IAccount> => {

        return (await fetch(baseURL + endPoints.account, {
            method: 'GET',
            headers: headers
        }).then(response => response.json()))

    }
}