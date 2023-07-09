import { LockOutlined } from '@ant-design/icons';
import {List, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const data = [
  {
    title: 'Matematika',
  },
  {
    title: 'Biologi',
  },
  {
    title: 'Kimia',
  },
  {
    title: 'Matematika',
  },
  {
    title: 'Biologi',
  },
  {
    title: 'Kimia',
  },
  {
    title: 'Matematika',
  },
];

const Course: React.FC = () => (
    <Space size='large' align='start'>
        <List
            header='Ilmu Umum'
            bordered
            itemLayout="horizontal"
            dataSource={data}
            style={{width: 400, fontSize: 26, fontWeight: 'bolder', color: '#fdc128'}}
            pagination={{align: 'center', position: 'bottom', pageSize: 6}}
            renderItem={(item, index) => (
            <List.Item>
                <List.Item.Meta
                avatar={<LockOutlined/>}
                title={<Link to='/dashboard/course/materi'>{item.title}</Link>}
                />
            </List.Item>
            )}
        />
        <List
            header='Ilmu Sains'
            bordered
            itemLayout="horizontal"
            dataSource={data}
            style={{width: 400, fontSize: 26, fontWeight: 'bolder', color: '#fdc128'}}
            pagination={{align: 'center', position: 'bottom', pageSize: 6}}
            renderItem={(item, index) => (
            <List.Item>
                <List.Item.Meta
                avatar={<LockOutlined/>}
                title={<a href="https://ant.desig">{item.title}</a>}
                />
            </List.Item>
            )}
        />
        <List
            header='Ilmu Sosial'
            bordered
            itemLayout="horizontal"
            dataSource={data}
            style={{width: 400, fontSize: 26, fontWeight: 'bolder', color: '#fdc128'}}
            pagination={{align: 'center', position: 'bottom', pageSize: 6}}
            renderItem={(item, index) => (
            <List.Item>
                <List.Item.Meta
                avatar={<LockOutlined/>}
                title={<a href="https://ant.desig">{item.title}</a>}
                />
            </List.Item>
            )}
        />
    </Space>
  
);

export default Course;