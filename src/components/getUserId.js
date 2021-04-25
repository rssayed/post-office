import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import Button from 'react-rainbow-components/components/Button';

const fnameContainerStyles = {
    margin: 'auto',
    maxWidth: 300,
    top: 150
}

const lnameContainerStyles = {
    margin: 'auto',
    maxWidth: 300,
    top: 175
}

const emailContainerStyles = {
    margin: 'auto',
    maxWidth: 300,
    top: 200
}

const buttonContainerStyle = {
    backgroundColor: '#0645AE',
    borderColor: '#0645AE',
    color: '#ffffff',
    margin: 'auto',
    display:'block',
    top: 250
}

class GetUserId extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            fname: "",
            lname:"",
            email: ""
        }
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(document.getElementById('getUserIdForm'));
        fetch('http://localhost:5000/backend/Tracking_history', {
            method: 'POST',
            body: form,
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);            //need to figure out how to print the response on the webpage
                this.setState({tracking_history: result});  // for some reason the backend is returning an array of arrays, get first array
            })
            .catch((error) => {
                console.error('Error:', error);
            });

            alert("Tracking Successful!");
    }

    render(){
        return(
            <form name='getUserIdForm'>
                <h1 align='center'>Get User ID</h1>
                <Textarea
                    label='First Name'
                    name='fname'
                    rows='1'
                    style={fnameContainerStyles}
                />
                <Textarea
                    label='Last Name'
                    name='lname'
                    rows='1'
                    style={lnameContainerStyles}
                />
                <Textarea
                    label='Email'
                    name='email'
                    rows='1'
                    style={emailContainerStyles}
                />
                <Button
                    label='Get'
                    name='getButton'
                    size='medium'
                    onClick={this.handleSubmit}
                    style={buttonContainerStyle}
                    variant='base'
                    type="submit"
                />
            </form>
        )
    }
}

export default GetUserId;