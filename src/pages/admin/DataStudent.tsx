import React, { useEffect, useState } from 'react';
import {Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';

interface DataType {
  id_siswa: React.Key;
  nama: string;
  email: string;
  id_kategori_pengguna: number;
}

const  columns: ColumnsType<DataType> = [
  {
    title: 'Nama',
    key:'nama',
    dataIndex: 'nama'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key:'email'
  },
  {
    title: 'Subscription',
    dataIndex: 'id_kategori_pengguna',
    key: 'id_kategori_pengguna',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.id_kategori_pengguna - b.id_kategori_pengguna,
    render(value, record, index) {
        return (
          <>
            {value === 4 ? 
                <Tag color="blue" >
                    Subscribe
                </Tag> : 
                <Tag color="red" >
                    Not Subscribe
                </Tag>
            }
          </>
        )
    },
  },
  {
    title: 'Action',
    key:'id_siswa',
    dataIndex: 'id_siswa',
    render(value) {
      return (
        <a onClick={() => alert(value)}>Delete</a>
      )
    }
  }

]


const DataStudent: React.FC = () => {
  const [dataStudent, setDataStudent] = useState<Array<any> | undefined>([{}])
  useEffect(() => {
    axios.get('http://localhost:5432/student')
    .then(res => {
      console.log(res.data)
      setDataStudent([])
      setDataStudent(res.data)
    } )
    .catch(err => console.log(err.message))
  },[])
  return (
  <Table dataSource={dataStudent} scroll={{y: 360}} columns={columns} >
    
  </Table>
  )
};

export default DataStudent;