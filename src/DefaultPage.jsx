import { Outlet } from 'react-router-dom';

import {UserDataContextProvider} from './contexts/userDataContext';

import { UserFavoritesContextProvider } from './contexts/useFavorites';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import './DefaultPage.css';

const DefaultPage = () => {
  return (
    <div className='default_page'>
      <NavBar />
      <UserDataContextProvider>
        <UserFavoritesContextProvider>
          <Outlet />
        </UserFavoritesContextProvider>
      </UserDataContextProvider>
      <Footer />
    </div>
  )
}

export default DefaultPage;

