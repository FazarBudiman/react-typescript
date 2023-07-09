import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Navbar from '../../components/Navbar';
import Footbar from '../../components/Footbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPersonChalkboard, faBookOpenReader, faCircleDollarToSlot, faChalkboardUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import {Link, Outlet } from 'react-router-dom'

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to='/manage-dashboard/student'>Student</Link>, '1', <FontAwesomeIcon icon={faUsers} />),
  getItem(<Link to='/manage-dashboard/teacher'>Teacher</Link>, '2', <FontAwesomeIcon icon={faPersonChalkboard} />),
  getItem(<Link to='/manage-dashboard/course'>Course</Link>, '3', <FontAwesomeIcon icon={faChalkboardUser} />),
  getItem(<Link to='/manage-dashboard/materi'>Materi</Link>, '4', <FontAwesomeIcon icon={faBookOpenReader} />),
  getItem(<Link to='/manage-dashboard/video-materi'>Video Materi</Link>, '5', <FontAwesomeIcon icon={faVideo} />),
  getItem(<Link to='/manage-dashboard/subscription-plans'>Subscription Plans</Link>, '6', <FontAwesomeIcon icon={faCircleDollarToSlot} />),
];


const DashboardAdmin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme='dark' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} 
      style={{backgroundColor: '#0f0d35', zIndex: 0}}>
        <Menu theme='dark'
        mode="inline" items={items} 
        style={{marginTop: 200, backgroundColor: '#0f0d35'}}  
        />
      </Sider>
      <Layout>
        <Navbar />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Student</Breadcrumb.Item>
            <Breadcrumb.Item>Course</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
        <Footbar/>
      </Layout>
    </Layout>
  );
};

export default DashboardAdmin;