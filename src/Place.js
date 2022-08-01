import styled from "styled-components";
import { useState } from "react";

function Place({ local, choosenSeats, setChoosenSeats, numberSeat, setNumberSeat }) {
    const [clicked, setClicked] = useState(false)

    function DifferentId(value){
        return value !== local.id
    }
    function DiferentSeat(value){
        return value !== local.name
    }

    if (clicked) {
        return(
            <Box onClick = {() => {
                setClicked(!clicked)
                setChoosenSeats(choosenSeats.filter(DifferentId))
                setNumberSeat(numberSeat.filter(DiferentSeat))
        }}>
        <Selecionado>
            {local.name}
        </Selecionado>
            </Box >)

    } else if(local.isAvailable){
        return(
            <Box onClick = {() => {
                setClicked(!clicked)
                setChoosenSeats([...choosenSeats, local.id])
                setNumberSeat([...numberSeat, local.name])
        }}>
        <Disponivel>
            {local.name}
        </Disponivel>
            </Box >)
    }
return (
    <Box onClick = {() => {
        alert("Esse assento não está disponível")
    }}> 
        <Indisponivel On>
            {local.name}
        </Indisponivel>
    </Box>)    

}


const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Selecionado = styled.div`
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
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

export default Place;

