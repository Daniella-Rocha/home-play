import { useState } from "react";

import { useNavigate } from "react-router-dom";

const useVerificaCadastro = () => {

    const [login, setLogin] = useState({});

    const [jsonSingUp, setJsonSignUp] = useState({});

    const [verificaCadastro, setVerificaCadastro] = useState({});

    const navigate = useNavigate();

    const isUserSignedUp = async (route) => {
        
    }

    return {
        isUserSignedUp,
        setLogin
    }
}

export default useVerificaCadastro;
