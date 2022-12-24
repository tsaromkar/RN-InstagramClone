import React from 'react';

import {IPost} from './Post.interface';
import PostComponent from './PostComponent';

export default function Post(props: IPost) {
  const {route = {}} = props;
  const {params = {}} = route;
  const {post = {}} = params;

  return (
    <PostComponent
      displayPicture={post.displayPicture}
      userName={post.userName}
      location={post.location}
      post={post.post}
    />
  );
}
