import { useState, useContext } from 'react';

import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import { UserDataContext } from '../../contexts/userDataContext';

import { TiThMenuOutline } from "react-icons/ti";

import { FaWindowClose } from "react-icons/fa";

import DropDownItem from '../DropDownItem/DropDownItem';

import ButtonLink from '../ButtonLink/ButtonLink';

import Logo from '/img/home-play (2).png';

import Loupe from '/img/loupe.png';

import UserAvatar from '/img/user-avatar.png';

import styles from './NavBar.module.css';

const NavBar = () => {

  const data = useContext(UserDataContext);
  
  const navigate = useNavigate();

  const [isNavVisible, setIsNavVisible] = useState(true);

  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);

  const path = useLocation();

  const { id } = useParams();

  const showResponsiveNav = () => {
    setIsNavVisible(!isNavVisible);
  }

  const showUserMenu = () => {
    setIsUserMenuVisible(!isUserMenuVisible);
  }

  const isLoggedIn =  () => {
    if (data.email && data.password) {
      navigate('/all-genres');
    } else{
      console.log('usuário não cadastrado');
    }
  }

  return (
    (
      (path.pathname == '/'
        || path.pathname == '/signin'
        || path.pathname == '/signup'
      )
      &&
      <header className={styles.container_welcome}>
        < nav className={styles.container_nav_welcome} >
          <div className={styles.title_container}>
            <Link to={'/'}>
              <img src={Logo} alt="imagem escrito home play, a qual se refere ao logo da aplicação" />
            </Link>
          </div>
          <div className={styles.btns}>
            <ButtonLink
              assinante={true}
              bdRadius={'5px'}
              url={'/signin'}
            >
              Sou Assinante
            </ButtonLink>
            <ButtonLink
              bdRadius={'5px'}
              url={'/signup'}
            >
              Assinar
            </ButtonLink>
          </div>
        </nav >
      </header>
    )
    ||
    (
      (path.pathname == '/home'
        || path.pathname == `/movie/${id}`
        || path.pathname == '/all-genres'
        || path.pathname == '/profile'
      )
      &&
      <header className={styles.container}>
        <div className={styles.title_container}>
          <Link to={'/home'}>
            <img src={Logo} alt="imagem escrito home play, a qual se refere ao logo da aplicação" />
          </Link>
        </div>
        <nav className={`
          ${styles.container_nav}
          ${isNavVisible ? styles.reponsive_nav : ''}
        `}>
          <div>
            <button type="button"
              className={styles.hamburguer}
              onClick={showResponsiveNav}
            >
              <FaWindowClose />
            </button>
          </div>
          <div className={styles.user_tools}>
            <form>
              <input type="search"
                name="search"
                id="search"
                placeholder='O que você quer assitir?'
              />
              <button type="submit">
                <img src={Loupe} alt="botão para realizar busca" />
              </button>
            </form>
            <ul className={styles.options}>
              <li>
                <button
                  typeof='button'
                  onClick={isLoggedIn}
                >
                  Todos os gêneros
                </button>
              </li>
            </ul>
            <div className={styles.user_menu}>
              <div>
                <img
                  src={UserAvatar} alt="ícone do avatar do perfil do usuário"
                  onClick={showUserMenu}
                />
              </div>
              <div
                className={`
              ${styles.dropdown_menu}
              ${isUserMenuVisible ? styles.active : styles.inactive}
              `}
              >
                <ul  >
                  <DropDownItem content={'Perfil'} to={'/profile'} />
                  <DropDownItem content={'Notificações'} />
                  <DropDownItem content={'Ajuda'} />
                  <DropDownItem content={'Sair'} />
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <button type="button"
          className={styles.hamburguer}
          onClick={showResponsiveNav}
        >
          <TiThMenuOutline />
        </button>
      </header>

    )
  )
}

export default NavBar