import styled from "styled-components"

function Footer({ tape }) {



    if (tape !== null) {
        console.log(tape)
        const title = tape.title;
        const posterURL = tape.URL;
        return (
            <Wrapper>
                <Banner>
                    <img src={posterURL} alt="" />
                </Banner>
                <p>{title}</p>
            </Wrapper>
        )
    } else {
        return "";
    }
}

const Wrapper = styled.div`
    height: 117px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background-color: #DFE6ED;
    box-shadow: 2px 4px 2px 4px rgba(0, 0, 0, 0.2);

    p{
        color: #293845;
        font-size: 26px;
        font-weight: 400;
        font-family: 'Roboto',sans-serif;
    }

`
const Banner = styled.div`
    width: 64px;
    height: 89px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin: 14px;
    img{
        width: 48px;
        height: 72px;
    }
`

export default Footer;