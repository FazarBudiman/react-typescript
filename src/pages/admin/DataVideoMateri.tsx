import React from 'react';
import {Button, Space, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import ModalAdd from '../../components/ModalAdd';

interface DataType {
  id: number;
  nama: string;
  thumbnail: string;
  video: string;
  namaMateri: any;
}

const columns: ColumnsType<DataType> =[
  {
    title: 'Id Video',
    dataIndex: 'id',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.id - b.id,
    sortDirections: [ 'ascend', 'descend'],
  },
  {
    title: 'Judul',
    dataIndex: 'nama',
  },
  {
    title: 'Thumbnail',
    dataIndex: 'thumbnail',
    render: (value: any, record: DataType) => (
        <>
            <Button type="primary" >
              show thumbnail
            </Button>
        </>
    )
  },
  {
    title: 'Video',
    dataIndex: 'video',
    render: (value: any, record: DataType) => (
        <>
            <Button type="primary" >
              show video
            </Button>
        </>
    )
  },
  {
    title: 'Nama Materi',
    dataIndex: 'namaMateri',
    filters: [
      {
        text: 'Matematika',
        value: 'Matematika',
      },
      {
        text: 'Bahasa Indonesia',
        value: 'Bahasa Indonesia',
      },
      {
        text: 'Bahasa Inggris',
        value: 'Bahasa Inggris',
      },
    ],
    onFilter: (value: any, record) => record.namaMateri === value,
  },
  {
    title: 'Action',
    dataIndex: 'id',
    render: (value: any, record: DataType) => (
      <>
        <Space size={15}>
          <Button onClick={() => alert(record.id)}>Edit</Button>
          <Button>Delete</Button>
        </Space>
      </>
    )
  }
]

const data: DataType[] = [
  {
    id: 1,
    nama: 'Bangun Datar',
    thumbnail: 'https://th.bing.com/th/id/OIP.7QoWrpSlFKoMbTXgteYizQHaD_?w=338&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    video: 'https://www.youtube.com/watch?v=0Z2f5yppJbo',
    namaMateri: 'Matematika',
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
}

const DataVideoMateri: React.FC = () => {
  return (
    <>
      <ModalAdd title='Add Video Materi' />
      <Table dataSource={data} scroll={{y: 360}} columns={columns} onChange={onChange} />
    </>
  
  )
};

export default DataVideoMateri;