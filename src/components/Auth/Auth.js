import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import './Auth.scss';

const Auth = ({ onClick, showModal, onSubmit }) => (
    <div className="Auth">
        { showModal && 
            <Modal onSubmit={onSubmit}/>
        }
        <Button 
            className='Button Alternative'
            onClick={onClick}
        >
            Sign In
        </Button>
    </div>
);

Auth.propTypes = {
    onClick: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Auth;
