import * as React from 'react';
import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import CompForm from './CompForm';


const FormRegister: React.FC = () => {
    // const onFinish = (values: any) => {
    //     console.log('Success:', values);
    //   };
      
    // const onFinishFailed = (errorInfo: any) => {
    //     console.log('Failed:', errorInfo);
    //   };

    return (
        <div style={{padding: 70, }}>
            <CompForm title='Register'/>
        </div>
    )
}

export default FormRegister;
