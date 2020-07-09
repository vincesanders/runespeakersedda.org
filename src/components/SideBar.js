import React from 'react';
import styled from 'styled-components';

const SideBar = () => {
    return (
        <Container>
            <p className='section-name'>Runespeaker's Edda</p>
            <hr />
            <p className='section-index'>00</p>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 75px !important;
    height: calc(100vh - 4.5rem);
    z-index: 2;
    color: #fff;
    border-right: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .section-name {
        transform: rotate(-90deg) translateX(-50%);
        width: 240px;
        font-size: 24px;
    }
    hr {
        margin-top: 240px;
        margin-bottom: 10px;
        width: 30px;
        border-color: #aaa;
    }
    .section-index {
        color: #aaa;
        font-size: 20px;
    }
`

export default SideBar;