export interface IAccount {
	avatar: IAvatar;
	id: number;
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	include_adult: boolean;
	username: string;
}
export interface IAvatarGravatar {
	hash: string;
}
export interface IAvatarTmdb {
	avatar_path?: null;
}
export interface IAvatar {
	gravatar: IAvatarGravatar;
	tmdb: IAvatarTmdb;
}