import React from 'react';
import {Button, Table, Tag } from 'antd';
import ModalAdd from '../../components/ModalAdd';

const { Column } = Table;

interface DataType {
  id: React.Key;
  nama: string;
  email: string;
  kataSandi: string;
  course: string;
}

const data: DataType[] = [
  {
    id: '1',
    nama: 'John',
    email: 'Brown@gmail.com',
    kataSandi: 'brown1234',
    course: 'Biologi'
  },
  {
    id: '1',
    nama: 'John',
    email: 'Brown@gmail.com',
    kataSandi: 'brown1234',
    course: 'Biologi'
  },
  {
    id: '1',
    nama: 'John',
    email: 'Brown@gmail.com',
    kataSandi: 'brown1234',
    course: 'Biologi'
  },
  {
    id: '1',
    nama: 'John',
    email: 'Brown@gmail.com',
    kataSandi: 'brown1234',
    course: 'Biologi'
  },
  {
    id: '1',
    nama: 'John',
    email: 'Brown@gmail.com',
    kataSandi: 'brown1234',
    course: 'Biologi'
  },
  {
    id: '1',
    nama: 'John',
    email: 'Brown@gmail.com',
    kataSandi: 'brown1234',
    course: 'Biologi'
  },
  {
    id: '1',
    nama: 'John',
    email: 'Brown@gmail.com',
    kataSandi: 'brown1234',
    course: 'Biologi'
  },
  {
    id: '1',
    nama: 'John',
    email: 'Brown@gmail.com',
    kataSandi: 'brown1234',
    course: 'Biologi'
  },
  {
    id: '1',
    nama: 'John',
    email: 'Brown@gmail.com',
    kataSandi: 'brown1234',
    course: 'Biologi'
  },
  {
    id: '1',
    nama: 'John',
    email: 'Brown@gmail.com',
    kataSandi: 'brown1234',
    course: 'Biologi'
  },
  {
    id: '1',
    nama: 'John',
    email: 'Brown@gmail.com',
    kataSandi: 'brown1234',
    course: 'Biologi'
  },
];

const DataTeacher: React.FC = () => {
  return (
    <>
    {/* <Button type='primary' style={{marginBottom: 16}}>
      Tambah Guru
    </Button> */}
    <ModalAdd title='Add Teacher' />
      <Table dataSource={data} scroll={{y: 360}}  >
    <Column title="Nama" dataIndex="nama" key="nama" />
    <Column title="Email" dataIndex="email" key="email" />
    <Column title="Kata Sandi" dataIndex="kataSandi" key="kataSandi" />
    <Column
      title="Pelajaran yang diampu"
      dataIndex="course"
      key="course"
      render={(course: any) => (
        <>
          <Tag color='green'>
            {course}
          </Tag>
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={() => (
        <a>Delete</a>
      )}
    />
  </Table>  
    </>
  
  )
};

export default DataTeacher;