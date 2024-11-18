export interface IDataImages {
    backdrops:[]
	id:number,
	logos:IImage[];
    posters:IImage[]
}
export interface IImage {
	aspect_ratio: number;
	height: number;
	iso_639_1: string;
	file_path: string;
	vote_average: number;
	vote_count: number;
	width: number;
}