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


    useEffect(() => {
        const require = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        require.then(res => {
            setSeats(res.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    if (seats !== null) {
        console.log(seats.seats)
    }


    if (seats !== null) {
        return (
            <Wrapper>
                <Title>
                    <p>Selecione o(s) assento(s)</p>
                </Title>
                <SeatBox>
                {seats.seats.map((local, index)=> {
                    if (local.isAvailable) {
                        return (
                            <Box onClick={() => {console.log("cliquei")}} key={index}>
                                <Disponivel>
                                    {local.name}
                                </Disponivel>
                            </Box>)
                    }
                    return (
                        <Box onClick={() => {console.log("cliquei")}} key={index}>
                            <Indisponivel>
                                {local.name}
                            </Indisponivel>
                        </Box>)    
                })}
                </SeatBox>

                <Subtitle>
                    <Box>
                        <Selecionado>
                        </Selecionado>
                        <p>Selecionado</p>
                    </Box>
                    <Box>
                        <Disponivel>
                        </Disponivel>
                        <p>Disponível</p>
                    </Box>
                    <Box>
                        <Indisponivel>
                        </Indisponivel>
                        <p>Indisponível</p>
                    </Box>
                </Subtitle>

                

                <Footer dates={seats} location={location} />
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
const Subtitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 30px;

    p{
        margin-top: 10px;
        font-family: 'Roboto',sans-serif;
        font-weight: 400;
        font-size: 13px;
        color: #4E5A65;
    }
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SeatBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 15px;
`
const Selecionado = styled.div`
    height: 25px;
    width: 25px;
    border: solid #1AAE9E 1px;
    border-radius: 50%;
    background-color: #8DD7CF;
    margin: 9px 4px;
`
const Disponivel = styled.div`
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid #7B8B99 1px;
    border-radius: 50%;
    background-color: #C3CFD9;
    margin: 9px 4px;
`
const Indisponivel = styled.div`
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid #F7C52B 1px;
    border-radius: 50%;
    background-color: #FBE192;
    margin: 9px 4px;
`


export default Seats;