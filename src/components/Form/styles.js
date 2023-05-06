import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: white;
    box-shadow: 0px 2px 5px #ccc;
    display: flex;
    gap: 10px;
    justify-content: space-around;
    padding: 15px 0px;

    @media (max-width: 750px) {
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
    outline: none;
    border-radius: 3px;
    padding: 5px 10px;
    font-size: 12px;
    border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input {
        margin-left: 10px;
        accent-color: black;
        margin-top: 0;
        margin-right: 3px;
    }
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    color: white;
    background-color: #800505;
`;