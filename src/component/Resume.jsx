import './Resume.css';
import resume from '../assets/Aman__Resume.pdf';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Footer from './Footer';
function Resume() {
    return (
        <>
            <div className="resumeContainer w-[85%]">
                <div className='text-white flex justify-center items-center h-[60vh]'>
                    <a href={resume} id='anchor-tag' target='_blank' className='border flex items-center bg-pink-400'> <FileDownloadIcon /> <span>Download Resume</span> </a>
                </div>
                
           


            </div>
            <div className='absolute w-[100%] bottom-0'>
            <Footer/>
            </div>
            

        </>
    )
}
export default Resume;