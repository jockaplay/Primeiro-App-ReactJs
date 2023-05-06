import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Resume from './components/Resume';
import Form from './components/Form';

export const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  )
  const [income, setEntrada] = useState(0);
  const [expense, setDespesas] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const amountIncome = transactionsList
    .filter((item) => !item.expense)
    .map((transation) => Number(transation.amount));

    const amountExpense = transactionsList
    .filter((item) => item.expense)
    .map((transation) => Number(transation.amount));

    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = (income - expense).toFixed(2);

    setEntrada(`R$ ${income}`);
    setDespesas(`R$ ${expense}`);
    setTotal(`R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransations = [...transactionsList, transaction];
    setTransactionsList(newArrayTransations);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransations))
  };

  return (
    <>
      <Header />
      <Resume Entrada={income} Saida={expense} Total={total}/>
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
      <GlobalStyle />
    </>
  );
}