import {Field, Form, ErrorMessage} from 'formik';
import styled from 'styled-components';

export const FormStyle = styled(Form)`
     display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 19em;
    min-height: 23em;
    height: auto;
    border-radius: 0.2em;
    margin: 9% auto;
    box-shadow: 0 0.2em 3em hsla(242, 33%, 32%, 0.35);
    padding: 2%;
    background-image: linear-gradient(-225deg, #E3FDF5 50%, #FFE6FA 50%);
    `;

export const FieldStyle = styled(Field)`
    width: 13.8em;
    height: 0.9em;
    margin-top: 2%;
    padding: 0.9em;
    font-size: 0.82em;
    font-family:  'Blinker', sans-serif;
    color: #5E6472;
    outline: none;
    border: none;
    border-radius: 0 0.2em 0.2em 0;
    transition: 0.2s linear;
    `;

export const LabelStyle = styled.label`
    display: block;
    `;

export const ButtonStyle = styled.button`
    font-family:  'Blinker', sans-serif;
    color: #44434f;
    font-size: 23px;
    display: inline-block;
    width: 12.5em;
    height: 2.1em;
    background: #fff;
    border-radius: 0.2em;
    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
    transition: all 0.2s linear;
    margin: 7% auto;
    letter-spacing: 0.05em;
    &&:hover{
        font-weight: 700;
        letter-spacing: 3px;
        box-shadow: 0 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.3s ease 0s;
    }
  `;

export const InvalidFeedbackStyle =styled(ErrorMessage)`
    text-align: center;
    color: pink;
    `;

export const ControlButtonStyle =styled.div`text-align: center;`;
