import { Outlet } from 'react-router-dom';


import NavBar from './components/NavBar/NavBar';
import NavMobile from './components/NavMobile/NavMobile';
import Footer from './components/Footer/Footer';

import './DefaultPage.css';

const DefaultPage = () => {
  return (
    <div className='default_page'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default DefaultPage;

