import React from 'react';
import SpentItem from '../SpentItem';
import * as S from './styles';

const Spents = ({ itens, setItens }) => {

    const onDelete = (ID) => {
        const newArray = itens.filter((transation) => transation.id !== ID);
        setItens(newArray);
        localStorage.setItem("transations", JSON.stringify(newArray));
    };

    return (
        <S.Table>
            <S.Thead>
                <S.Tr>
                    <S.Th width={40}>Descrição</S.Th>
                    <S.Th width={40}>Valor</S.Th>
                    <S.Th width={10} alignCenter >Tipo</S.Th>
                    <S.Th width={10}></S.Th>
                </S.Tr>
            </S.Thead>
            <S.Tbody>
                {itens?.map((item, index) => (
                    <SpentItem key={index} item={item} onDelete={onDelete} />
                ))}
            </S.Tbody>
        </S.Table>
    );
};

export default Spents;