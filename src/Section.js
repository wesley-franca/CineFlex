import styled from "styled-components"

function Section({ days }) {
    console.log(days)
    const weekday = days.weekday
    const date = days.date
   
    return (


        <Wrapper>
            <Title>
                {weekday} - {date}
            </Title>
            <Hours>
                {days.showtimes.map((room) => <div key={room.id}>{room.name}</div>)}
            </Hours>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    margin-left: 24px;
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
}
`



export default Section;