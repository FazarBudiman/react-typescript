import * as React from 'react';
import { Layout} from 'antd';

const { Footer} = Layout;

export interface IAppProps {
}

const Footbar = () => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: '#262c9c', color: 'white' }} >Ruangguru ©2023 by Fazar Budiman</Footer>
  )
}

export default Footbar;
