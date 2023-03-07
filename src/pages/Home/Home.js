import React, {useState} from 'react';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import './home.css';
import { google } from '../../assets';
import {Search} from '../../components';

const Home = () => {
  const [user, setUser] = useState(null);

  console.log(setUser);
  return (
    <div className='home'>
      <div className="home__header">
{/* <div className="home__headerLeft">
  <Link to='/about'>About</Link>
  <Link to='/store'>Store</Link>

</div> */}
<div className="home__headerRight">
<Link to='https://mail.google.com/'>Gmail</Link>
<Link to='https://www.google.cm/imghp?hl=en&tab=ri&ogbl'>Images</Link>
<AppsIcon/>
{
  user && <Avatar src=''/>
}
</div>
      </div>
      <div className="home__body">
<img src={google} alt="" />
{/* <h1 className='home__title'>Google</h1> */}
<div className="home__inputContainer">
 <Search/>
</div>
      </div>
    </div>
  )
}

export default Home