import logo from './logo.svg';
import React, { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'

import './App.css';
import Timestamp from 'react-timestamp'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar';

function Public() {
  
  const [data, setData] = useState([
    { name: 'Qhizer1', code: '123', timestamp: '2021-05-01', codeName: 'code 123' },
    { name: 'Qhizer2', code: '1234', timestamp: '2021-05-01', codeName: 'code 1233' },
    { name: 'Qhizer3', code: '1235', timestamp: '2021-05-01', codeName: 'code 1231' },
  ]);
  return (
    
    <div className="Public">
    <Navbar />
      <div style={{
        width:'70%'
        }}>
        {data.map((item, index) => {
          return <div key={index}>
          <Card 
          style={{ 
            backgroundColor: "rgb(184 221 255)",
            margin: "10px" }}>
        <CardContent>

        <Typography variant="h6" component="p1" 
          style={{
            textAlign: "Left",
          }}>
            {index + 1}
            <p>Code: {item.code}</p>
            <p >CodeName: {item.codeName}</p>
            <p>Name: {item.name}</p>
            <p>DateModified: <Timestamp date={item.timestamp} /></p>
          </Typography>

        </CardContent>
        {/* <CardContent>
          <Typography variant="h5" component="h2" style={{}}>
            Hello world
          </Typography>
        </CardContent> */}
        <CardActions style={{}}>
          <Button size="small"
            style={{
              backgroundColor: '#3182ce',
              color: "white",
              marginLeft: "auto",
              marginRight: "20px",
            }}

          >Edit</Button>
          <Button size="small"
            style={{
              backgroundColor: '#ff3f3fdb',
              color: "white",
              marginLeft: "10px",
              marginRight: 0,
            }}

          >Delete</Button>
        </CardActions>
      </Card>
           
          </div>
        })}
      </div>

    </div>
  );
}

export default Public;
