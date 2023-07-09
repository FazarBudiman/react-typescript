import React from 'react';
import {Button, Space, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import ModalAdd from '../../components/ModalAdd';

interface DataType {
  id: number;
  nama: string;
  namaKursus: any;
}

const columns: ColumnsType<DataType> =[
  {
    title: 'Id Materi',
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
    title: 'Nama Kursus',
    dataIndex: 'namaKursus',
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
    onFilter: (value: any, record) => record.namaKursus === value,
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
    namaKursus: 'Matematika',
  },
  {
    id: 2,
    nama: 'Bangun Ruang',
    namaKursus: 'Matematika',
  },
  {
    id: 2,
    nama: 'Aljabar',
    namaKursus: 'Matematika',
  },
  {
    id: 2,
    nama: 'Matriks',
    namaKursus: 'Matematika',
  },
  {
    id: 2,
    nama: 'Himpunan',
    namaKursus: 'Matematika',
  },
  {
    id: 3,
    nama: 'Past Tense',
    namaKursus: 'Bahasa Inggris',
  },
  {
    id: 2,
    nama: 'Kata Imbuhan',
    namaKursus: 'Bahasa Indonesia',
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
}

const DataMateri: React.FC = () => {
  return (
    <>
      <ModalAdd title='Add Materi' />
      <Table dataSource={data} scroll={{y: 360}} columns={columns} onChange={onChange} />
    </>
  
  )
};

export default DataMateri;