import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
function Error(){
    return (
        <>
           <div className='flex flex-col justify-center items-center h-[90vh] text-white'>
                <h1 className='text-[4rem]'>Error 404, Page Not Found</h1>
                <Link to='/'><div className='flex items-center'>
                  <span className=' font-bold text-3xl text-[#eb15e8]'>Go back</span><HomeIcon className='cursor-pointer' style={{ fontSize: 80 }} />
                </div></Link>
           </div>
        </>
    )
}
export default Error;