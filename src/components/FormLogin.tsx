import * as React from 'react';
import CompForm from './CompForm';

export interface IAppProps {
}

const FormLogin: React.FC = () => {
      return (
        <div style={{padding: 70, }}>
            <CompForm title='Login' url='http://localhost:5432/auth/login'  />
        </div>
      )
}

export default FormLogin