import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Card, List, Space, Tag, Timeline, Typography } from 'antd';
import React, { useState } from 'react';

const data = [
  {
    title: 'Matematika',
  },
  {
    title: 'Biologi',
  },
  {
    title: 'Kimia',
  },
  {
    title: 'Matematika',
  },
  {
    title: 'Biologi',
  },
  {
    title: 'Kimia',
  },
  {
    title: 'Matematika',
  },
];

const LearningPath: React.FC = () => {
    const [titleTimeline, setTitleTimeline] = useState('')
    return (
    <Space size='large' align='start' style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <List
            header='Course'
            bordered
            itemLayout="horizontal"
            dataSource={data}
            style={{width: 500, fontSize: 26, fontWeight: 'bolder', color: '#fdc128'}}
            pagination={{align: 'center', position: 'bottom', pageSize: 6}}
            renderItem={(item, index) => (
            <List.Item>
                <List.Item.Meta
                avatar={<FontAwesomeIcon icon={faChalkboardUser} />}
                title={<Typography>{item.title}</Typography>}
                />
                <Tag color='blue' onClick={() => setTitleTimeline(item.title)} style={{cursor: 'pointer'}}>Learning Path</Tag>
            </List.Item>
            )}
        />
        <Card title={titleTimeline} style={{width: 400}}>
            {titleTimeline !== '' && 
                <Timeline
                    items={[
                    {
                        children: 'Create a services site 2015-09-01',
                    },
                    {
                        children: 'Solve initial network problems 2015-09-01',
                    },
                    {
                        children: 'Technical testing 2015-09-01',
                    },
                    {
                        children: 'Network problems being solved 2015-09-01',
                    },
                    ]}
                />
            }
        </Card>
        
    </Space>
    )
  
    };

export default LearningPath;