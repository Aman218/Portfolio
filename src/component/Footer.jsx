import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css'
function Footer(){
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
                  <div className='icon'>
                    <GitHubIcon/>
                  </div>
                  <div className='icon'>
                    <LinkedInIcon/>
                  </div>
                  <div className='icon'>
                    <EmailIcon/>
                  </div>
                  <div className='icon'>
                    <InstagramIcon/>
                  </div>
              </div>
          </div>
        </>
    )
}
export default Footer;