import { createBrowserRouter, Navigate } from 'react-router-dom';
import { config } from '.';
import {
  AboutMe,
  Contact,
  Education,
  Employment,
  Header,
  Portafoly,
  Skills,
} from '../components/organisms';
import { Page } from '../pages/Page';

export const router = createBrowserRouter([
  {
    path: `${config.ROUTES.INDEX}`,
    element: <Page />,
    children: [
      {
        index: true,
        element: <Header />,
      },
      {
        path: `${config.ROUTES.ABOUT_ME}`,
        element: <AboutMe />,
      },
      {
        path: `${config.ROUTES.CONTACT}`,
        element: <Contact />,
      },
      {
        path: `${config.ROUTES.EDUCATION}`,
        element: <Education />,
      },
      {
        path: `${config.ROUTES.EMPLOYEMENT}`,
        element: <Employment />,
      },
      {
        path: `${config.ROUTES.PORTAFOLY}`,
        element: <Portafoly />,
      },
      {
        path: `${config.ROUTES.SKILLS}`,
        element: <Skills />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
]);
