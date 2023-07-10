import React, { useEffect, useState } from 'react';
import {Button, Space, Table, Typography } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import ModalAdd from '../../components/ModalAdd';
import axios from 'axios';
import AlertFactory from '../../components/Alerts';

interface DataType {
  id: number;
  nama: string;
  id_kategori_kursus: any;
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
    dataIndex: 'id_kategori_kursus',
    render(value) {
        if (value === 100) {
          return (
            <Typography>Ilmu Umum</Typography>
          )
        } else if (value === 101) {
          return (
            <Typography>Ilmu Sains</Typography>
          )
        } else if (value === 102) {
          return (
            <Typography>Ilmu Sosial</Typography>
          )
        }
    },
    filters: [
      {
        text: 'Ilmu Umum',
        value: 100,
      },
      {
        text: 'Ilmu Sains',
        value: 101,
      },
      {
        text: 'Ilmu Sosial',
        value: 102,
      },
    ],
    onFilter: (value: any, record) => record.id_kategori_kursus === value,
  },
  {
    title: 'Action',
    dataIndex: 'id',
    render: (record: DataType) => {

      const handleDelete = (id: any) => {
       axios.delete(`http://localhost:5432/course/${id}`)
       .then(res => {
          const alertSuccess = new AlertFactory().createAlert("success", res.data.message)
          alertSuccess.alert()
          // window.location.reload()
       })
       .catch(err => {
          const alertFailed = new AlertFactory().createAlert("error", "Login Gagal")
          alertFailed.alert()
       })
      }
      return (
      <>
        <Space size={15}>
          <Button onClick={() => alert(record)}>Edit</Button>
          <Button onClick={() => handleDelete(record)}>Delete</Button>
        </Space>
      </>
      )
    }
  }
]

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
}

const DataCourse: React.FC = () => {
  const [dataCourse, setDataCourse] = useState<Array<any> | undefined>([{}])
  
  useEffect(() => {
    axios.get(`http://localhost:5432/course`)
    .then(res => {
      setDataCourse([])
      setDataCourse(res.data)
    })
    .catch(err => console.log(err))
  },[dataCourse])

  return (
    <>
      <ModalAdd title='Add Course' />
      <Table dataSource={dataCourse} scroll={{y: 360}} columns={columns} onChange={onChange} />
    </>
  
  )
};

export default DataCourse;