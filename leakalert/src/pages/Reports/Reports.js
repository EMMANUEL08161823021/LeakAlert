import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../images/logo.svg";
import Home from "../../images/home.svg";
import Table from "../../images/tables.svg";
import Report from "../../images/logs.svg";
import Profile from "../../images/profile.svg";
import Rtl from "../../images/rtl.svg";
import "./Reports.css";
import MenuIcon from '@mui/icons-material/Menu';  // Importing the hamburger icon (Menu)
import CloseIcon from '@mui/icons-material/Close'; 
import { BarChart, Bar, Cell, LabelList,  } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector, } from 'recharts';
import { ScatterChart, Scatter, } from 'recharts';
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
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BarChartIcon from '@mui/icons-material/BarChart';

const Reports = () => {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const scatteredChartData = {
      "daily" : [
        { x: 400, y: 200, z: 200 },
        { x: 120, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 },
        { x: 240, y: 200, z: 280 },
        { x: 150, y: 400, z: 900 },
        { x: 140, y: 280, z: 200 },
      ],
      "monthly" : [
        { x: 100, y: 200, z: 200 },
        { x: 180, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 },
        { x: 140, y: 450, z: 280 },
        { x: 150, y: 400, z: 500 },
        { x: 110, y: 180, z: 200 },
      ],
      "yearly" : [
        { x: 100, y: 200, z: 200 },
        { x: 120, y: 100, z: 260 },
        { x: 270, y: 300, z: 400 },
        { x: 140, y: 250, z: 280 },
        { x: 150, y: 300, z: 500 },
        { x: 110, y: 280, z: 200 },
      ],
    }
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const pieChartData = {
      "daily" : [
        { name: 'Group A', value: 700 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 500 },
        { name: 'Group D', value: 200 },
      ],
      "monthly" : [
        { name: 'Group A', value: 40 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 200 },
        { name: 'Group D', value: 200 },
      ],
      "yearly" : [
        { name: 'Group A', value: 500 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 200 },
        { name: 'Group D', value: 600 },
      ],
    }

    const links = [
        {
          name: 'Dashboard',
          path: '/dashboard',
          icon: Home
        },
        {
          name: 'Tables and Graph',
          path: '/tables',
          icon: <BarChartIcon/>
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
          path: '/profile',
          icon: Profile
        },
    ]


    const DrawerList = (
      <Box sx={{ width: 200 }} style={{backgroundColor: '#0052CC', height: '100%', color: 'white', padding: '0 20px'}} role="presentation" onClick={toggleDrawer(false)}>
        <h3>Pipeline Monitor</h3>
        <List className="list">
          {links.map((text, index) => (
            <ListItem className="listitem" key={text} disablePadding>
              <Link style={{display: 'flex', textDecoration: 'none', width:'100%', alignItems: 'center', color: 'white', gap:'4px'}} to={text.path}>
                <div>
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

    const barChartData = {
      "daily" : [
        {
          name: 'Page A',
          uv: 1000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 8,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 18,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ],
      "monthly" : [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 8,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 18,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ],
      "yearly" : [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 8,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 18,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ]
    }

    const lineChartData = {
      "daily" : [
        {
          name: 'Jan',
          FlowRateDifference: 1,
          PressureDifference: 6,
          FluidLevelDifference: 10,
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
          FluidLevelDifference: 5,
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
          FluidLevelDifference: 2,
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
          FluidLevelDifference: 8,
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

      ],
      "monthly" : [
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

      ],
      "yearly" : [
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

      ],
    }

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
    };


  return (
    <div className='dash'>
      <nav className='navbar'>
        <div className='nav-container'>
          <img src={Logo} height={60} alt="logo"/>
          <div className='navBlock'>
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
        <div className='report' >
          <div className="report-wrapper">
              <div className='graph'>
                <h3 style={{marginTop: '0'}}>Report Logs</h3>
                <div className='tabs' style={{}}>
                  <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value} s>
                      <Box sx={{}}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                          <Tab className='tab' label="Daily" value="1" />
                          <Tab className='tab' label="Monthly" value="2" />
                          <Tab className='tab' label="Yearly" value="3" />
                        </TabList>
                      </Box>
                      <TabPanel style={{overflow: 'hidden', marginTop: '15px', padding: '0'}} value="1">
                        <div className='grid'>
                          <div className="chart">
                            <h3 style={{marginTop: '0'}}>Flow Rate Trend</h3>
                            <ResponsiveContainer width="100%" height={350}>
                              <LineChart
                                className="chart-wrapper"
                                style={{marginLeft: '-25px'}}
                                data={lineChartData.daily}
                              >
                                <CartesianGrid strokeDasharray="1 10"/>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend style={{marginLeft: '0'}} />
                                <Line type="monotone" dataKey="PressureDifference" stroke="#8884d8"  />
                                <Line type="monotone" dataKey="FlowRateDifference" stroke="#82ca9d" />
                                <Line type="monotone" dataKey="FluidLevelDifference" stroke="#333" />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                          <div className="chart">
                            <h3 style={{marginTop: '0'}}>Leak Occurence Frequency</h3>
                            <ResponsiveContainer width="100%" height={350}>
                              <PieChart>
                                  <Pie
                                      data={pieChartData.daily}
                                      cx="50%"
                                      cy="50%"
                                      labelLine={false}
                                      label={renderCustomizedLabel}
                                      outerRadius={120}
                                      fill="#8884d8"
                                      dataKey="value"
                                  >
                                    {links.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                  </Pie>
                                  <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
                                    <div style={{height: '10px', width: '10px', borderRadius: '50%', backgroundColor:'',}}>Corrosion</div>
                                    <div style={{height: '10px', width: '10px', borderRadius: '50%', backgroundColor:'',}}>Poor installation</div>
                                    <div style={{height: '10px', width: '10px', borderRadius: '50%', backgroundColor:'',}}>Vandalism</div>
                                    <div style={{height: '10px', width: '10px', borderRadius: '50%', backgroundColor:'',}}>Leakages</div>
                                  </div>
                              </PieChart>
                            </ResponsiveContainer>
                              
                          </div>

                          <div className="chart">
                              <h3 style={{marginTop: '0'}}>Average Response Time</h3>
                              <ResponsiveContainer width="100%" height={350}>
                                  <BarChart
                                  data={barChartData.daily}
                                  margin={{
                                      top: 0,
                                      right: 0,
                                      left: 0,
                                      bottom: 0,
                                  }}
                                  >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="name" />
                                  <YAxis />
                                  <Tooltip />
                                  <Legend />
                                  <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
                                      {/* <LabelList dataKey="name" content={renderCustomizedLabel} /> */}
                                  </Bar>
                                  <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
                                  <Bar dataKey="uv" fill="#000" minPointSize={10} />
                                  </BarChart>
                              </ResponsiveContainer>
                          </div>
                          <div className="chart">
                              <h3 style={{marginTop: '0'}}>High Risk Areas</h3>
                              <ResponsiveContainer width="100%" margin="auto" height={350}>
                                  <ScatterChart >
                                      <CartesianGrid />
                                      <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                                      <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                                      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                      <Scatter name="A school" data={scatteredChartData.daily} fill="#8884d8">
                                          {links.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={colors[index % COLORS.length]} />
                                          ))}
                                      </Scatter>                                
                                  </ScatterChart>
                              </ResponsiveContainer>

                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel style={{marginTop: '15px', padding: '0'}} value="2">
                        <div className='grid'>
                          <div className="chart">
                            <h3 style={{marginTop: '0'}}>Flow Rate Trend</h3>
                            <ResponsiveContainer width="100%" height={350}>
                                <LineChart
                                    className="chart-wrapper"
                                    data={lineChartData.monthly}
                                    style={{marginLeft: '-25px'}}
                                >
                                    <CartesianGrid strokeDasharray="1 10" />
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
                          <div className="chart">
                              <h3 style={{marginTop: '0'}}>Leak Occurence Frequency</h3>
                              <ResponsiveContainer width="100%" height={350}>
                                  <PieChart>
                                      <Pie
                                          data={pieChartData.monthly}
                                          cx="50%"
                                          cy="50%"
                                          labelLine={false}
                                          label={renderCustomizedLabel}
                                          outerRadius={120}
                                          fill="#8884d8"
                                          dataKey="value"
                                      >
                                          {links.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                          ))}
                                      </Pie>
                                  </PieChart>
                              </ResponsiveContainer>
                          </div>

                          <div className="chart">
                              <h3 style={{marginTop: '0'}}>Average Response Time</h3>
                              <ResponsiveContainer width="100%" height={350}>
                                  <BarChart
                                  data={barChartData.monthly}
                                  margin={{
                                      top: 0,
                                      right: 0,
                                      left: 0,
                                      bottom: 0,
                                  }}
                                  >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="name" />
                                  <YAxis />
                                  <Tooltip />
                                  <Legend />
                                  <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
                                      {/* <LabelList dataKey="name" content={renderCustomizedLabel} /> */}
                                  </Bar>
                                  <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
                                  <Bar dataKey="uv" fill="#000" minPointSize={10} />
                                  </BarChart>
                              </ResponsiveContainer>
                          </div>
                          <div className="chart">
                              <h3 style={{marginTop: '0'}}>High Risk Areas</h3>
                              <ResponsiveContainer width="100%" margin="auto" height={350}>
                                  <ScatterChart >
                                      <CartesianGrid />
                                      <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                                      <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                                      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                      <Scatter name="A school" data={scatteredChartData.monthly} fill="#8884d8">
                                          {links.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={colors[index % COLORS.length]} />
                                          ))}
                                      </Scatter>
                                  </ScatterChart>
                              </ResponsiveContainer>

                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel style={{marginTop: '15px', padding: '0'}} value="3">
                        <div className='grid'>
                          <div className="chart">
                            <h3 style={{marginTop: '0'}}>Flow Rate Trend</h3>
                            <ResponsiveContainer width="100%" height={350}>
                                <LineChart
                                    className="chart-wrapper"
                                    data={lineChartData.yearly}
                                    style={{marginLeft: '-25px'}}
                                >
                                    <CartesianGrid strokeDasharray="1 10" />
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
                          <div className="chart">
                              <h3 style={{marginTop: '0'}}>Leak Occurence Frequency</h3>
                              <ResponsiveContainer width="100%" height={350}>
                                  <PieChart>
                                      <Pie
                                          data={pieChartData.yearly}
                                          cx="50%"
                                          cy="50%"
                                          labelLine={false}
                                          label={renderCustomizedLabel}
                                          outerRadius={120}
                                          fill="#8884d8"
                                          dataKey="value"
                                      >
                                          {links.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                          ))}
                                      </Pie>
                                  </PieChart>
                              </ResponsiveContainer>
                          </div>

                          <div className="chart">
                              <h3 style={{marginTop: '0'}}>Average Response Time</h3>
                              <ResponsiveContainer width="100%" height={350}>
                                  <BarChart
                                  data={barChartData.yearly}
                                  margin={{
                                      top: 0,
                                      right: 0,
                                      left: 0,
                                      bottom: 0,
                                  }}
                                  >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="name" />
                                  <YAxis />
                                  <Tooltip />
                                  <Legend />
                                  <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
                                      {/* <LabelList dataKey="name" content={renderCustomizedLabel} /> */}
                                  </Bar>
                                  <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
                                  <Bar dataKey="uv" fill="#000" minPointSize={10} />
                                  </BarChart>
                              </ResponsiveContainer>
                          </div>
                          <div className="chart">
                              <h3 style={{marginTop: '0'}}>High Risk Areas</h3>
                              <ResponsiveContainer width="100%" margin="auto" height={350}>
                                  <ScatterChart >
                                      <CartesianGrid />
                                      <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                                      <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                                      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                      <Scatter name="A school" data={scatteredChartData.yearly} fill="#8884d8">
                                          {links.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={colors[index % COLORS.length]} />
                                          ))}
                                      </Scatter>
                                  </ScatterChart>
                              </ResponsiveContainer>

                          </div>
                        </div>
                      </TabPanel>

                    </TabContext>
                  </Box>
                </div>                
              </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Reports