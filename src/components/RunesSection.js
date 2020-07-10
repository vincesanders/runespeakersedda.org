import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import elder from '../assets/images/elder-futhark.jpg';
import younger from '../assets/images/younger-futhark.jpg';
import icelandic from '../assets/images/icelandic-runes.jpg';
import medieval from '../assets/images/medieval-runes.jpg';
import dalecarlian from '../assets/images/dalecarlian-runes.jpg';
import ciphers from '../assets/images/runic-ciphers.jpg';

const runeDictionay = {
    'elder': elder,
    'younger': younger,
    'icelandic': icelandic,
    'medieval': medieval,
    'dalecarlian': dalecarlian,
    'ciphers': ciphers
}


const RunesSection = () => {
    const [runes, setRunes] = useState(runeDictionay['elder']);
    const elderButton = useRef(null);
    const [currentButton, setCurrentButton] = useState(elderButton.current);

    useEffect(() => {
        if (elderButton.current) {
            elderButton.current.classList.add('active');
        }
    }, [elderButton.current])
    const handleClick = e => {
        if (currentButton) {
            currentButton.classList.remove('active');
        }
        if (elderButton.current) {
            elderButton.current.classList.remove('active');
            elderButton.current = null
        }
        setRunes(runeDictionay[e.target.name]);
        e.target.classList.add('active');
        setCurrentButton(e.target);
    }
    return (
        <Section>
            <h2>The Runes</h2>
            <div className='runes-transliteration-images'>
                <div className='rune-picker'>
                    <button onClick={handleClick} name='elder' ref={elderButton}>Elder</button>
                    <button onClick={handleClick} name='younger'>Younger</button>
                    <button onClick={handleClick} name='icelandic'>Icelandic</button>
                    <button onClick={handleClick} name='medieval'>Medieval</button>
                    <button onClick={handleClick} name='dalecarlian'>Dalecarlian</button>
                    <button onClick={handleClick} name='ciphers'>Ciphers</button>
                </div>
                <div className='rune-info'>
                    <img src={runes} />
                </div>
            </div>
            <div className='bottom-border' />
        </Section>
    );
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    h2 {
        font-size: 5rem;
        margin: 50px;
        padding-top: 75px;
        border-top: 3px solid #1b1b1b;
        width: 85%;
        text-align: center;
    }
    .runes-transliteration-images {
        width: 85%;
        display: flex;
        justify-content: space-between;
        .rune-picker {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;
            button {
                border: none;
                color: #aaa;
                text-align: center;
                text-decoration: center;
                background-color: inherit;
                font-size: 3rem;
                padding: 25px 0;
                text-transform: uppercase;
                cursor: pointer;
                &:hover {
                    color: #fff;
                }
                &:focus {
                    outline: none;
                }
            }
            .active {
                color: #fff;
            }
        }
        .rune-info {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #1b1b1b;
            box-shadow: 0 0 30px 0 #000;
            width: 70%;
            padding: 25px;
            border-radius: 5px;
            img {
                width: 85%;
                max-height: 85%;
                box-shadow: 0 0 30px 0 #000;
            }
        }
    }
    .bottom-border {
        width: 85%;
        border-bottom: 3px solid #1b1b1b;
        margin-top: 75px;
    }
`

export default RunesSection;