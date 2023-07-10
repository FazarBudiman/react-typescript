import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const gridStyle: React.CSSProperties = {
  width: '30%',
  textAlign: 'center',
  margin: 5
};

const Materi: React.FC = () => {
  const [dataMateri, setDataMateri] = useState<Array<any> | undefined>([{}])
  const [title, setTitle] = useState<string | undefined>()

  const params = useParams()

  useEffect(() => {
    axios.get('http://localhost:5432/materi')
    .then(res => {
      setDataMateri(res.data)
    })
    .catch(err => console.log(err.message))
  }, [])

  return (
  <Card title={title} style={{cursor: 'pointer'}} bodyStyle={{padding: 15, display: 'flex', justifyContent: 'center'}} bordered>
    {dataMateri?.map((value: any, index: number) => {
      if ( value.id_kursus === Number(params.course) ) {
        if (title === undefined) {
          setTitle(value.nama_kursus)
        }
        return (
          <Card.Grid style={gridStyle}><Link to={`/dashboard/course/${value.id_kursus}/materi/${value.id}`}>{value.judul_materi}</Link></Card.Grid>
        )
      }
    })}
  </Card>
  )
};

export default Materi;