import React from 'react';
import {Button, Space, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import ModalAdd from '../../components/ModalAdd';

interface DataType {
  id: number;
  nama: string;
  kategori: any;
}

const columns: ColumnsType<DataType> =[
  {
    title: 'Id Kursus',
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
    title: 'Kategori',
    dataIndex: 'kategori',
    filters: [
      {
        text: 'Ilmu Umum',
        value: 'Ilmu Umum',
      },
      {
        text: 'Ilmu Sains',
        value: 'Ilmu Sains',
      },
      {
        text: 'Ilmu Sosial',
        value: 'Ilmu Sosial',
      },
    ],
    onFilter: (value: any, record) => record.kategori === value,
  },
  {
    title: 'Action',
    dataIndex: 'id',
    render: (record: DataType) => (
      <>
        <Space size={15}>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Space>
      </>
    )
  }
]

const data: DataType[] = [
  {
    id: 1,
    nama: 'PKN',
    kategori: 'Ilmu Umum',
  },
  {
    id: 2,
    nama: 'PKN',
    kategori: 'Ilmu Umum',
  },
  {
    id: 2,
    nama: 'PKN',
    kategori: 'Ilmu Umum',
  },
  {
    id: 2,
    nama: 'PKN',
    kategori: 'Ilmu Umum',
  },
  {
    id: 2,
    nama: 'PKN',
    kategori: 'Ilmu Umum',
  },
  {
    id: 3,
    nama: 'PKN',
    kategori: 'Ilmu Sains',
  },
  {
    id: 2,
    nama: 'PKN',
    kategori: 'Ilmu Umum',
  },
  {
    id: 2,
    nama: 'PKN',
    kategori: 'Ilmu Umum',
  },
  {
    id: 2,
    nama: 'PKN',
    kategori: 'Ilmu Umum',
  },
  {
    id: 2,
    nama: 'PKN',
    kategori: 'Ilmu Umum',
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
}

const DataCourse: React.FC = () => {
  return (
    <>
      <ModalAdd title='Add Course' />
      <Table dataSource={data} scroll={{y: 360}} columns={columns} onChange={onChange} />
    </>
  
  )
};

export default DataCourse;