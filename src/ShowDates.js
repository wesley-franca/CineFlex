import Sections from "./Sections.js";
import Footer from "./Footer.js";

import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function ShowDates() {
    const { idFilme } = useParams();
    const [dates, setDates] = useState(null);
    let location = useLocation();
    location = (location.pathname).slice(1, 8)

    useEffect(() => {
        const require = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

        require.then(res => {
            setDates(res.data);

        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    if (dates !== null) {
        return (
            <Wrapper>
                <Title>
                    <p>Selecione o horário</p>
                </Title>
                <Sections dates={dates} />
                <Footer dates={dates} location={location}/> 
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <Title>
                <p>Selecione o horário</p>
            </Title>
            <Load>
                "carregando"
            </Load>
            <Footer dates={dates} location={location}/> 
        </Wrapper>
    )
}

const Wrapper = styled.div`
padding-bottom: 130px;
padding-top: 67px
`

const Load = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.div`
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #293845;
    font-family: 'Roboto',sans-serif;
    font-size: 24px;
    font-weight: 400;
`

export default ShowDates;