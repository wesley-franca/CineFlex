import Display from "./Display.js";

import styled from "styled-components";

function Home() {
    return (
        <Wrapper>
            <Title>
                <p>Selecione o filme</p>
            </Title>
            <MovieContainer>
                <Display />
            </MovieContainer>
        </Wrapper>
    )
}


const Wrapper = styled.div`
padding-top: 67px;
    background-color: #ffffff;
    height: 100vh;
`
const Title = styled.div`
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #293845;
    font-family:  'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
`
const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
` 


export default Home;