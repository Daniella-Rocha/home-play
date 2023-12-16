import { useState } from "react";

import { useNavigate } from "react-router-dom";

const useVerificaCadastro = () => {

    const [login, setLogin] = useState({});

    const [jsonSingUp, setJsonSignUp] = useState({});

    const [verificaCadastro, setVerificaCadastro] = useState({});

    const navigate = useNavigate();

    const isUserSignedUp = async (route) => {
        const userData = localStorage.getItem('signup');
        setJsonSignUp(JSON.parse(userData));
        if ((jsonSingUp.email === login.email) && (jsonSingUp.password === login.password)) {
            navigate(route);
        }
    }

    return {
        isUserSignedUp,
        setLogin
    }
}

export default useVerificaCadastro;
