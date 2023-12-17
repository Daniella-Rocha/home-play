import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const useCadastrarUsuario = () => {
    const navigate = useNavigate();

    const [signUp, setSignUp] = useState({});

    const signUpUser = async (data) => {
        setSignUp({
            name: data.name,
            email: data.email,
            password: data.password
        });
    }

    useEffect(() => {
        if (Object.keys(signUp).length > 0) {
            localStorage.setItem('userData', JSON.stringify(signUp));
        }

        console.log(signUp);
        
        navigate('/home');
    }, [signUp]);

    return {
        signUp,
        signUpUser
    }
}

export default useCadastrarUsuario;
