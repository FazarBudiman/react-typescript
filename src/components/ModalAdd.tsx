import { Button, Modal,  } from 'antd';
import * as React from 'react';
import CompForm from './CompForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

interface Props {
  title: string;
}

interface State {
  isModalOpen: boolean
}

export default class ModalAdd extends React.Component<Props, State> {
  constructor(props: any){
    super(props)
    this.state = {
      isModalOpen : false
    }
  }
  
  showModal = () => {
    this.setState({
      isModalOpen: true
    })
  }

  handleOk =() => {
    this.setState({
      isModalOpen: false
    })
  }

  handleCancel = () => {
    this.setState({
      isModalOpen: false
    })
  }

  getForm = () => {
    return (
      <CompForm title={this.props.title}/>
    )
  }

  public render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal} style={{marginBottom: 16}} icon={<FontAwesomeIcon icon={faCirclePlus} />} >
          {this.props.title}
        </Button>
        <Modal title={this.props.title} footer={[null]} open={this.state.isModalOpen} onCancel={this.handleCancel}>
          {this.getForm()}
        </Modal>
      </>
    );
  }
}
