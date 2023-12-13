import { useState } from 'react';

import { Link, useLocation, useParams } from 'react-router-dom';

import { TiThMenuOutline } from "react-icons/ti";

import { FaWindowClose } from "react-icons/fa";

import DropDownItem from '../DropDownItem/DropDownItem';

import Title from '/img/novo-logo2.png';

import Loupe from '/img/loupe.png';

import UserAvatar from '/img/user-avatar.png';

import styles from './NavBar.module.css';

const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);

  const path = useLocation();

  const { id } = useParams();

  const showResponsiveNav = () => {
    setIsNavVisible(!isNavVisible);
  }

  const showUserMenu = () => {
    setIsUserMenuVisible(!isUserMenuVisible);
  }

  return (
    (
      (path.pathname == '/'
        || path.pathname == '/signin'
        || path.pathname == '/signup'
      )
      &&
      < nav className={styles.container_nav} >
        <div className={styles.title_container}>
          <Link to={'/'}>
            <img src={Title} alt="imagem escrito home play, a qual se refere ao logo da aplicação" />
          </Link>
        </div>
      </nav >
    )
    ||
    (
      (path.pathname == '/home'
        || path.pathname == `/movie/${id}`
        || path.pathname == '/all-genres'
      )
      &&
      <header className={styles.container}>
        <div className={styles.title_container}>
          <Link to={'/home'}>
            <img src={Title} alt="imagem escrito home play, a qual se refere ao logo da aplicação" />
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
                <Link
                  to={'/all-genres'}
                >
                  Todos os Gêneros
                </Link>
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
                  <DropDownItem content={'Perfil'} />
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