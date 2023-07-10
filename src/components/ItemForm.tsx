import {LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { faIdCard, faListCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form, Input, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { Component } from 'react'

interface Props {
  title: string;
  inputId?: boolean;
  inputNama? : boolean;
  inputEmail? : boolean;
  inputKataSandi? : boolean;
  select? : boolean;
  textArea?: boolean;
}

type State = {}

export default class ItemForm extends Component<Props, State> {
  state = {}

  inputId = (
    <Form.Item label='Id' name='id' >
      <Input disabled addonBefore={<FontAwesomeIcon icon={faIdCard} />} />
    </Form.Item>
  )

  inputNama = (
    <Form.Item label='Nama' name='nama' rules={[
      {
        required: true,
        message: 'Please input your name !'
      }
    ]}>
        <Input addonBefore={<UserOutlined />} />
      </Form.Item>
  )

  inputEmail = (
    <Form.Item label='Email' name='email' rules={[
      {
        required: true,
        message: 'Please input your email !'
      },
      {
        type: 'email',
        message: 'Input must be type email'
      }
    ]}>
      <Input addonBefore={<MailOutlined />}/>
    </Form.Item>
  )

  inputKataSandi = (
    <Form.Item label='Kata Sandi' name='kataSandi' rules={[
      {
        required: true,
        message: 'Please input your password'
      },
      {
        min: 8,
        message: 'Your password at least 8 character'
      }
    ]}>
      <Input.Password addonBefore={<LockOutlined />} />
    </Form.Item>
  )

  select = (
    <Form.Item>
      <Input.Group compact>
        <Input addonBefore={<FontAwesomeIcon icon={faListCheck} />} style={{width: '8%'}} />
        <Select style={{width: '92%'}} />
      </Input.Group>
    </Form.Item>
  )

  inputTextArea = (
    <Form.Item label='Deskripsi'>
      <TextArea  />
    </Form.Item>
  )

  buttonFinish = (
          <Form.Item>
            <Button htmlType='submit' type='primary' style={{width: '100%', }}>{this.props.title}</Button>
          </Form.Item>
  )

  public render(): React.ReactNode {
      return (
        <>
           {this.props.inputId === true && this.inputId}
           {this.props.inputNama === true && this.inputNama}
           {this.props.inputEmail === true && this.inputEmail}
           {this.props.inputKataSandi === true && this.inputKataSandi}
           {this.props.select === true && this.select}
           {this.props.textArea === true && this.inputTextArea}
           {this.buttonFinish}
        </>
        
      )
  }
}