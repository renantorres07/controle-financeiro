import React from 'react';
import ResumeItems from '../resumeItems';
import * as C from './styles';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from 'react-icons/fa';

const Resume = (income, expense, total) => {
    return (
        <C.Container>
            <ResumeItems title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
            <ResumeItems title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
            <ResumeItems title="Total" Icon={FaDollarSign} value={total} />
        </C.Container>
    )
}

export default Resume;