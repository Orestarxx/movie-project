import {IData} from "@/app/models/IData";



export const dataBuilder = <T,> (data:IData & {results:T}) =>{
    const newData:IData & {results:T} = {
        ...data,
        next:false,
        previous:true
    }
    newData.next = newData.total_pages === newData.page;
    newData.previous = newData.page === 1;
    return newData
}