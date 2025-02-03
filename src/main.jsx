import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter,RouterProvider,} from 'react-router-dom';
import Error from './component/Error.jsx';
import Body from './component/Body.jsx';
import SelfIntroduction from './component/SelfIntroduction.jsx';
import Contact from './component/Contact.jsx';
import Footer from './component/Footer.jsx';
import About from './component/About.jsx';
import Project from './component/Project.jsx';
  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children: [
        {
          path: '/', 
          element: (
            <>
              <Body /> 
              <SelfIntroduction />
              <Contact />
              <Footer />
            </>
          ),
        },
        {
          path:'/About',
          element:<About/>
        },
        {
          path:'/Project',
          element:<Project/>

        }
      ],
    },
    {
      path:'*',
      element:<Error/>
    }

  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
