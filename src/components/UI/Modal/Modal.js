import React from 'react';
import PropTypes from 'prop-types';

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
            <Button className='Button'>Submit</Button>
        </form>
    );
};

Modal.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
};

export default Modal;
