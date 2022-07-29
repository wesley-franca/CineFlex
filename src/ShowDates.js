import Sections from "./Sections.js"
import Footer from "./Footer.js"

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function ShowDates() {
    const { idFilme } = useParams();
    const [dates, setDates] = useState(null);

    useEffect(() => {
        const require = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

        require.then(res => {
            setDates(res.data);
            
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(dates !== null){
    return (
        <div>
            <Title>
                <p>Selecione o horário</p>
            </Title>
            <Sections dates={dates}/>
        <Footer/>
        </div>
    )
}
return (
    <div>
        <Title>
            <p>Selecione o horário</p>
        </Title>
        "carregando"
    </div>
)
}

const Title = styled.div`
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 400;
    font-family:  'Roboto', sans-serif;
`

export default ShowDates;