import styled from "styled-components";


function Top() {
    return (
        <Content>
            <Title>
                CINEFLEX
            </Title>
        </Content>
    )

}

const Content = styled.div`
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
`
const Title = styled.p`
    color: #E8833A;
    font-size: 34px;
    font-family:  'Roboto', sans-serif;
`


export default Top;