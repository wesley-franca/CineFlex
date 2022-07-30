import styled from "styled-components";
import { Link } from "react-router-dom";

function Movie({ id, posterURL, title, setTape }) {

    return (
        <Link to={`/sessoes/${id}`} onClick={() => {setTape({"title": title, "URL": posterURL})}}>
            <Banner>
                <img src={posterURL} alt="" />
            </Banner>
        </Link>
    )
}


const Banner = styled.div`
    height: 193px; 
    width: 129px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding: 8px;
    margin-bottom: 12px;

    img {
    max-width: 100%;
    max-height: 100%;
    }
`

export default Movie;