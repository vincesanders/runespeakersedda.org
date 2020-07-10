import React from 'react';
import styled from 'styled-components';
import valknut from '../assets/images/Walknut.png';

const CTA = () => {
    return (
        <Container>
            <img src={valknut} />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin-top: 40px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    background-color: #050505;
    padding: 70px;
    img {
        width: 45%;
        box-shadow: 0 0 50px 50px rgba(0, 0, 0, 0.8);
    }
`

export default CTA;