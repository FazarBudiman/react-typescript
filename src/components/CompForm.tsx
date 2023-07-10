import { Form } from 'antd';
import * as React from 'react';
import ItemForm from './ItemForm';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import User from '../class/User';
import AlertFactory from './Alerts';

interface IAppProps {
  title: string;
  url?: string | any;
}

const CompForm: React.FunctionComponent<IAppProps> = (props) => {
  const navigate = useNavigate()

    const handleOk = (values: any) => {
      const alertFailed = new AlertFactory().createAlert("error", "Login Gagal")
      axios.post(props.url, values)
      .then(res => {
        if (res.data.message === 'Login berhasil') {
          const alertSuccess = new AlertFactory().createAlert("success", res.data.message )
          alertSuccess.alert()
          let user1 = res.data.user[0]
          const userInstance = User.getInstance(user1.id, user1.nama, user1.email, user1.kata_sandi, user1.id_kategori_pengguna);

          setTimeout(() => {
            if (userInstance.getIdKategoriPengguna() === 1) {
              navigate('/manage-dashboard')
            } else {
              navigate('/dashboard')
            }
          }, 2000)
          
        } else {
          alertFailed.setContent(res.data.message)
          alertFailed.alert()
        }
      })
      .catch(err => {
        alertFailed.setContent(err)
        alertFailed.alert()
      })
    }
    

    const getItemForm = (title: string) => {
      switch (title) {
        case 'Login' :
          return (
            <ItemForm title={title} inputEmail={true} inputKataSandi={true} />
          )
        
          case 'Register':
            return (
              <ItemForm title={title} inputNama={true} inputEmail={true} inputKataSandi={true} />
            )

        case 'Add Teacher':
          return (
            <ItemForm title={title} inputNama={true} inputEmail={true} inputKataSandi={true} select={true} />
          )

        case 'Add Course':
          return (
            <ItemForm title={title} inputId={true} inputNama={true} select={true} />
            
          )

        case 'Add Materi':
          return (
            <ItemForm title={title} inputId={true} inputNama={true} select={true} />
          )

        case 'Add Video':
          return (
            <ItemForm title={title} inputId={true} inputNama={true} select={true} />
          )

        case 'Add Subscription Plans':
          return (
            <ItemForm title={title} inputId={true} inputNama={true} select={true} textArea={true} />
          )
      
        default:
          break;
      }
    }
  return (
    <>
       <Form layout='vertical' onFinish={handleOk}>
          {getItemForm(props.title)}
       </Form>
    </>
  )
};

export default CompForm;
