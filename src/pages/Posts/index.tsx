import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/posts/actions';
import { postsSelector } from '../../redux/posts/selectors';

// components
import Table from '../../components/Simple/Table';

// types
import { Post } from '../../redux/posts/types';

const Posts: FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Text',
      dataIndex: 'title',
      key: 'title',
    },
  ];

  return (
    <Table<Post>
      dataSource={posts}
      columns={columns}
      rowKey={(item: Post) => item.id}
    />
  );
};

export default Posts;
