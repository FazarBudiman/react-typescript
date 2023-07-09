import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const gridStyle: React.CSSProperties = {
  width: '30%',
  textAlign: 'center',
  margin: 5
};

const Materi: React.FC = () => (
  <Card title="Biologi" style={{cursor: 'pointer'}} bodyStyle={{padding: 15, display: 'flex', justifyContent: 'center'}} bordered>
    <Card.Grid style={gridStyle}><Link to='/dashboard/course/materi/video-materi'>Reproduksi</Link></Card.Grid>
    <Card.Grid style={gridStyle}><Link to='/dashboard/course/materi/video-materi'>Reproduksi</Link></Card.Grid>
    <Card.Grid style={gridStyle}><Link to='/dashboard/course/materi/video-materi'>Reproduksi</Link></Card.Grid>
    <Card.Grid style={gridStyle}><Link to='/dashboard/course/materi/video-materi'>Reproduksi</Link></Card.Grid>
    <Card.Grid style={gridStyle}><Link to='/dashboard/course/materi/video-materi'>Reproduksi</Link></Card.Grid>
    <Card.Grid style={gridStyle}><Link to='/dashboard/course/materi/video-materi'>Reproduksi</Link></Card.Grid>
    <Card.Grid style={gridStyle}><Link to='/dashboard/course/materi/video-materi'>Reproduksi</Link></Card.Grid>
    <Card.Grid style={gridStyle}><Link to='/dashboard/course/materi/video-materi'>Reproduksi</Link></Card.Grid>
    <Card.Grid style={gridStyle}><Link to='/dashboard/course/materi/video-materi'>Reproduksi</Link></Card.Grid>
    <Card.Grid style={gridStyle}><Link to='/dashboard/course/materi/video-materi'>Reproduksi</Link></Card.Grid>
  </Card>
);

export default Materi;