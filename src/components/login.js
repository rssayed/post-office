import React from 'react';
import { Textarea, Button } from 'react-rainbow-components';

function login(){

    const conatinerStyles = {
        maxWidth: 400,
        margin: 'auto',
    }

    const buttonConatinerStyle = {
        backgroundColor: '#0645AE',
        borderColor: '#0645AE',
        color: '#ffffff',
        margin: 'auto',
        display:'block'
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
        return this.setState({
            username: this.state.username,
            password: this.state.password
        });
    }

    return(
        <div className='login' style={conatinerStyles}>
            <h1 align='center'>SnailMail</h1>
            <p align='center'>Username</p>
            <Textarea name='textBox' rows='1' placeholder="scooby@doo.net" style={conatinerStyles} autofocus />
            <p align='center'>Password</p>
            <Textarea name='textBox' rows='1' placeholder="Shaggy12345!" style={conatinerStyles} />
            <br></br>
            <Button name='loginButton' size='medium' label="Submit" onClick={() => handleSubmit} style={buttonConatinerStyle}></Button>
        </div>
    );
}

export default login;