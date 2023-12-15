import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const useCadastrarUsuario = () => {
    const navigate = useNavigate();

    // const [token, setToken] = useState('');

    const [signUp, setSignUp] = useState({});

    // const generateToken = () =>{
    //     const caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';


    // }

    const signUpUser = async () => {

        localStorage.setItem('signup', JSON.stringify(signUp));

        // navigate('/home');

        console.log(signUp);
    }

    return {
        signUp,
        setSignUp,
        signUpUser
    }
}

export default useCadastrarUsuario;
