import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea'
import Button from 'react-rainbow-components/components/Button';
import { useHistory } from 'react-router-dom';
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
    const variable = '';

export default function Login(){
    
    /*constructor(props) {
        super(props);
        this.state = {
          textUser: '',
          saveUser: '',
          textPass: '',
          savePass: ''
        };
      
    };*/

    const history = useHistory();

    async function authRouteHome(event)
    {

        
    };

    function validateForm()
    {

    };
   
    function handleSubmit(event) {
        event.preventDefault();
        this.setState({ saveUser: this.state.textUser, savePass: this.state.textPass}, () => {
            console.log("                       ");
            console.log("This is the saved username.. " + this.state.saveUser)
            console.log("This is the saved password.. " + this.state.savePass)
            console.log("                       ");
          });
          

          console.log("This is variable.. " + variable);
    }

    function handleChange(event) {
        this.setState({ textUser: event.target.value}, () => {
            console.log("                       ");
            console.log("Printing out this user: "+ event.target.value);
            console.log("                       ");
          });
    }

    function handleChange2(event) {
        this.setState({ textPass: event.target.value}, () => {
            console.log("                       ");
            console.log("Printing out this pass: "+ event.target.value);
            console.log("                       ");
          });
    }

    /*componentDidMount() {
    
    }
  
    componentWillUnmount() {     
    
    }*/
    
    //render()
    //{
        return(

            <div className='containerStyles' style = {containerStyles}>
                <h1 align='center'>SnailMail</h1>
                <p align='center'>Username</p>
                <Textarea name='textBox' 
                    rows={1} 
                    onChange={(e) => this.handleChange(e)} 
                    placeholder="scooby@doo.net" 
                    style = {containerStyles}  
                    autofocus 
                />
                <p align='center'>
                    Password
                </p>
                <Textarea name='textBox' 
                    rows={1} 
                    onChange={(e) => this.handleChange2(e)} 
                    placeholder="Shaggy12345!" 
                    style = {containerStyles} 
                />
                <br></br>
                <Button name='loginButton' 
                    size='medium' 
                    label="Submit" 
                    onClick={(e) => this.handleSubmit(e)} 
                    style = {buttoncontainerStyle} 
                />
            </div> 
        );


        //i need to map everything together still oi vey..
        variable = this.props.loggedIn
        
        //still need to work on it..
        
    //}
}