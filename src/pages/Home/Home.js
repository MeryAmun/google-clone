import React from 'react';
import { Avatar ,Button} from '@mui/material';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import './home.css';
import {Search} from '../../components';
import Tooltip from '@mui/material/Tooltip';
import { gmailUrl } from '../../utils';

const Home = () => {
  const user = null;

  
  return (
    <div className='home'>
      <div className="home__header">
<div className="home__headerRight">
<Link to='https://mail.google.com/'>Gmail</Link>
<Link to='https://www.google.cm/imghp?hl=en&tab=ri&ogbl'>Images</Link>
<Tooltip title="Google Apps" disableInteractive>
<AppsIcon />
</Tooltip>
{
  user ?( <Avatar src=''/>) : (<Button variant="contained"><Link to={gmailUrl}>Sign in</Link></Button>)
}
</div>
      </div>
      <Search/>
    </div>
  )
}

export default Home