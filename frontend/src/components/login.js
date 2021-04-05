import React from 'react';
import { Application, Textarea, Button } from 'react-rainbow-components';

function login(){

    const conatinerStyles = {
        maxWidth: 300
    }

    /*const theme = {
        rainbow: {
            palette: {
                brand: '#0645AE',
                
            },
        },
    };*/
    
    function handleSubmit(event)
    {
        event.preventDefault();
    }

    const buttonStyle = {
        backgroundColor: '#0645AE',
        borderColor: '#0645AE',
        color: '#ffffff'
    }

    /*need to center align*/
    return(
        <div className='login'>
            <p>Login</p>
            <Textarea name='loginBox' rows='1' placeholder="scooby@doo.net" style={conatinerStyles}></Textarea>
            <p>Password</p>
            <Textarea name='pwBox' rows='1' placeholder="Shaggy12345!" style={conatinerStyles}></Textarea>
            <br></br>
            <Button name='loginButton' label="Submit" onClick={() => handleSubmit} style={buttonStyle}></Button>
        </div>
    );
}

export default login;