import { Link } from "react-router-dom";

import styles from './ButtonLink.module.css';

const ButtonLink = ({ children, url, size, bdRadius, bgColor, assinante = false }) => {

  let style = {
    background: bgColor,
    borderRadius: bdRadius,
  }

  return (
    <Link
      to={url}
      className={`
      ${styles.btnDefault} 
      ${size == 'small' ? styles.small : ''}
      ${assinante ? styles.btn_assinante : ''}
      `}
      style={style}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
