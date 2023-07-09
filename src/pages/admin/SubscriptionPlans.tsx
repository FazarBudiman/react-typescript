import React from 'react';
import {Button, Space, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import ModalAdd from '../../components/ModalAdd';

interface DataType {
  id: number;
  jenisLangganan: string;
  deskripsi: string;
  lamaLangganan: any;
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
    title: 'Jenis Langganan',
    dataIndex: 'jenisLangganan',
  },
  {
    title: 'Deskripsi',
    dataIndex: 'deskripsi',
    
  },
  {
    title: 'Lama Langganan',
    dataIndex: 'lamaLangganan',
    
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
    jenisLangganan: 'Paket A',
    deskripsi: 'ini adalah kursus 3 bulan',
    lamaLangganan: '3 bulan'
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
}

const DataCourse: React.FC = () => {
  return (
    <>
     <ModalAdd title='Add Subscription Plans' />
    <Table dataSource={data} scroll={{y: 360}} columns={columns} onChange={onChange} />
    </>
  
  )
};

export default DataCourse;