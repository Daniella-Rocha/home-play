import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import {UserDataContext} from '../../contexts/userDataContext';

import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';

import Form from 'react-bootstrap/Form';

import styles from './SignIn.module.css';

import './Signin.css';

const SignIn = () => {
  const data = useContext(UserDataContext);
  
  const [userData, setUserData] = useState(data);

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if ((data.email === userData.email) && (data.password ===
      userData.password)) {
      navigate('/home');
    }
    else {
      console.log('O usuário não existe, ou email e senha estão incorretos');
    }
  };

  return (
    <div className={styles.signin}>
      <div className={styles.box_login}>
        <h1>Fazer Login</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group
            className="mb-3"
            controlId="email"
          >
            <Form.Label>
              Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="*name@example.com"
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
              placeholder="************"
              {...register("password",
                {
                  required: "Este campo é obrigatório.",
                }
              )}
            />
            <span className='error'>{errors.password?.message}</span>
          </Form.Group>
          <ButtonSubmit>
            Entrar
          </ButtonSubmit>
        </Form>
      </div>
    </div>
  )
}

export default SignIn
