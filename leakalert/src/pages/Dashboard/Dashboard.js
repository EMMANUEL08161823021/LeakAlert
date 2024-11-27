import "./Dashboard.css";
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
// import { Line } from "recharts";
import axios from "axios";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sensorData, setSensorData] = useState([]);

  const [open, setOpen] = React.useState(false);
  const [chartData, setChartData] = useState([]);



  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to the login page
  };

  // const SensorStatus = () => {
 
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error("No token found in localStorage.");
        return;
      }
    
      const fetchData = async () => {
        try {
          const response = await fetch('https://leak-d9yr.onrender.com/api/v1/app/sensors/status', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          const dataValues = data.structuredFeeds;
          console.log(dataValues);
    
          // Set sensor data
          setSensorData(dataValues);
    
          // Process data for chart
          const formattedData = dataValues.map(sensor => ({
            name: sensor.createdAt.slice(11, 19), // Extract time as name
            FlowRateDifference: Number(sensor.lastValue), // Convert value to number
          }));
          setChartData(formattedData);
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      };
    
      // Fetch data initially and then at regular intervals
      fetchData();
      const interval = setInterval(fetchData, 1000); 
    
      return () => clearInterval(interval);
    }, []);
    
    
    

  // }

  const toggleDrawer = (newOpen) => () => {
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
      path: '#',
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
      path: '',
      icon: Profile
    },
  ]

  const DrawerList = (
    <Box sx={{ width: 200 }} style={{backgroundColor: '#0052CC', padding: '0 20px', height: '100%', color: 'white'}} role="presentation" onClick={toggleDrawer(false)}>
      <h3>Pipeline Monitor</h3>
      <List className="list">
        {links.slice(0, 5).map((text, index) => (
          <ListItem className="listitem" key={text} disablePadding>
            <Link style={{display: 'flex', textDecoration: 'none', width: '100%', alignItems: 'center', color: 'white', gap:'8px'}} to={text.path}>
              <div style={{backgroundColor: 'white', borderRadius: '50%'}}>
                <img src={text.icon} alt="icon"/>
              </div>
              <ListItemText primary={text.name} />
            </Link>

          </ListItem>
        ))}
        {links.slice(5, 6).map((text, index) => (
          <ListItem className="listitem" key={text} disablePadding>
            <Link style={{display: 'flex', textDecoration: 'none', width: '100%', alignItems: 'center', color: 'white', gap:'8px'}} onClick={logout}>
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
                  links.slice(0, 5).map((link, index)=> (
                    <Link key={link} to={link.path} className="link" style={{textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <div>
                        <img src={link.icon} alt="icon"/>
                      </div>
                      <li>{link.name}</li>
                    </Link>
                  ))                
                }
                {
                  links.slice(5, 6).map((link, index)=> (
                    <Link key={link} onClick={logout} className="link" style={{textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px'}}>
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
                      <th>Flow Rate (L/min)</th>
                      <th>Pressure</th>
                      <th>Fluid Level</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>                 
                  {sensorData.slice(0, 2).map((sensor, index) => (
                    <tr key={index}>
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
                      <p className="text-black" style={{fontSize: '25px', display: 'flex', alignItems: 'end', fontWeight: '500'}}>{sensorData.slice(3, 4).map((sensor, index)=>(<p key={index} style={{margin : 0}}>{sensor.lastValue}</p>))}
                        <span style={{fontSize: '11px', fontWeight: '500'}}>L/min</span>
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
            <div className="chart" style={{ overflow: 'hidden' }}>
              <h3 style={{ marginTop: '0' }}>Daily Changes / Fluctuation per time</h3>
              {chartData ? (

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="FlowRateDifference" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
              ):(<p>Loading Chart...</p>)}
            </div>

            <div>
              <h3 style={{marginTop: '0'}}>Logs</h3>
              <div style={{overflow: 'scroll'}}>
                <table className='custom-table'>
                  <thead>
                    <tr>
                      <th>Date/ Time</th>
                      <th>Flow Rate Difference</th>
                      <th>Pressure</th>
                      <th>Fluid Level</th>
                      <th>Location</th>
                      <th>Safety Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  {sensorData.slice(3, 4).map((sensor, index)=>(
                    <tr key={index}>
                      <th>
                        {sensorData.slice(2, 3).map((sensor, index) => {
                          // Extract the timestamp and manipulate it
                          let timestamp = sensor.updatedAt;
                          let firstPart = timestamp.slice(0, 10); // First nine characters
                          let secondPart = timestamp.slice(11, 19); // 10th to 18th characters

                          return (
                            <p key={index} style={{ margin: 0 }}>
                              {firstPart} {secondPart}
                            </p>
                          );
                        })}
                      </th>
                      <th>{sensor.lastValue}</th>
                      <th>312psi</th>
                      <th>44 L</th>
                      <th>74Km</th>
                      <th>
                        {sensorData.slice(2, 3).map((sensor, index) => {
                          // Determine the color based on sensor.lastValue
                          let color;
                          if (sensor.lastValue === 'SAFE') {
                            color = 'green';
                          } else if (sensor.lastValue === 'CAUTION') {
                            color = 'yellow';
                          } else if (sensor.lastValue === 'ALERT') {
                            color = 'red';
                          }

                          return (
                            <p key={index} style={{ margin: 0, color: color }}>
                              {sensor.lastValue}
                            </p>
                          );
                        })}
                      </th>
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