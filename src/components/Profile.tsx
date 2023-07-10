import React, {useEffect, useState } from 'react';
import { Avatar, Button, Popover, Typography } from 'antd';
import User from '../class/User';
import { useNavigate } from 'react-router-dom';
const {Text} = Typography


const Profile: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [nama, setNama] = useState<String | undefined>()
  const [email, setEmail] = useState<String | undefined>()
  const [idKategori, setIdKategori] = useState<number | undefined>()
  const navigate = useNavigate()

  const logout = () => {
    setOpen(false);
    navigate('/')
    window.location.reload()
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const user = User.instance
    console.log(user?.getId())
    setNama(user?.getNama())
    setEmail(user?.getEmail())
    setIdKategori(user?.getIdKategoriPengguna())
  },[])
  return (
    <>
    { nama !== undefined  && 
    <Popover
    style={{padding: 1000}}
    content={
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 50}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}} >
                <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }} size={60}>{idKategori === 5? nama.charAt(0): "A"}</Avatar>
                <Text strong >{nama}</Text>
                <Text>{email}</Text>
            </div>
            <Button onClick={logout} style={{width: '50%'}}>Log out</Button>
        
        </div>
    }
    title={<Text code >{idKategori === 5 && `Siswa`}{idKategori === 1 && `Admin`}</Text>}
    trigger="click"
    open={open}
    onOpenChange={handleOpenChange}
    >
      Profile
    </Popover>
    }
    </>
  );
};

export default Profile;