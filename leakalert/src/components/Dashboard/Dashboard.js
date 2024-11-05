import "../Dashboard/Dashboard.css";
import React, { useState, useEffect } from 'react';
import Logo from "../../images/logo.svg";
import Home from "../../images/home.svg";
import Table from "../../images/tables.svg";
import Report from "../../images/logs.svg";
import Profile from "../../images/profile.svg";
import Rtl from "../../images/rtl.svg";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';  // Importing the hamburger icon (Menu)
import CloseIcon from '@mui/icons-material/Close'; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { blue } from "@mui/material/colors";

import axios from "axios";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sensorData, setSensorData] = useState([]);

  const [open, setOpen] = React.useState(false);

  // const SensorStatus = () => {
 
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://leak-d9yr.onrender.com/api/v1/app/sensors/status');
          setSensorData(response.data); // Update based on the structure of response data
          console.log(response.data)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

  // }

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const links = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: Home
    },
    {
      name: 'Tables and Graph',
      path: '/tables',
      icon: Table
    },
    {
      name: 'Report Logs',
      path: '/reports',
      icon: Report
    },
    {
      name: 'RTL',
      path: '/rtl',
      icon: Rtl
    },
    {
      name: 'Profile',
      path: '/profile',
      icon: Profile
    },
    {
      name: 'Sign Out',
      path: '/login',
      icon: Profile
    },
  ]

  const DrawerList = (
    <Box sx={{ width: 200 }} style={{backgroundColor: '#0052CC', padding: '0 20px', height: '100%', color: 'white'}} role="presentation" onClick={toggleDrawer(false)}>
      <h3>Pipeline Monitor</h3>
      <List className="list">
        {links.map((text, index) => (
          <ListItem className="listitem" key={text} disablePadding>
            <Link style={{display: 'flex', textDecoration: 'none', width: '100%', alignItems: 'center', color: 'white', gap:'8px'}} to={text.path}>
              <div style={{backgroundColor: 'white', borderRadius: '50%'}}>
                <img src={text.icon} alt="icon"/>
              </div>
              <ListItemText primary={text.name} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );



  const data = [
    {
      name: 'Jan',
      FlowRateDifference: 4,
      PressureDifference: 6,
      FluidLevelDifference: 8,
      amt: 13,
    },
    {
      name: 'Feb',
      FlowRateDifference: 2,
      PressureDifference: 13,
      FluidLevelDifference: 8,
      amt: 9,
    },
    {
      name: 'Mar',
      FlowRateDifference: 6,
      PressureDifference: 3,
      FluidLevelDifference: 10,
      amt: 9,
    },
    {
      name: 'Apr',
      FlowRateDifference: 7,
      PressureDifference: 3,
      FluidLevelDifference: 2,
      amt: 15,
    },
    {
      name: 'May',
      FlowRateDifference: 9,
      PressureDifference: 3,
      FluidLevelDifference: 4,
      amt: 1,
    },
    {
      name: 'Jun',
      FlowRateDifference: 9,
      PressureDifference: 1,
      FluidLevelDifference: 6,
      amt: 5,
    },
    {
      name: 'Jul',
      FlowRateDifference: 6,
      PressureDifference: 7,
      FluidLevelDifference: 10,
      amt: 12,
    },
    {
      name: 'Aug',
      FlowRateDifference: 13,
      PressureDifference: 9,
      FluidLevelDifference: 4,
      amt: 8,
    },
    {
      name: 'Sep',
      FlowRateDifference: 2,
      PressureDifference: 7,
      FluidLevelDifference: 12,
      amt: 10,
    },
    {
      name: 'Oct',
      FlowRateDifference: 8,
      PressureDifference: 4,
      FluidLevelDifference: 3,
      amt: 7,
    },
    {
      name: 'Nov',
      FlowRateDifference: 9,
      PressureDifference: 8,
      FluidLevelDifference: 14,
      amt: 5,
    },
    {
      name: 'Dec',
      FlowRateDifference: 11,
      PressureDifference: 12,
      FluidLevelDifference: 14,
      amt: 2,
    },
  ];


  return (
    <div className='dash'>
      <nav className='navbar'>
        <div className="nav-container">
          <img src={Logo} height={60} alt="logo"/>
          <div>
            <Button
              className='navBlock'
              style={{color: 'white'}}
              onClick={toggleDrawer(true)}
            >
              {open ? <CloseIcon/> : <MenuIcon/>}
            </Button>

            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>
        </div>
      </nav>
        
      <div className='dash-container' >        
        {/* Sidebar */}
        <div className='sidebar'>
          <div className="side-wrapper">
            <h3 style={{marginTop: '0'}}>Pipeline Monitor</h3>
            <nav>
              <ul style={{listStyle: 'none'}}>
                {
                  links.map((link, index)=> (
                    <Link key={link} to={link.path} className="link" style={{textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <div>
                        <img src={link.icon} alt="icon"/>
                      </div>
                      <li>{link.name}</li>
                    </Link>
                  ))
                }
              </ul>
            </nav>
          </div>
        </div>
        {/* Dashboard */}
        <div className='dashboard' >
          <div className="dash-wrapper">
            <div>
            
            <div>
              <h3 style={{marginTop: '0'}}>Sensor Readings</h3>
              <div style={{overflow: 'scroll'}}>
              
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Sensor</th>
                      <th>Flow Rate</th>
                      <th>Pressure</th>
                      <th>Fluid Level</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>                 
                  {sensorData.slice(0, 2).map((sensor, index) => (
                    <tr>
                      <th>Sensor {sensor.id}</th>
                      <th>{sensor.lastValue}</th>
                      <th>312psi</th>
                      <th>44 L</th>
                      <th>74Km</th>
                    </tr>
                  ))}
          
                  </tbody>
                </table>
              
              </div>
            </div>
            
            </div>
            <div className="grid2">
              <div className="grid-card">
                <h3 style={{margin: '0'}}>Flow Rate Difference</h3>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <p className="text-black" style={{fontSize: '25px', display: 'flex', alignItems: 'end', fontWeight: '500'}}>{sensorData.slice(3, 4).map((sensor, index) => (<p style={{margin: '0'}}>{sensor.lastValue}</p>))}
                        <span style={{fontSize: '11px', fontWeight: '500'}}>m3/h</span>
                        <span style={{fontSize: '11px', color: '#00AC06'}}>5.2%</span>
                      </p>
                      <p style={{color: 'lightgreen'}}>safe</p>
                  </div>
              </div>
              <div className="grid-card">
                <h3 style={{margin: '0'}}>Pressure Difference</h3>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <p className="text-black" style={{fontSize: '25px', fontWeight: '500'}}>110
                      <span style={{fontSize: '11px', fontWeight: '500'}}>psi</span>
                      <span style={{fontSize: '11px', color: '#00AC06'}}>26.2%</span>
                    </p>
                    <p style={{color: 'lightgreen'}}>safe</p>
                  </div>
              </div>
              <div className="grid-card">
                <h3 style={{margin: '0'}}>Flow Level Difference</h3>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <p className="text-black" style={{fontSize: '25px', fontWeight: '500'}}>11
                      <span style={{fontSize: '11px', fontWeight: '500'}}>L</span>
                      <span style={{fontSize: '11px', color: '#00AC06'}}>15.2%</span>
                    </p>
                    <p style={{color: 'lightgreen'}}>safe</p>
                  </div>
              </div>
            </div>
            {/* <ResponsiveContainer style={{width: '400px', height: '400px', border: '2px solid black'}}> */}
            <div className="chart" style={{overflow: 'hidden'}}>
              <h3 style={{marginTop: '0'}}>Daily Changes / Flunctuation per time</h3>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart
                  className="chart-wrapper"
                  style={{marginLeft: '-25px'}}
                  data={data}
                >
                  <CartesianGrid strokeDasharray="1 10"/>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="PressureDifference" stroke="#8884d8"  />
                  <Line type="monotone" dataKey="FlowRateDifference" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="FluidLevelDifference" stroke="#333" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h3 style={{marginTop: '0'}}>Logs</h3>
              <div style={{overflow: 'scroll'}}>
                <table className='custom-table'>
                  <thead>
                    <tr>
                      <th>Date/ Time</th>
                      <th>Flow Rate</th>
                      <th>Pressure</th>
                      <th>Fluid Level</th>
                      <th>Location</th>
                      <th>Safety Safe</th>
                    </tr>
                  </thead>
                  <tbody>
                  {sensorData.slice(3, 4).map((sensor, index) => (
                    <tr>
                      <th>{sensor.createdAt}</th>
                      <th>{sensor.lastValue}</th>
                      <th>312psi</th>
                      <th>44 L</th>
                      <th>74Km</th>
                      <th>{sensor.status}</th>
                    </tr>
  
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Dashboard