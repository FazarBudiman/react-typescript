import { LockOutlined } from '@ant-design/icons';
import {List, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Course: React.FC = () => {
  const [dataCourse, setDataCourse] = useState<Array<any> | undefined>([{}])
  useEffect(() => {
    axios.get(`http://localhost:5432/course`)
    .then(res => {
      setDataCourse(res.data)
    })
    .catch(err => console.log(err))

  },[])
  return (
    <Space size='large' align='start'>
        <List
            header='Ilmu Umum'
            bordered
            itemLayout="horizontal"
            dataSource={dataCourse}
            style={{width: 400, fontSize: 26, fontWeight: 'bolder', color: '#fdc128'}}
            pagination={{align: 'center', position: 'bottom', pageSize: 6}}
            renderItem={(item : any) => {
              if (item.id_kategori_kursus === 100) {
                return (
                  <List.Item>
                      <List.Item.Meta
                      avatar={<LockOutlined/>}
                      title={<Link to={`/dashboard/course/${item.id}/materi`}>{item.nama}</Link>}
                      />
                  </List.Item>
                )
              }
            }}
        />
        <List
            header='Ilmu Sains'
            bordered
            itemLayout="horizontal"
            dataSource={dataCourse}
            style={{width: 400, fontSize: 26, fontWeight: 'bolder', color: '#fdc128'}}
            pagination={{align: 'center', position: 'bottom', pageSize: 6}}
            renderItem={(item : any) => {
              if (item.id_kategori_kursus === 101) {
                return (
                  <List.Item>
                      <List.Item.Meta
                      avatar={<LockOutlined/>}
                      title={<Link to={`/dashboard/course/${item.id}/materi`}>{item.nama}</Link>}
                      />
                  </List.Item>
                )
              }
            }}
        />
        <List
            header='Ilmu Sosial'
            bordered
            itemLayout="horizontal"
            dataSource={dataCourse}
            style={{width: 400, fontSize: 26, fontWeight: 'bolder', color: '#fdc128'}}
            pagination={{align: 'center', position: 'bottom', pageSize: 6}}
            renderItem={(item : any) => {
              if (item.id_kategori_kursus === 102) {
                return (
                  <List.Item>
                      <List.Item.Meta
                      avatar={<LockOutlined/>}
                      title={<Link to={`/dashboard/course/${item.id}/materi`}>{item.nama}</Link>}
                      />
                  </List.Item>
                )
              }
            }}
        />
    </Space>
  )
  
};

export default Course;