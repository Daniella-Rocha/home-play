import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const useCadastrarUsuario = () => {
    const navigate = useNavigate();

    // const [token, setToken] = useState('');

    const [signUp, setSignUp] = useState({});

    // const generateToken = () =>{
    //     const caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';


    // }

    const signUpUser = async (data) => {
        setSignUp({
            name: data.name,
            email: data.email,
            password: data.password
        });

        localStorage.setItem('signup', JSON.stringify(signUp));

        navigate('/home');
    }

    return {
        signUp,
        setSignUp,
        signUpUser
    }
}

export default useCadastrarUsuario;
