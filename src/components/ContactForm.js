import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = () => {
    const initialState = {
        name: '',
        phone: '',
        company: '',
        email: '',
        message: ''
    }

    const [contactInfo, setContactInfo] = useState(initialState);
    const [contact, setContact] = useState(initialState);

    const handleChange = e => {
        setContactInfo({...contactInfo, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        setContact({...contactInfo})
        setContactInfo({...initialState});
    }

    return (
        <Container>
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
                <label for='name'>Name
                    <input onChange={handleChange} name='name' value={contactInfo.name}/>
                </label>
                <label for='phone'>Phone
                    <input onChange={handleChange} type='tel' name='phone' value={contactInfo.phone}/>
                </label>
                <label for='company'>Company
                    <input onChange={handleChange} name='company' value={contactInfo.company}/>
                </label>
                <label for='email'>Email
                    <input onChange={handleChange} type='email' name='email' value={contactInfo.email}/>
                </label>
                <label className='message-label' for='message'>Your Message
                    <textarea onChange={handleChange} name='message' value={contactInfo.message}/>
                </label>
                <button type='submit' >Submit Form</button>
            </form>
            <div>
                <h3>{contact.name}</h3>
                <p>{contact.phone}</p>
                <p>{contact.company}</p>
                <p>{contact.email}</p>
                <p>{contact.message}</p>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    box-shadow: 0 0 20px black;
    margin: 75px auto;
    border-radius: 5px;
    h3 {
        margin: 40px;
        font-size: 3rem;
        text-align: center;
    }
    form {
        width: 60%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        label {
            width: 48%;
            display: flex;
            flex-direction: column;
            margin-top: 40px;
            font-size: 1.6rem;
            input {
                width: 100%;
                border: 1px solid #fff;
                border-radius: 5px;
                margin-top: 10px;
                background-color: rgba(255,255,255,0.05);
                font-size: inherit;
                color: inherit;
                padding: 10px;
            }
            textarea {
                background-color: rgba(255,255,255,0.05);
                border: 1px solid #fff;
                border-radius: 5px;
                margin-top: 10px;
                font-size: inherit;
                color: inherit;
                height: 300px;
            }
        }
        button {
            margin: 40px auto;
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 20px;
            background-color: #121212;
            font-size: 1.6rem;
            color: inherit;
        }
        .message-label {
            width: 100%;
        }
    }
`

export default ContactForm;