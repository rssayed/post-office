import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea'
import Button from 'react-rainbow-components/components/Button';
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


class login extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
          textUser: '',
          saveUser: '',
          textPass: '',
          savePass: ''
        }
      
    }
    
   
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ saveUser: this.state.textUser, savePass: this.state.textPass}, () => {
            console.log("                       ");
            console.log("This is the saved username.. " + this.state.saveUser)
            console.log("This is the saved password.. " + this.state.savePass)
            console.log("                       ");
          });
    }

    handleChange(e) {
        this.setState({ textUser: e.target.value}, () => {
            console.log("                       ");
            console.log("Printing out this user: "+ e.target.value);
            console.log("                       ");
          });
    }

    handleChange2(e) {
        this.setState({ textPass: e.target.value}, () => {
            console.log("                       ");
            console.log("Printing out this pass: "+ e.target.value);
            console.log("                       ");
          });
    }

    componentDidMount() {
    
    }    
  
    componentWillUnmount() {     
    
    }
    
    render()
    {
        return(

        <div className='containerStyles' style = {containerStyles}>
            <h1 align='center'>SnailMail</h1>
            <p align='center'>Username</p>
            <Textarea name='textBox' rows='1' onChange={(e) => this.handleChange(e)} placeholder="scooby@doo.net" style = {containerStyles}  autofocus />
            <p align='center'>Password</p>
            <Textarea name='textBox' rows='1' onChange={(e) => this.handleChange2(e)} placeholder="Shaggy12345!" style = {containerStyles} />
            <br></br>
            <Button name='loginButton' size='medium' label="Submit" onClick={(e) => this.handleSubmit(e)} style = {buttoncontainerStyle} ></Button>
        </div> );
        
    }
}
    
export default login