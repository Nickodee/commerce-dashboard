import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" className="search" placeholder='Search...'/>
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
        <div className="item">
          <LanguageOutlinedIcon className='icon'/>
          English
        </div>
        <div className="item">
          <NightlightOutlinedIcon className='icon'/>
        </div>
        <div className="item">
          <FullscreenExitOutlinedIcon className='icon'/>
        </div>
        <div className="item">
          <NotificationsNoneOutlinedIcon className='icon'/>
          <div className="counter">1</div>
        </div>
        <div className="item">
          <ChatBubbleOutlineOutlinedIcon className='icon'/>
          <div className="counter">2</div>
        </div>
        <div className="item">
          <ListOutlinedIcon className='icon'/>
        </div>
        <div className="item">
          <img src='' alt="" className='avatar' />
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar