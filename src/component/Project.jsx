import './Project.css';
import img1 from '../assets/Screenshot (324).png';
import img2 from '../assets/Screenshot (261).png';
import img3 from '../assets/Screenshot (98).png';
import img4 from '../assets/Screenshot (95).png';
import img5 from '../assets/Screenshot (370).png';
import img6 from '../assets/Screenshot (371).png';
import GitHubIcon from '@mui/icons-material/GitHub';
function Project() {
    return (
        <>
            <div id="project-container">
                <h1 className='text-white text-[2rem] text-center'>My Recent <span className='text-[#ea1d6b] font-bold'>Works</span></h1>
                <h1 className='text-white font-[500] text-[1rem] text-center'>Here are few projects i have worked on recently</h1>
                <div className="project-grid grid w-[95%]">

                    <div className='project-1  rounded-[7px]'>
                        <div className="img-container-grid">
                            <svg id='img1-cont-g' xmlns="http://www.w3.org/2000/svg" width="833.60436" height="638.22869" viewBox="0 0 833.60436 638.22869" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" artist="Katerina Limpitsouni" source="https://undraw.co/"><path d="m813.90439,480.39801H11.12674c-6.13535,0-11.12674-4.99167-11.12674-11.12675V11.12674C0,4.99168,4.99139,0,11.12674,0h802.77765c6.13537,0,11.127,4.99168,11.127,11.12674v458.14456c0,6.13508-4.99171,11.12675-11.127,11.12675v-.00004Z" fill="#2f2e41" stroke-width="0" /><rect x="20.30667" y="19.72662" width="785.57844" height="443.26583" fill="#fff" stroke-width="0" />
                                <image x="20.30667" y="19.72662" width="785.844" height="443.26583" href={img1} />
                                <path d="m440.55989,476.33668c-2.2231,13.47525-13.9493,23.78782-28.04423,23.78782s-25.82109-10.31257-28.04419-23.78782h-71.74861v155.49117h199.58563v-155.49113h-71.74863l.00004-.00004Z" fill="#b6b3c5" stroke-width="0"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className='text-white text-center head-proj  font-bold text-[1.5rem]'>YouTube Project</h1>
                            <p className='text-white text-[0.8rem] text-justify w-[98%]'>A comprehensive YouTube clone that offers users functionalities such as secure authentication, video display, and a full-featured commenting system. The application boasts a responsive user interface, ensuring optimal viewing across various devices. It employs dynamic routing for seamless navigation and integrates a robust backend to manage data efficiently.</p>
                        </div>
                        <div  className='flex justify-center items-center'>
                            <div className='flex github-link  items-center'>
                            <GitHubIcon/> 
                            <span className='github-head'>Github</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-2  rounded-[7px]">
                        <div className="img-container-grid">
                            <svg id='img1-cont-g' xmlns="http://www.w3.org/2000/svg" width="833.60436" height="638.22869" viewBox="0 0 833.60436 638.22869" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" artist="Katerina Limpitsouni" source="https://undraw.co/"><path d="m813.90439,480.39801H11.12674c-6.13535,0-11.12674-4.99167-11.12674-11.12675V11.12674C0,4.99168,4.99139,0,11.12674,0h802.77765c6.13537,0,11.127,4.99168,11.127,11.12674v458.14456c0,6.13508-4.99171,11.12675-11.127,11.12675v-.00004Z" fill="#2f2e41" stroke-width="0" /><rect x="20.30667" y="19.72662" width="785.57844" height="443.26583" fill="#fff" stroke-width="0" />
                                <image x="20.30667" y="19.72662" width="785.844" height="443.26583" href={img2} />
                                <path d="m440.55989,476.33668c-2.2231,13.47525-13.9493,23.78782-28.04423,23.78782s-25.82109-10.31257-28.04419-23.78782h-71.74861v155.49117h199.58563v-155.49113h-71.74863l.00004-.00004Z" fill="#b6b3c5" stroke-width="0"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className='text-white head-proj  text-center font-bold text-[1.5rem]'>Shoppy Globe</h1>
                            <p className='text-white  text-[0.8rem] text-justify w-[98%]'>A basic e-commerce application built using React.js. It demonstrates various React features, including component-based architecture, state management with Redux, React Router for navigation, and dynamic data fetching. The project is designed to showcase a functional, responsive, and user-friendly e-commerce interface.</p>
                        </div>
                        <div  className='flex justify-center items-center'>
                            <div className='flex gap-[0.4rem] github-link  items-center'>
                            <GitHubIcon/> 
                            <span className='github-head'>Github</span>
                            </div>
                        </div>
                    </div>
                    <div className="project-3  rounded-[7px]">
                        <div className="img-container-grid">
                            <svg id='img1-cont-g' xmlns="http://www.w3.org/2000/svg" width="833.60436" height="638.22869" viewBox="0 0 833.60436 638.22869" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" artist="Katerina Limpitsouni" source="https://undraw.co/"><path d="m813.90439,480.39801H11.12674c-6.13535,0-11.12674-4.99167-11.12674-11.12675V11.12674C0,4.99168,4.99139,0,11.12674,0h802.77765c6.13537,0,11.127,4.99168,11.127,11.12674v458.14456c0,6.13508-4.99171,11.12675-11.127,11.12675v-.00004Z" fill="#2f2e41" stroke-width="0" /><rect x="20.30667" y="19.72662" width="785.57844" height="443.26583" fill="#fff" stroke-width="0" />
                                <image x="20.30667" y="19.72662" width="785.844" height="443.26583" href={img3} />
                                <path d="m440.55989,476.33668c-2.2231,13.47525-13.9493,23.78782-28.04423,23.78782s-25.82109-10.31257-28.04419-23.78782h-71.74861v155.49117h199.58563v-155.49113h-71.74863l.00004-.00004Z" fill="#b6b3c5" stroke-width="0"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className='text-white head-proj  text-center font-bold text-[1.5rem]'>Weather App</h1>
                            <p className='text-white text-[0.8rem] text-justify w-[98%]'>
                            A dynamic weather forecasting application that fetches real-time data from the OpenWeatherMap API. Users can retrieve current temperature, humidity, and wind speed for any city, as well as a 5-day weather forecast.
                            </p>
                        </div>
                        <div  className='flex justify-center items-center'>
                            <div className='flex gap-[0.4rem] github-link  items-center'>
                            <GitHubIcon/> 
                            <span className='github-head'>Github</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-4  rounded-[7px]">
                        <div className="img-container-grid">
                            <svg id='img1-cont-g' xmlns="http://www.w3.org/2000/svg" width="833.60436" height="638.22869" viewBox="0 0 833.60436 638.22869" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" artist="Katerina Limpitsouni" source="https://undraw.co/"><path d="m813.90439,480.39801H11.12674c-6.13535,0-11.12674-4.99167-11.12674-11.12675V11.12674C0,4.99168,4.99139,0,11.12674,0h802.77765c6.13537,0,11.127,4.99168,11.127,11.12674v458.14456c0,6.13508-4.99171,11.12675-11.127,11.12675v-.00004Z" fill="#2f2e41" stroke-width="0" /><rect x="20.30667" y="19.72662" width="785.57844" height="443.26583" fill="#fff" stroke-width="0" />
                                <image x="20.30667" y="19.72662" width="785.844" height="443.26583" href={img4} />
                                <path d="m440.55989,476.33668c-2.2231,13.47525-13.9493,23.78782-28.04423,23.78782s-25.82109-10.31257-28.04419-23.78782h-71.74861v155.49117h199.58563v-155.49113h-71.74863l.00004-.00004Z" fill="#b6b3c5" stroke-width="0"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className='text-white head-proj  text-center font-bold text-[1.5rem]'>Registration App</h1>
                            <p className='text-white text-[0.8rem] text-justify w-[98%]'> A web-based application that enables users to manage student information efficiently. Users can add new student details, edit existing records, and delete entries as needed. The application utilizes the browser's localStorage to persist data, ensuring that student information remains available even after the browser is closed</p>
                        </div>
                        <div  className='flex justify-center items-center'>
                            <div className='flex gap-[0.4rem] github-link  items-center'>
                            <GitHubIcon/> 
                            <span className='github-head'>Github</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-5  rounded-[7px]">
                        <div className="img-container-grid">
                            <svg id='img1-cont-g' xmlns="http://www.w3.org/2000/svg" width="833.60436" height="638.22869" viewBox="0 0 833.60436 638.22869" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" artist="Katerina Limpitsouni" source="https://undraw.co/"><path d="m813.90439,480.39801H11.12674c-6.13535,0-11.12674-4.99167-11.12674-11.12675V11.12674C0,4.99168,4.99139,0,11.12674,0h802.77765c6.13537,0,11.127,4.99168,11.127,11.12674v458.14456c0,6.13508-4.99171,11.12675-11.127,11.12675v-.00004Z" fill="#2f2e41" stroke-width="0" /><rect x="20.30667" y="19.72662" width="785.57844" height="443.26583" fill="#fff" stroke-width="0" />
                                <image x="20.30667" y="19.72662" width="785.844" height="443.26583" href={img5} />
                                <path d="m440.55989,476.33668c-2.2231,13.47525-13.9493,23.78782-28.04423,23.78782s-25.82109-10.31257-28.04419-23.78782h-71.74861v155.49117h199.58563v-155.49113h-71.74863l.00004-.00004Z" fill="#b6b3c5" stroke-width="0"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className='text-white head-proj  text-center font-bold text-[1.5rem]'>Todo App</h1>
                            <p className='text-white text-[0.8rem] text-justify w-[98%]'> A basic To-Do list web application built using React and Vite. The application allows users to add, edit, and delete tasks, helping them manage their daily activities efficiently.The application is designed to be user-friendly, with a clean interface that facilitates easy task management.</p>
                        </div>
                        <div  className='flex justify-center items-center'>
                            <div className='flex gap-[0.4rem] github-link  items-center'>
                            <GitHubIcon/> 
                            <span className='github-head'>Github</span>
                            </div>
                        </div>
                    </div>
                    <div className="project-6  rounded-[7px]">
                        <div className="img-container-grid">
                            <svg id='img1-cont-g' xmlns="http://www.w3.org/2000/svg" width="833.60436" height="638.22869" viewBox="0 0 833.60436 638.22869" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" artist="Katerina Limpitsouni" source="https://undraw.co/"><path d="m813.90439,480.39801H11.12674c-6.13535,0-11.12674-4.99167-11.12674-11.12675V11.12674C0,4.99168,4.99139,0,11.12674,0h802.77765c6.13537,0,11.127,4.99168,11.127,11.12674v458.14456c0,6.13508-4.99171,11.12675-11.127,11.12675v-.00004Z" fill="#2f2e41" stroke-width="0" /><rect x="20.30667" y="19.72662" width="785.57844" height="443.26583" fill="#fff" stroke-width="0" />
                                <image x="20.30667" y="19.72662" width="785.844" height="443.26583" href={img6} />
                                <path d="m440.55989,476.33668c-2.2231,13.47525-13.9493,23.78782-28.04423,23.78782s-25.82109-10.31257-28.04419-23.78782h-71.74861v155.49117h199.58563v-155.49113h-71.74863l.00004-.00004Z" fill="#b6b3c5" stroke-width="0"></path>
                            </svg>
                        </div>
                        <div>
                            <h1  className='text-white head-proj text-center font-bold text-[1.5rem]'>Restaurant App</h1>
                            <p className='text-white text-[0.8rem] text-justify w-[98%]'>
                            A web application designed to enhance the user experience in discovering and interacting with restaurants. Leveraging real-time data from Swiggy's API, the app provides users with a seamless interface to search for restaurants, explore top-rated options, and apply various filters to refine their search results.
                            </p>
                        </div>
                        <div  className='flex justify-center items-center'>
                            <div className='flex gap-[0.4rem] github-link  items-center'>
                            <GitHubIcon/> 
                            <span className='github-head'>Github</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default Project;