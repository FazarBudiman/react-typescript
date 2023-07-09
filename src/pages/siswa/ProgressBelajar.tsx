import { CaretRightOutlined } from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { Collapse, List, Progress, theme } from 'antd';
import type { CSSProperties } from 'react';
import React from 'react';

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '3',
    label: 'Biologi',
    children: <List
                  itemLayout="horizontal"
                  dataSource={[{title: 'Reproduksi'}, {title: 'Tanaman'}]}
                  style={{width: 500, color: '#fdc128'}}
                  renderItem={(item, index) => (
                  <List.Item>
                      <List.Item.Meta
                      description={item.title}
                      />
                      <Progress percent={70} strokeColor={{ '0%': 'red', '100%': 'green' }} style={{width: '50%'}} />
                  </List.Item>
                  )}
              />,
    style: panelStyle,
  },
  
];

const ProgressBelajar: React.FC = () => {
  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{ background: token.colorBgContainer }}
      items={getItems(panelStyle)}
    />
  );
};

export default ProgressBelajar;