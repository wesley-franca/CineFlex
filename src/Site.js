import styled from "styled-components";
import { useState } from "react";

function Site({ local, choosenSeats, setChoosenSeats }) {
    const [clicked, setClicked] = useState(false)

    if (clicked) {
        return(
            <Box onClick = {() => {
                console.log("cliquei")
                setClicked(!clicked)
                console.log(choosenSeats)
                setChoosenSeats.remove(local.id)
                console.log(choosenSeats)
        }}>
        <Selecionado>
            {local.name}
        </Selecionado>
            </Box >)
    } else if(local.isAvailable){
        return(
            <Box onClick = {() => {
                console.log("cliquei")
                setClicked(!clicked)
                setChoosenSeats([...choosenSeats, local.id])
        }}>
        <Disponivel>
            {local.name}
        </Disponivel>
            </Box >)
    }
return (
    <Box>
        <Indisponivel>
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

export default Site;

