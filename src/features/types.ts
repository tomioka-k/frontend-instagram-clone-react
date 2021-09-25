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

export interface PROPS_NICKNAME {
	nickName: string;
}

export interface JWT_TOKEN {
	access: string;
	refresh: string;
}
