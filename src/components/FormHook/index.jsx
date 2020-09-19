import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';


import Form from '../Form';
import Field from '../Field';
import Button from '../Button';
import schema from './validation';

const FormHook = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const newUser = ( user ) => {
        console.log( user );
    }

    return (
        <Form onSubmit={ handleSubmit( newUser ) }>
            <Field.Text type="text" name="name" label="Nome" register={register} />
            {  errors.name?.message /* da pra pegar o tipo tb errors.name?.type */   }
            <Field.Text type="email" name="email" label="Email" register={register} />
            { errors.email?.message }
            <Button>Enviar</Button>
        </Form>
    );
}

export default FormHook;
