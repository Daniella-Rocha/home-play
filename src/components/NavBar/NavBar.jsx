import { Link, useLocation } from 'react-router-dom';

import styles from './NavBar.module.css';

import Title from '/img/home-play (2).png';

const NavBar = () => {

  const path = useLocation();

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
      path.pathname == '/home'
      &&
      <nav className={styles.container_nav}>
        <div className={styles.title_container}>
          <img src={Title} alt="imagem escrito home play, a qual se refere ao logo da aplicação" />
        </div>
        <div className={styles.nav_tools}>
          <div className={styles.search}>
            <form>
              <input type="search" name="" id="" />
            </form>
          </div>
          <div>
            notificações
            avatar
          </div>
        </div>
      </nav >
    )
  )
}

export default NavBar

{/* <nav className={styles.container_nav}>
        <div className={styles.title_container}>
          <img src={Title} alt="imagem escrito home play, a qual se refere ao logo da aplicação" />
        </div>
        <div className={styles.nav_tools}>
          <div className={styles.search}>
            <form>
              <input type="search" name="" id="" />
            </form>
          </div>
          <div>
            notificações
            avatar
          </div>
        </div>
      </nav > */}