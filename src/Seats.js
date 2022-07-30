import Footer from "./Footer";

import { useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function Seats() {
    const { idSessao } = useParams();
    const [seats, setSeats] = useState(null)
    let location = useLocation();
    location = (location.pathname).slice(1, 9)
    // console.log(location)

    useEffect(() => {
        const require = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        require.then(res => {
            setSeats(res.data);
        });
    }, []);

    console.log(seats)

    if (seats !== null) {
        return (
            <Wrapper>
                <Title>
                    <p>Selecione o(s) assento(s)</p>
                </Title>
                <div>assentos</div>
                <div>legenda das cores</div>
                <div> form </div>
                <Footer dates={seats} location={location}/>
            </Wrapper>
        )
    } 
    return (
        <Wrapper>
                <Title>
                    <p>Selecione o(s) assento(s)</p>
                </Title>
                <Load>
                "carregando"
                </Load>
            </Wrapper>
    )
}


const Wrapper = styled.div`
padding-bottom: 130px;
padding-top: 67px
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
const Load = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Seats;