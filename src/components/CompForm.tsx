import { Form } from 'antd';
import * as React from 'react';
import ItemForm from './ItemForm';

interface IAppProps {
  title: string;
}

const CompForm: React.FunctionComponent<IAppProps> = (props) => {
    const handleOk = (values: any) => {
      console.log(values)
    }
    const getItemForm = (title: string) => {
      switch (title) {
        case 'Login' :
          return (
            <ItemForm title={title} inputEmail={true} inputKataSandi={true} />
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
