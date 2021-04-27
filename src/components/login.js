import React, { useState } from 'react';
import Textarea from 'react-rainbow-components/components/Textarea'
import Button from 'react-rainbow-components/components/Button';
import { useHistory } from 'react-router-dom';
import Auth from '../routes/Auth';

const containerStyles = {
    maxWidth: 400,
    margin: 'auto',
}

const buttoncontainerStyle = {
    backgroundColor: '#0645AE',
    borderColor: '#0645AE',
    color: '#ffffff',
    margin: 'auto',
    display: 'block'
}

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [roles, setRole] = useState([]);
    const history = useHistory();

    async function authRouteHome(event) {


    }

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        //const username_var = new String(username); //sets up username_var
        if (validateForm) {
            const form = new FormData(document.getElementById('form2'));
            fetch('http://localhost:5000/backend/login', {
                method: 'POST',
                body: form,
            })

                .then(response => response.text())          //need to send back a string..
                .then(result => {
                    console.log('Works..:', result);
                    //i need it to pass back the role permission through login..
                    //else pass back "no_permission"
                    console.log("hiiii");
                    if (result == 'Manager') {
                        console.log("This user is a manager..", result)
                        roles.push(result);
                        setRole(result);
                        console.log("This is the username",username)
                        localStorage.setItem('roles', JSON.stringify(roles));
                        localStorage.setItem('username', username);
                        localStorage.setItem('password', password);
                        
                        alert("Logging in as manager")
                        history.push('/app');
                    }
                    else if (result == 'Customer') {
                        console.log("This user is a customer..", result)
                        roles.push(result);
                        setRole(result);
                        localStorage.setItem('roles', JSON.stringify(roles));
                        localStorage.setItem('username', username);
                        localStorage.setItem('password', password);
                        alert("Logging in as Customer")
                        history.push('/app');
                    }
                    else if (result == 'Worker') {
                        console.log("This user is a worker", result)
                        roles.push(result);
                        setRole(result);
                        localStorage.setItem('roles', JSON.stringify(roles));
                        localStorage.setItem('username', username);
                        localStorage.setItem('password', password);
                        alert("Logging in as Worker")
                        history.push('/app');
                    }
                    else if (result == 'no_permission') {
                        console.log("This has no permission..")
                        alert("You will need to try to login again password may be wrong....")
                        history.push('/')
                    }
                    else if (result == 'Username Not Found In DB') {
                        alert("This username is not in the database try to log in again")
                        history.push('/');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert("This username is not in the db..")
                    history.push('/');
                });
        }

        else {
            alert('Username or Password is not valid');
        }
    }

    return (
        <form className="container_login" /*onSubmit={this.handleSubmit}*/ id='form2'>
            <div className='containerStyles' style={containerStyles}>
                <h1 align='center'>SnailMail</h1>
                <p align='center'>Username</p>
                <Textarea name='textBox'
                    rows={1}
                    type='username'
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="scooby@doo.net"
                    style={containerStyles}
                    autofocus
                />

                <p align='center'>Password</p>
                <Textarea name='textBox'
                    rows={1}
                    type='password'
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Shaggy12345!"
                    style={containerStyles}
                />

                <br></br>
                <Button name='loginButton'
                    size='medium'
                    label="Submit"
                    disabled={!validateForm()}
                    onClick={(e) => handleSubmit(e)}
                    style={buttoncontainerStyle}
                />

            </div>
        </form>
    );
}
