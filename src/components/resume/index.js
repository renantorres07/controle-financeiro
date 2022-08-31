import React from 'react';
import ResumeItems from '../resumeItems';
import * as C from './styles';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from 'react-icons/fa';

const Resume = () => {
    return (
        <C.Container>
            <ResumeItems title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000" />
            <ResumeItems title="Saídas" Icon={FaRegArrowAltCircleDown} value="1000" />
            <ResumeItems title="Total" Icon={FaDollarSign} value="1000" />
        </C.Container>
    )
}

export default Resume;