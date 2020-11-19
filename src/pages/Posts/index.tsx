import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/posts/actions';
import { postsSelector } from '../../redux/posts/selectors';

const Posts: FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <div>Posts</div>;
};

export default Posts;
