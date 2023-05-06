import React from 'react';
import * as S from './styles';
import Card from '../Card';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'

const Resume = ({Entrada, Saida, Total}) => {
  return (
    <>
      <S.Container>
        <Card title={"Entradas"} value={Entrada} Icon={FaRegArrowAltCircleUp}/>
        <Card title={"Saídas"} value={Saida} Icon={FaRegArrowAltCircleDown}/>
        <Card title={"Total"} value={Total} Icon={FaDollarSign}/>
      </S.Container>
    </>
  );
};

export default Resume;