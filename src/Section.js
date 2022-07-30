import styled from "styled-components"
import { Link } from "react-router-dom"

function Section({ days }) {
    const weekday = days.weekday
    const date = days.date
   
    return (


        <Wrapper>
            <Title>
                {weekday} - {date}
            </Title>
            <Hours>
                {days.showtimes.map((room, index) => <Link to={`/assentos/${room.id}`} key={index}><div key={room.id}>{room.name}</div></Link>)}
            </Hours>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    margin-left: 24px;
    a{
        text-decoration: none;
    }
`

const Title = styled.div`
display: flex;
align-items: center;
height: 75px;
font-weight: 400;
font-size: 24px;
line-height: 23px;
`

const Hours = styled.div`
    display: flex;
div{
    width: 83px;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E8833A;
    margin-right: 10px;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
}
`



export default Section;