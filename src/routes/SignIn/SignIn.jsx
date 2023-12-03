import styles from './SignIn.module.css';

import FieldText from "../../components/FieldText/FieldText"
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';

const SignIn = () => {
  return (
    <div className={styles.signin}>
      <div className={styles.box_login}>
        <h1>Fazer Login</h1>
        <form>
          <FieldText
            id={'name'}
            type={'text'}
            placeholder={'E-mail'}
            obrigatorio
          />
          <FieldText
            id={'password'}
            type={'password'}
            placeholder={'Senha'}
            obrigatorio
          />
          <ButtonSubmit>
            Entrar
          </ButtonSubmit>
        </form>
      </div>
    </div>
  )
}

export default SignIn
