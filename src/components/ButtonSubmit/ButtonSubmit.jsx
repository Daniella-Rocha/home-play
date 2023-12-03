import styles from './ButtonSubmit.module.css';

const ButtonSubmit = ({ children, type = 'submit' }) => {
    return (
        <button
            className={styles.btn_default}
            type={type}
        >{children}
        </button>
    )
}

export default ButtonSubmit
