import React, { useState } from 'react';
import * as S from './styles';
import Spents from '../Spents';

const Form = ({ handleAdd, transactionsList, setTransactionsList}) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000); // Feito assim apenas por não ser em um banco de dados de verdade!!!!!!!

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Infore a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor deve ser positivo!")
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

    return (
        <>
            <S.Container>
                <S.InputContent>
                    <S.Label>Descrição</S.Label>
                    <S.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </S.InputContent>
                <S.InputContent>
                    <S.Label>Valor</S.Label>
                    <S.Input value={amount} type='number' onChange={(e) => setAmount(e.target.value)} />
                </S.InputContent>
                <S.RadioGroup>
                    <S.Input type='radio' id='rad01' defaultChecked name='group1'
                        onChange={() => setExpense(!isExpense)} />
                    <S.Label htmlFor='rad01'>Entrada</S.Label>
                    <S.Input type='radio' id='rad02' name='group1'
                        onChange={() => setExpense(!isExpense)} />
                    <S.Label htmlFor='rad02'>Saida</S.Label>
                </S.RadioGroup>
                <S.Button onClick={handleSave}>ADICIONAR</S.Button>
            </S.Container>
            <Spents itens={transactionsList} setItens={setTransactionsList}/>
        </>
    );
};

export default Form;