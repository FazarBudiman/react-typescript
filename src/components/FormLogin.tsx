import * as React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, MailOutlined} from '@ant-design/icons';
import CompForm from './CompForm';

export interface IAppProps {
}

const FormLogin: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
      
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

      return (
        <div style={{padding: 70, }}>
            <CompForm title='Login'  />
        </div>
        
        // <Form
        //         name="basic"
        //         labelCol={{ span: 8 }}
        //         wrapperCol={{ span: 16 }}
        //         style={{ maxWidth: 550, marginTop: 70 }}
        //         initialValues={{ remember: true }}
        //         onFinish={onFinish}
        //         onFinishFailed={onFinishFailed}
        //         autoComplete="off"
        //         >
        //             <Form.Item
        //             label="Email"
        //             name="email"
        //             rules={[
        //                 { 
        //                     required: true,  
        //                     message: 'Please input your email!' 
        //                 },
        //                 {
        //                     type: 'email',
        //                     message: 'Input must be type email!'
        //                 }
        //             ]}
        //             >
        //                 <Input addonBefore={<MailOutlined />}/>
        //             </Form.Item>
            
        //             <Form.Item
        //             label="Password"
        //             name="password"
        //             rules={[{ required: true, message: 'Please input your password!' }]}
        //             >
        //                 <Input.Password addonBefore={<LockOutlined />} />
        //             </Form.Item>
            
        //             <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        //                 <Checkbox>Remember me</Checkbox>
        //             </Form.Item>
            
        //             <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        //                 <Button type="primary" htmlType="submit" >
        //                     Login
        //                 </Button>
        //             </Form.Item>
        // </Form>
      )
}

export default FormLogin