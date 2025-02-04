import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import './Contact.css'
function Contact(){
    return(
        <>
          <div id="contact-container" className='text-white'>
              <h1 className='text-[2.5rem] font-[600] text-center'>FIND ME ON</h1>
              <h1 className='text-center text-[1rem]'>Feel <span className='font-bold text-[#ea1d6b]'>free</span> to connect with me</h1>
              <div id='social-media' className='flex justify-center'>
                <Link to='https://github.com/Aman218'>
                <div id='social-icon1'>
                     <GitHubIcon style={{color:"#000000"}}/>
                  </div>
                </Link>
                <Link to='https://www.instagram.com/accounts/login/?hl=en'>
                <div id='social-icon2'>
                    <InstagramIcon style={{color:"#000000"}} />
                  </div>
                </Link>
                 
                 
                 <Link to='https://www.linkedin.com/in/aman-singh-43553a254'>
                 <div id='social-icon3'>
                    <LinkedInIcon style={{color:"#000000"}} />
                  </div>
                 </Link>
                 <Link to='mailto:amansingh021g@gmail.com'>
                 <div id='social-icon4'>
                     <EmailIcon style={{color:"#000000"}} />
                  </div>
                 </Link>
                 
              </div>
          </div>
        </>
    )
}
export default Contact;