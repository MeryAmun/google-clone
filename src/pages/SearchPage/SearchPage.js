import React from 'react';
import { Search } from '../../components';
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { google } from '../../assets';
import { Button } from '@mui/material';
import { gmailUrl } from '../../utils';
import Tooltip from '@mui/material/Tooltip';
import './searchPage.css';

const SearchPage = () => {

  return (
    <div className='searchPage'>
     <div className="searchPage__header">
   <div className="searchPage__headerLeft">
   <Tooltip title='Go to Google Home'>
 <Link to='/'>
 <img src={google} alt="" />
 </Link>
  </Tooltip>
   <Search hideButtons/>
   </div>
   <div className="searchPage__headerRight">
   <Tooltip title="Quick Settings" disableInteractive>
    <SettingsOutlinedIcon/>
    </Tooltip>
    <Tooltip title="Google Apps" disableInteractive>
    <AppsIcon/>
    </Tooltip>
    
    <Button variant="contained"><Link to={gmailUrl}>Sign in</Link></Button>
   </div>
     </div>
      
    </div>
  )
}

export default SearchPage