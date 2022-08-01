import Spinner from "./assets/images/Spinner.gif";

import styled from 'styled-components';
import { useLocation, Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";


//         numberSeat: numberSeat,


function Success() {
    const location = useLocation()
    const Data = location.state
    const [date, setDate] = useState(null)
    const [hour, setHour] = useState("")
    const [movie, setMovie] = useState("")
    
    const seats = Data.numberSeat.sort(function (a, b) {  return a - b;  })


    useEffect(() => {
        const require = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${Data.id}/seats`);

        require.then(res => {
            setDate(res.data.day.date)
            setHour(res.data.name)
            setMovie(res.data.movie.title)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (date !== null) {
        return (
            <Wrapper>
                <Title>
                    <p>Pedido feito
                    </p>
                    <p>com sucesso!</p>
                </Title>
                <div>
                    <Sub>Filme e sessão</Sub>
                    <Content>{movie}</Content>
                    <Content>{date} {hour}</Content>
                </div>
                <div>
                    <Sub>Ingressos</Sub>

                    {seats.map((value, index) => {
                        return (
                            <Content key={index}>Asssento {value} </Content>
                        )
                    })}

                </div>
                <div>
                    <Sub>Comprador</Sub>
                    <Content>Nome: {Data.name}</Content>
                    <Content>CPF: {Data.cpf}</Content>
                </div>
                <Link to={`/`}>
                    <Home>
                        Voltar pra Home
                    </Home>
                </Link>
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <Title>
                <p>Pedido feito
                </p>
                <p>com sucesso!</p>
            </Title>
            <Load>
                <img src={Spinner} alt="" />
            </Load>
        </Wrapper>
        
    )
    
}

const Wrapper = styled.div`
    margin-top: 67px;
    a{
        text-decoration: none;
    }
`
const Title = styled.div`
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #247A6B;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
    margin: auto;
`
const Sub = styled.div`
    color: #293845;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
    margin: 20px;
`
const Content = styled.p`
    color: #293845;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 22px;
    margin-left: 20px;
    margin-bottom: 10px;
`
const Home = styled.p`
    height: 42px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E8833A;
    color: #ffffff;
    font-weight: 400;
    font-size: 18px;
    font-family: 'Roboto';
    margin: 70px auto;
`
const Load = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export default Success;