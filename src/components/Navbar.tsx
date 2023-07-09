import * as React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu} from 'antd';
import {LaptopOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom'
import Profile from './Profile';

const { Header} = Layout;

export interface IAppProps {
}

const items: MenuProps['items'] = [
  {
    label: <Link to='/'>Home</Link>,
    key: 1,
  },
  {
    label: <Link to='/manage-dashboard'>Dashboard</Link>,
    key: 2,
  },
  
  {
    label: <Profile />,
    key: 3,
  },
]

const Navbar = () => {
  return (
    <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#0f0d35',
        }}
      >
        <LaptopOutlined style={{color: 'white', fontSize: 27, marginLeft: '15%'}} />
        <Menu
        style={{marginLeft: '45%', backgroundColor: '#0f0d35', width: 1000}}
        theme="dark"
        mode="horizontal"
        items={items}
        />
      </Header>
  )
}

export default Navbar;
