export interface File extends Blob {
	readonly lastMOdified: number;
	readonly name: string;
}

// authSlice.ts
export interface PROPS_AUTHEN {
	email: string;
	password: string;
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

// postSlice.ts
export interface PROPS_NEWPOST {
	title: string;
	img: File | null;
}

export interface PROPS_LIKES {
	id: number;
	title: string;
	current: number[];
	new: number;
}

export interface PROPS_COMMENT {
	text: string;
	post: number;
}

export interface PROPS_POST {
	postId: number;
	loginId: number;
	userPost: number;
	title: string;
	imageUrl: string;
	liked: number[];
}
