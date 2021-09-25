export interface File extends Blob {
	readonly lastMOdified: number;
	readonly name: string;
}

// authSlice.ts
export interface PROPS_AUTHEN {
	email: string;
	passowrd: string;
}

export interface PROPS_PROFILE {
	id: number;
	nickName: string;
	img: File | null;
}

export interface NICK_NAME {
	nickName: string;
}
