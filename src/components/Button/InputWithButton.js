import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px 0;
`;
const ButtonWrapper = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
`;
const Button = styled.button`
    padding: 5px;
    font-size: 16px;
    color: #fff;
    background-color: #32ac4c;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    width: 40%;
    &:hover {
        background-color: #287d62;
    }
`;

const Input = styled.input`
    padding: 5px;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0 10px;
    text-align: center;
    width: 100px;
    position: relative;
    height: 30px; /* add a height */
    margin-bottom: 5px;
    &::before {
        content: "$";
        position: absolute;
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
        color: #333;
    }
`;

const InputWithButtons = ({ value, onChange }) => {
    const [step, setStep] = useState(10);

    const handleIncrement = () => {
        onChange(value + step);
    };

    const handleDecrement = () => {
        onChange(value - step);
    };

    const handleInputChange = (event) => {
        onChange(Number(event.target.value));
    };

    return (
        <InputWrapper>
            <Input type="number" value={value} onChange={handleInputChange} />
            <ButtonWrapper>
                <Button onClick={handleDecrement}>-</Button>
                <Button onClick={handleIncrement}>+</Button>
            </ButtonWrapper>
        </InputWrapper>
    );
};

export default InputWithButtons;
