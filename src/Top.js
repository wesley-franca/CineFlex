import styled from "styled-components";
import {Link} from "react-router-dom";


function Top() {
    return (
        <Wrapper>
            <Link to="/" >
                <Title>
                    CINEFLEX
                </Title>
            </Link>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    height: 67px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    position: fixed;
    left: 0;
    top: 0;

    a {
        text-decoration: none;
    }
    `
const Title = styled.p`
    color: #E8833A;
    font-size: 34px;
    font-family:  'Roboto', sans-serif;
`


export default Top;