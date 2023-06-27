import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'><span className='logo'>NTech Solutions</span></div>
        <hr/>
        <div className='center'>
            <ul>
                <p className="title">MAIN</p>
            <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <li>
                <PersonOutlineOutlinedIcon className='icon'/>
                <span>Users</span>
            </li>
            <li>
                <InventoryOutlinedIcon className='icon'/>
                <span>Products</span>
            </li>
            <li>
                <ViewListOutlinedIcon className='icon'/>
                <span>Orders</span>
            </li>
            <li>
                <LocalShippingOutlinedIcon className='icon'/>
                <span>Delivary</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                <BarChartOutlinedIcon className='icon'/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsNoneOutlinedIcon className='icon'/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICES</p>
            <li>
                <HealingOutlinedIcon className='icon'/>
                <span>System Health</span>
            </li>
            <li>
                <SettingsOutlinedIcon className='icon'/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsOutlinedIcon className='icon'/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountCircleOutlinedIcon className='icon'/>
                <span>Profile</span>
            </li>
            <li>
                <LogoutOutlinedIcon className='icon'/>
                <span>Logout</span>
            </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className="color-option"></div>
            <div className="color-option"></div>
        </div>
    </div>
  )
}

export default Sidebar