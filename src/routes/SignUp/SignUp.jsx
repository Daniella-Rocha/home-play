import styles from './SignUp.module.css';

import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit"
import FieldText from "../../components/FieldText/FieldText"

const SignUp = () => {
  return (
    <div className={styles.signup}>
      <div className={styles.box_signup}>
        <h1>Criar uma Conta</h1>
        <form>
          <FieldText
            id={'fullname'}
            type={'text'}
            placeholder={'*Nome Completo'}
            obrigatorio
          />
          <FieldText
            id={'email'}
            type={'text'}
            placeholder={'*E-mail'}
            obrigatorio
          />
          <FieldText
            id={'password'}
            type={'password'}
            placeholder={'Senha'}
            obrigatorio
          />
          <ButtonSubmit>
            Finalizar Cadastro
          </ButtonSubmit>
        </form>
      </div>
    </div>
  )
}

export default SignUp
