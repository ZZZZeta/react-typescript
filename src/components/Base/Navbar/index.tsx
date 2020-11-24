import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const { Item } = Menu;

type MenuItem = {
  title: string;
  link: string;
};

interface INavbar {
  menuItems: MenuItem[];
}

const Navbar = ({ menuItems }: INavbar) => {
  return (
    <Menu theme="dark" mode="horizontal">
      {menuItems.map((item) => (
        <Item key={item.title}>
          <Link to={item.link}>{item.title}</Link>
        </Item>
      ))}
    </Menu>
  );
};

export default Navbar;
