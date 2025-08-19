import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TiThMenuOutline } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

import DropDownItem from '../DropDownItem/DropDownItem';
import UserAvatar from '/img/user-avatar.png';
import styles from './NavBar.module.css';

const NavBar = () => {
  const navigate = useNavigate();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const showResponsiveNav = () => {
    setIsNavVisible(!isNavVisible);
  }
  const showUserMenu = () => {
    setIsUserMenuVisible(!isUserMenuVisible);
  }
  const isLoggedIn = () => {
    navigate('/all-genres');
  }
  return (
    (
      <header className={styles.container}>
        <div className={styles.title_container}>
          <Link to={'/'}>
            {/* <img src={Logo} alt="imagem escrito home play, a qual se refere ao logo da aplicação" /> */}
            <h1>Home Play</h1>
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
                placeholder='O que procura?'
                alt="campo de busca do que assistir"
              />
              <button
                type="submit"
                alt="icone de lupa para realizar a busca"
              >
                <IoSearch />
              </button>
            </form>
            <ul className={styles.options}>
              <li>
                <button
                  type="button"
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