import React from 'react';
import { Textarea } from 'react-rainbow-components';

function login(){

    const conatinerStyles = {
        maxWidth: 100
    }
    return(
        <div className='login'>
            <p>Login</p>
            <Textarea name='loginBox' rows='1' placeholder="scooby@doo.net" style={conatinerStyles}></Textarea>
            <p>Password</p>
        </div>
    );
}

export default login;