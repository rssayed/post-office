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
    display:'block'
}

export default function Login()
{


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [roles, setRole] = useState([]);
    const history = useHistory();

    async function authRouteHome(event)
    {

        
    }
 
    function validateForm()
    {
        return username.length > 0 && password.length > 0;
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const username_var = new String(username);
        roles.push(username_var);
        setRole(username_var);
        if (validateForm)
        {   
            
            if (typeof window !== 'undefined') {
                //const roles = JSON.parse(username);
                // localStorage.setItem('roles', roles);
                //jsonify stringy roles..
                localStorage.setItem('roles', JSON.stringify(roles));
                // localStorage.setItem('roles', JSON.stringify(username));
                
                console.log(" Pushing the role into local storage.." +roles)
                //what happens after we history.push app..
                history.push('/app');
            }
      
            //history.push('/App');
           //history.push('/track');       
        }
        else
        {
            alert('Username or Password is incorrect');
        }
        
    }

    
        return(
            
          
            <div className='containerStyles' style = {containerStyles}>
                <h1 align='center'>SnailMail</h1>
                <p align='center'>Username</p>
                <Textarea name='textBox' 
                    rows={1} 
                    type= 'username'
                    value= {username}
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="scooby@doo.net" 
                    style = {containerStyles}  
                    autofocus 
                />
                <p align='center'>Password</p>
                <Textarea name='textBox' 
                    rows={1} 
                    type= 'password'
                    value= {password}
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Shaggy12345!" 
                    style = {containerStyles} 
                />
                <br></br>
                <Button name='loginButton' 
                    size='medium' 
                    label="Submit" 
                    disabled= {!validateForm()}
                    onClick={(e) => handleSubmit(e)} 
                    style = {buttoncontainerStyle} 
                />
            </div> 
           
        );

   
}