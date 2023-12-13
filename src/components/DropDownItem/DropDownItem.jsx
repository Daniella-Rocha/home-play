import styles from './DropDownItem.module.css';

const DropDownItem = ({content}) => {
  return (
    <li className={styles.item}>{content}</li>
  )
}

export default DropDownItem
