import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import './Footer.css'
function Footer() {
  return (
    <>
      <div id="footerContainer" className='text-white flex justify-between bg-[#5e54764f]'>
        <div>
          <h1 id='design'>Designed and Developed by Aman Singh</h1>
        </div>
        <div id='copyright'>
          <h1>Copyright 	&copy; 2025 AS</h1>
        </div>
        <div className='flex cursor-pointer'>
          <Link to='https://github.com/Aman218'>
            <div className='icon'>
              <GitHubIcon />
            </div>
          </Link>
          <Link to='https://www.linkedin.com/in/aman-singh-43553a254/'>
            <div className='icon'>
              <LinkedInIcon />
            </div>
          </Link>
          <Link to='mailto:amansingh021g@gmail.com'>
            <div className='icon'>
              <EmailIcon />
            </div>
          </Link>
          <Link to='https://www.instagram.com/accounts/login/?hl=en'>
            <div className='icon'>
              <InstagramIcon />
            </div></Link>
        </div>
      </div>
    </>
  )
}
export default Footer;