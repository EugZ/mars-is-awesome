import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Loader from '../../../components/Loader';
import { ROUTES, LOADER } from '../../../constants/index';

export default function RegisterSuccess() {
    const [counter, setCounter] = useState(LOADER.len);
    const navigate = useNavigate();
    

    useEffect(() => {
        let timerId = setInterval(() => {
            setCounter(counter - 1);
        }, 1000);


        if (counter === 0) {
            navigate(ROUTES.login);
        }

        return () => {
            clearTimeout(timerId);
            timerId = null;
        }
    }, [counter, navigate]);


    return (
        <article className="front-block front-block--half auth-wrapper">
            <h1 className="title title--alien">
                Registration succeed
            </h1>
            <Loader />
        </article>
    );
}