import React from 'react';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import './home.css';
import { google } from '../../assets';
import {Search} from '../../components';

const Home = () => {
  return (
    <div className='home'>
      <div className="home__header">
{/* <div className="home__headerLeft">
  <Link to='/about'>About</Link>
  <Link to='/store'>Store</Link>

</div> */}
<div className="home__headerRight">
<Link to='/gmail'>Gmail</Link>
<Link to='/images'>Images</Link>
<AppsIcon/>
<Avatar src=''/>
</div>
      </div>
      <div className="home__body">
<img src={google} alt="" />
<div className="home__inputContainer">
 <Search/>
</div>
      </div>
    </div>
  )
}

export default Home