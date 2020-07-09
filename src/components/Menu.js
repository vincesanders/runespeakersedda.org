import React from 'react';
import styled from 'styled-components';

const Menu = () => {
    return (
    <Header>
        <div className='logo-container'>
            <a href='#' className='logo'>Runespeaker's Edda</a>
        </div>
        <nav>
            <ul>
                <li>
                    <a href='#'>Menu Item 1</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='#'>Menu Item 1</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='#'>Menu Item 1</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='#'>Menu Item 1</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='#'>Menu Item 1</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='#'>Menu Item 1</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='#'>Menu Item 1</a>
                </li>
            </ul>
        </nav>
    </Header>
    );
}

const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #2a2a2a;
    color: white;
    font-family: sans-serif;
    padding: 15px 0;
    box-shadow: 0 5px 25px 20px rgba(0, 0, 0, 0.6);
    .logo-container {
        width: 30%;
        margin-left: 5%;
        font-size: 2.5rem;
    }
    nav {
        width: 70%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 5%;
    }
`

export default Menu;