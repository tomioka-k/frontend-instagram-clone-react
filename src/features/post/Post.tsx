import React, { useState } from "react";
import styles from "./Post.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Divider, Checkbox } from "@material-ui/core";
import { Favorite, FavoriteBorder, Height } from "@material-ui/icons";

import { AvatarGroup } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";

import { selectProfiles } from "../auth/authSlice";
import {
	fetchAsyncPatchLiked,
	fetchAsyncPostComment,
	fetchPostEnd,
	fetchPostStart,
	selectComments,
} from "./postSlice";

import { PROPS_POST } from "../types";

const useStyles = makeStyles((theme) => ({
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
		marginRight: theme.spacing(1),
	},
}));

const Post: React.FC<PROPS_POST> = ({
	postId,
	loginId,
	userPost,
	title,
	imageUrl,
	liked,
}) => {
	const classes = useStyles();
	const dispatch: AppDispatch = useDispatch();
	const profiles = useSelector(selectProfiles);
	const comments = useSelector(selectComments);
	const [text, setText] = useState("");

	const commentsOnPost = comments.filter((com) => {
		return com.post === postId;
	});

	const prof = profiles.filter((prof) => {
		return prof.userProfile === userPost;
	});

	const postComment = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		const packet = { text: text, post: postId };
		await dispatch(fetchPostStart());
		await dispatch(fetchAsyncPostComment(packet));
		await dispatch(fetchPostEnd());
		setText("");
	};

	const handlerLiked = async () => {
		const packet = {
			id: postId,
			title: title,
			current: liked,
			new: loginId,
		};
		await dispatch(fetchPostStart());
		await dispatch(fetchAsyncPatchLiked(packet));
		await dispatch(fetchPostEnd());
	};

	return <div></div>;
};

export default Post;
