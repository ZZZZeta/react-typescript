import React, { FC } from 'react';
import { Layout } from 'antd';
import Navbar from '../Navbar';

// data
import { menuItems } from '../../../data/navbar';

const { Header, Content } = Layout;

const Template: FC = ({ children }) => {
  return (
    <>
      <Header>
        <Navbar menuItems={menuItems} />
      </Header>
      <Content style={{ minHeight: 'calc(100vh - 64px)' }}>{children}</Content>
    </>
  );
};

export default Template;
