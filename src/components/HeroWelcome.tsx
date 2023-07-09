import { Card } from "antd"
import * as React from 'react';

export interface IAppProps {
    title: string,
    desc: string,
}

export interface IAppState {
    data?: object,
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
        
    }
  }

  public render() {
    return (
        <Card cover 
        title= {this.props.title}
        headStyle={{fontSize: 32, textAlign: 'center', backgroundColor:'#ffefe1', padding: 30}}
        bodyStyle={{backgroundColor: '#ffefe1'}}
        >
            {this.props.desc}
        </Card>
    );
  }
}
