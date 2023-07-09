import React from 'react';
import {Table, Tag } from 'antd';

const { Column } = Table;

interface DataType {
  id: React.Key;
  nama: string;
  email: string;
  subscription: boolean;
}

const data: DataType[] = [
  {
    id: '1',
    nama: 'John',
    email: 'Brown@gmail.com',
    subscription: true,
  },
  {
    id: '2',
    nama: 'John wick',
    email: 'BrownWick@gmail.com',
    subscription: false,
  },
  {
    id: '1',
    nama: 'John',
    email: 'Brown@gmail.com',
    subscription: true,
  },
  {
    id: '2',
    nama: 'John wick',
    email: 'BrownWick@gmail.com',
    subscription: false,
  },
  {
    id: '1',
    nama: 'John',
    email: 'Brown@gmail.com',
    subscription: true,
  },
  {
    id: '2',
    nama: 'John wick',
    email: 'BrownWick@gmail.com',
    subscription: false,
  },
  {
    id: '2',
    nama: 'John wick',
    email: 'BrownWick@gmail.com',
    subscription: false,
  },

];

const DataStudent: React.FC = () => {
  return (
  <Table dataSource={data} scroll={{y: 360}} >
    <Column title="Nama" dataIndex="nama" key="nama" />
    <Column title="Email" dataIndex="email" key="email" />
    <Column
      title="Subscription"
      dataIndex="subscription"
      key="subscription"
      render={(subscription: boolean) => (
        <>
            {subscription === true ? 
                <Tag color="blue" >
                    Subscribe
                </Tag> : 
                <Tag color="red" >
                    Not Subscribe
                </Tag>
            }
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
  )
};

export default DataStudent;