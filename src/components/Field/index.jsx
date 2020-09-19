import React from 'react';

import Content from './Content';
import Label from './Label';
import Input from './Input';

const Text = ({ label, type, name, register }) => {
    return (
        <Label>
            <Content>{ label }</Content>
            <Input name={ name } type={ type } ref={ register } />
        </Label>
    );
};

const Field = {
    Text,
};

export default Field;
