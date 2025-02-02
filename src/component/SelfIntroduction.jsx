import './SelfIntroduction.css';
import AvatarImg from '../assets/male-avatar-boy-face-man-user-7-svgrepo-com.png';
import Aman from '../assets/myImg.jpg'
function SelfIntroduction() {
    return (
        <>

            <div id="introContainer" className="text-white flex w-[90%]">
                <div id="left-intro">
                    <h1 id='intro' className='text-[2rem] text-center font-[500]'>LET ME <span className='text-[#d0135c] font-bold'>INTRODUCE</span> MYSELF</h1>
                    <h1 className='common_margin'>Hi, I'm Aman, a budding software developer passionate about web development.</h1>
                    <h1 className='common_margin'> I have a solid foundation in programming languages like <span className='text-[#d0135c] font-bold italic'>C++, JavaScript, and React.js</span> and I enjoy building modern web technologies and products.</h1>
                    <h1 className='common_margin'>I enjoy creating modern web technologies and products, constantly learning and exploring new ways to enhance my skills in the ever-evolving world of software development.</h1>
                </div>
                <div id="right-intro">
                    <img src={Aman} alt="" />

                </div>
                
            </div>
           
        </>
    )
}
export default SelfIntroduction;