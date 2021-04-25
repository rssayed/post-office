import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';

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

class GetUserId extends React.Component {

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
            </form>
        )
    }
}

export default GetUserId;