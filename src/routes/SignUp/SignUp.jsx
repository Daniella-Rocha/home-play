import { useForm } from "react-hook-form";

import useCadastrarUsuario from '../../hooks/useCadastrarUsuario';

import styles from './SignUp.module.css';

import Form from 'react-bootstrap/Form';

import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";

import './SignUp.css';

const SignUp = () => {
  const { signUp, setSignUp, signUpUser } = useCadastrarUsuario();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    signUpUser(data);
    console.log(signUp);
  };

  return (
    <div className={styles.signup}>
      <div className={styles.box_signup}>
        <h1>Criar uma Conta</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group
            className="mb-3"
            controlId="name"
          >
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Seu Nome Aqui"
              {...register("name",
                {
                  required: "Campo nome é obrigatório",
                  maxLength: {
                    value: 30,
                    message: "Este campo deve ter no máximo 30 caracteres"
                  },
                  pattern: {
                    value: /^[a-zA-Z\s]+$/gi,
                    message: "Este campo deve conter apenas letras"
                  }
                }
              )}
            />
            <span className="error">{errors.name?.message}</span>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="email"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              {...register("email",
                {
                  required: 'Este campo é obrigatório.',
                  minLength: {
                    value: 10,
                    message: "Este campo deve ter pelo menos 10 caracteres"
                  },
                  maxLength: {
                    value: 30,
                    message: "Este campo deve ter no máximo 30 caracteres"
                  },
                  pattern: {
                    value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/gi,
                    message: "Este email não é válido."
                  }
                }
              )}
            />
            <span className='error'>{errors.email?.message}</span>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="password"
          >
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="*********"
              {...register("password",
                {
                  required: "Este campo é obrigatório.",
                  minLength: {
                    value: 8,
                    message: "Este campo deve ter pelo menos 8 caracteres"
                  },
                  maxLength: {
                    value: 12,
                    message: "Este campo deve ter no máximo 12 caracteres"
                  },
                  pattern: {
                    value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$&]).+/gi,
                    message: 'A sua senha de conter pelo menos  1 letra maiúscula letras minúsculas e pelo menos 1 caracter especial detre estes (@ # $ &)'
                  }
                }
              )}
            />
            <span className='error'>{errors.password?.message}</span>
          </Form.Group>
          <ButtonSubmit>
            Finalizar Cadastro
          </ButtonSubmit>
        </Form>
      </div>
    </div>
  )
}

export default SignUp
