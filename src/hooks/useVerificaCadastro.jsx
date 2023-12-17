import { useState } from "react";

import { useNavigate } from "react-router-dom";

const useVerificaCadastro = () => {

    const [login, setLogin] = useState({});

    const [jsonSingUp, setJsonSignUp] = useState({});

    const navigate = useNavigate();

    const isUserSignedUp = (route) => {
        const userData = localStorage.getItem('userData');

        setJsonSignUp(JSON.parse(userData));

        if ((jsonSingUp.email === login.email) && (jsonSingUp.password === login.password)) {
            navigate(route);
        } else {
            navigate('/');
        }
    }

    return {
        isUserSignedUp,
        setLogin
    }
}

export default useVerificaCadastro;
