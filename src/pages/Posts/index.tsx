import React, { FC } from 'react';

// components
import Table from '../../components/Simple/Table';

// utils
import useFetch from '../../hooks/useFetch';

// types
import { Post } from '../../redux/posts/types';

const Posts: FC = () => {
  const posts: Post[] = useFetch('https://jsonplaceholder.typicode.com/posts');

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
      rowKey={(item: Post) => item?.id}
    />
  );
};

export default Posts;
