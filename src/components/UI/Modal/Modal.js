import React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import './Modal.scss';

const Modal = ({ email, password, onSubmit }) => {
    return (
        <form 
            className="Modal"
            onSubmit={onSubmit}
        >
            <h2>Sign In</h2>
            <Input
                placeholder='E-mail'
                name='email'
                value={email}
            />
            <Input
                placeholder='Password'
                name='password'
                value={password}
            />
            <Button>Submit</Button>
        </form>
    );
};

export default Modal;
