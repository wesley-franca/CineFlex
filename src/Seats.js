import Footer from "./Footer";
import Place from "./Place.js";

import Spinner from "./assets/images/Spinner.gif";

import { useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';



function Seats() {
    const { idSessao } = useParams();
    const [seats, setSeats] = useState(null);
    const [choosenSeats, setChoosenSeats] = useState([]);
    const [numberSeat, setNumberSeat] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    const navigate = useNavigate();
    let location = useLocation();
    location = (location.pathname).slice(1, 9);

    const body = {
        name: name,
        cpf: cpf,
        numberSeat: numberSeat,
        id: idSessao,
    }
    const Data = {
        ids: choosenSeats,
        name: name,
        cpf: cpf,
    }

    useEffect(() => {
        const require = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        require.then(res => {
            setSeats(res.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function SendSuccess() {
        if (choosenSeats.length !== 0) {
              
            axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", Data);

            return (navigate("/sucesso", { state: body }))
        }
        alert("Por favor, selecione ao menos um assento.")
    }

    function handleForm(e){
        e.preventDefault();
        SendSuccess()
    }
    if (seats !== null) {
        return (
            <Wrapper>
                <Title>
                    <p>Selecione o(s) assento(s)</p>
                </Title>
                <SeatBox>

                {seats.seats.map((local, index)=> {
                    return <Place local={local} choosenSeats={choosenSeats} setChoosenSeats={setChoosenSeats} numberSeat={numberSeat} setNumberSeat={setNumberSeat} key={index} />
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

                <FormBlock onSubmit={handleForm}>
                    <InputLabel>Nome do comprador:</InputLabel>
                    <InputForm 
                        type="text" 
                        name="formName"
                        placeholder="Digite seu nome..." 
                        onChange={(e)=> setName(e.target.value)}
                        value= { name }
                        required
                    />

                    <InputLabel>CPF do comprador:</InputLabel>
                    <InputForm 
                        type="text" 
                        name="formCPF" 
                        placeholder="Digite seu CPF..."
                        onChange={(e)=> setCpf(e.target.value)}
                        value= { cpf }
                        required
                    />

                    <Send>Reservar assento(s)</Send>
                </FormBlock>
                

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
                <img src={Spinner} alt="" />
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
const InputLabel = styled.label`
    width: 80%;
    margin: 5px auto;
    font-family:  'Roboto',sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #293845;
`

const InputForm = styled.input`
    height: 50px;
    width: 80%;
    margin: auto;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    font-family: 'Roboto',sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    padding: 20px;
`

const Send = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    color: #FFFFFF;
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    font-size: 18px;
    border-radius: 3px;
    margin: 50px auto 0 auto;
    border: none;
`
const FormBlock = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    
`

export default Seats;