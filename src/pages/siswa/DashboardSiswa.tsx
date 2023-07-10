import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Navbar from '../../components/Navbar';
import Footbar from '../../components/Footbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress, faChalkboardUser, faTimeline} from '@fortawesome/free-solid-svg-icons';
import {Outlet, useNavigate, useParams} from 'react-router-dom'
import HeroWelcome from '../../components/HeroWelcome';

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
  getItem('Course', '1', <FontAwesomeIcon icon={faChalkboardUser} />),
  getItem('Learning Path', '2', <FontAwesomeIcon icon={faTimeline} />),
  getItem('Progress Belajar', '3', <FontAwesomeIcon icon={faBarsProgress} />),
];

const DashboardSiswa: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [heroHemo, setHeroHome] = useState(true)
  const navigate = useNavigate()
  const params = useParams()
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  

  const handleSelect = (value: string) => {
    setHeroHome(false)
    switch (parseInt(value)) {
      case 1:
        navigate('/dashboard/course')
        break;

      case 2:
        navigate('/dashboard/learning-path')
        break;

      case 3:
        navigate('/dashboard/progress-belajar')
        break;
    
      default:
        break;
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme='dark' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} 
      style={{backgroundColor: '#0f0d35', zIndex: 0}}>
        <Menu theme='dark'
        mode="inline" items={items} 
        style={{marginTop: 200, backgroundColor: '#0f0d35'}}  
        onSelect={(value) => handleSelect(value.key)}
        />
      </Sider>
      <Layout>
        <Navbar />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>{params.course}</Breadcrumb.Item>
            <Breadcrumb.Item>{params.materi}</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            {heroHemo === true? <HeroWelcome title='Selamat Belajar Siswa' desc='Tunjukkan kepada dunia kalau kamu bisa' /> : <Outlet />}
          </div>
        </Content>
        <Footbar/>
      </Layout>
    </Layout>
  );
};

export default DashboardSiswa;