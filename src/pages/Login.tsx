import * as React from 'react';
import { Tabs } from 'antd';
import {IdcardOutlined, LoginOutlined} from '@ant-design/icons'
import FormLogin from '../components/FormLogin';
import FormRegister from '../components/FormRegister';

const {TabPane} = Tabs

export interface IAppProps {
    
}

export default class Login extends React.Component<IAppProps> {
   
  public render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', paddingTop: 120, paddingBottom: 143}}>
        <Tabs
        style={{
            width: 700,
            minHeight: 450,
            border: '3px solid #ffefe1',
            borderRadius: 20,
            padding: 30
        }}
        centered
        defaultActiveKey="1"
        type="card"
        size='middle'
      >
        <TabPane
        tab={
            <span>
                <LoginOutlined style={{fontSize: 16}} />
                Login
            </span>
        }
        key='login'
        > 
            <FormLogin />
        </TabPane>

        <TabPane
        tab={
            <span>
                <IdcardOutlined style={{fontSize: 16}} />
                Register
            </span>
        }
        key='register'
        >
            <FormRegister />
        </TabPane>
      </Tabs>
      </div>
    );
  }
}
