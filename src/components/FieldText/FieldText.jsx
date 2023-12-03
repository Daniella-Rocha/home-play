import styles from './FieldText.module.css';

const FieldText = ({ type, id, placeholder, obrigatorio = true }) => {
    return (
        <div className={styles.fieldText_container}>
            <label htmlFor={id}>
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    required={obrigatorio}
                />
            </label>
        </div>
    )
}

export default FieldText
