import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;
const { Item } = Menu;

const Template: FC = ({ children }) => {
  return (
    <>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Item key="home">
            <Link to="/">Home</Link>
          </Item>
          <Item key="posts">
            <Link to="/posts">Posts</Link>
          </Item>
        </Menu>
      </Header>
      <Content>{children}</Content>
    </>
  );
};

export default Template;
