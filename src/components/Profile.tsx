import React, { useState } from 'react';
import { Avatar, Button, Popover, Typography } from 'antd';
const {Text} = Typography

const Profile: React.FC = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Popover
    style={{padding: 1000}}
    content={
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 50}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}} >
                <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }} size={60}>F</Avatar>
                <Text strong >Fazar</Text>
                <Text>Fazarbudiman@gmail.com</Text>
            </div>
            <Button onClick={hide} style={{width: '50%'}}>Log out</Button>
        
        </div>
    }
    title={<Text code >siswa</Text>}
    trigger="click"
    open={open}
    onOpenChange={handleOpenChange}
    >
      Profile
    </Popover>
  );
};

export default Profile;