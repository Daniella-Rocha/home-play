import { Link } from 'react-router-dom';

import styles from './DropDownItem.module.css';

const DropDownItem = ({ content, to }) => {
  
  return (
    <li className={styles.item}>
      <Link to={to}>
        {content}
      </Link>
    </li>
  )
}

export default DropDownItem
