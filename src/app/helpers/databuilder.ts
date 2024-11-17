import {IData} from "@/app/models/IData";
import {IMovie} from "@/app/models/IMovie";

export const dataBuilder = (data:IData & {results:IMovie[]}) =>{
    const newData:IData & {results:IMovie[]} = {
        ...data,
        next:false,
        previous:false
    }
    newData.next = newData.total_pages === newData.page;
    newData.previous = newData.page === 1;
    return newData
}