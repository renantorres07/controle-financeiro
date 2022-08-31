import React from 'react';
import * as C from './styles';

const ResumeItems = ({ title, Icon, value }) => {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{title}</C.HeaderTitle>
            </C.Header>
            <C.Total>{value}</C.Total>
        </C.Container>
    )
}

export default ResumeItems;