import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Card } from 'antd';

const { Meta } = Card;

const VideoMateri: React.FC = () => {
    const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

    return (
        <>
            <Card
                onClick={showModal}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://image.slideserve.com/188247/alat-alat-reproduksi-manusia-l.jpg" />}
            >
                <Meta title="Sistem Reproduksi Pada Manusia"  />
            </Card>

            <Modal
                title="Sistem Reproduksi Pada Manusia"
                style={{textAlign: 'center'}}
                width={750}
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <video src="https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4" width="600" height="360" controls />
            </Modal>
        </>
    )
  
  
};

export default VideoMateri;