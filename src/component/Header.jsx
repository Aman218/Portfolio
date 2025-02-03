import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Body from './Body';
import SelfIntroduction from './SelfIntroduction';
import Contact from './Contact';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import Footer from './Footer';
import Spinner from '../assets/Spin@1x-1.0s-200px-200px.svg'
function Header() {
  const [flag, setFlag] = useState(true);
  const [spinner, setSpin] = useState(true);
  useEffect(() => {
   setTimeout(() => {
    const container = document.getElementById('container');
    
    if (!container) return; // Make sure the element exists before proceeding
  
    const handleScroll = () => {
      if (window.scrollY > 30) {
        container.classList.add('scrolled');
      } else {
        container.classList.remove('scrolled');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
   }, 800);
  
  
  }, []);
  

  function handleClick() {
    setFlag(!flag);
  }
  useEffect(() => {
    setTimeout(() => {
      setSpin(false)
    }, 500);
  },[])
  return (
    <>
      {spinner ?<div className='h-[100vh] w-[100vw] flex  justify-center items-center'>
        <img src={Spinner} alt="" className='rounded-full '/>
      </div>  :
        <>
          <div id='container' className="text-white">
            <div id='right-sec' className="w-[20%] text-center font-bold text-[1.8rem]">
              <span className='cursor-pointer font-bold text-[#ea1d6b]  '>AS</span>
            </div>
            <div id='left-container' className='w-[50%]'>
              <div id='left-sec' className=" w-[100%] flex items-center justify-evenly text-[1.2rem]">
                <Link to='/'> <div className='home-btn flex gap-1 font-[500] items-center'>
                  <HomeIcon style={{ fontSize: 15 }} />
                  <span className=''>Home</span>
                </div></Link>
                <Link to='/About'><div id='about-btn' className=' home-btn flex gap-1 font-[500] items-center'>
                  <InfoIcon style={{ fontSize: 15 }} />
                  <span>About</span>
                </div></Link>
               <Link to='/Project'>
               <div className=' home-btn flex gap-1 font-[500] items-center'>
                  <ImportantDevicesIcon style={{ fontSize: 15 }} />
                  <span>Projects</span>
                </div>
               </Link>
                <div className=' home-btn flex gap-1 font-[500] items-center'>
                  <NewspaperIcon style={{ fontSize: 15 }} />
                  <span>Resume</span>
                </div>

              </div>
              <div id='menu-icon' className='relative text-end'>
                {flag ? <MenuIcon style={{ fontSize: 30 }} onClick={handleClick} /> : <CloseIcon onClick={handleClick} style={{ fontSize: 30 }} />}
                {!flag &&
                  <div id='nav-menu-card' className='absolute flex flex-col items-center justify-center z-100 right-0 w-[90vw] h-[250px] bg-[#0C0D1E] rounded-2xl'>
                    <Link to='/'>
                      <div id='nav1' onClick={handleClick} className='flex items-center gap-1 font-[500] '>
                        <HomeIcon style={{ fontSize: 15 }} />
                        <span className=''>Home</span>
                      </div>
                    </Link>
                    <Link to='/About'>
                      <div id='nav2' onClick={handleClick} className='flex items-center gap-1 font-[500] '>
                        <InfoIcon style={{ fontSize: 15 }} />
                        <span>About</span>
                      </div>
                    </Link>
                    <Link to='/Project'>
                    <div id='nav3' onClick={handleClick} className='flex items-center gap-1 font-[500] '>
                      <ImportantDevicesIcon style={{ fontSize: 15 }} />
                      <span>Projects</span>
                    </div>
                    </Link>
                   <Link to='/Resume'>
                   <div id='nav4' onClick={handleClick} className='flex items-center gap-1 font-[500] '>
                      <NewspaperIcon style={{ fontSize: 15 }} />
                      <span>Resume</span>
                    </div>
                   </Link>
                  </div>
                }
              </div>
            </div>

          </div>
          <Outlet />

        </>
      }
    </>


  )
}
export default Header;