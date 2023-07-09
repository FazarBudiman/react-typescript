import * as React from 'react';
import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';


const FormRegister: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
      
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 550, marginTop: 70 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                    <Form.Item
                    label="Nama"
                    name="nama"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input addonBefore={<UserOutlined />}/>
                    </Form.Item>

                    <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { 
                            required: true,  
                            message: 'Please input your email!' 
                        },
                        {
                            type: 'email',
                            message: 'Input must be type email!'
                        }
                    ]}
                    >
                        <Input addonBefore={<MailOutlined />}/>
                    </Form.Item>
            
                    <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password addonBefore={<LockOutlined />} />
                    </Form.Item>
            
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
    )
}

export default FormRegister;
