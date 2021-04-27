import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import Button from 'react-rainbow-components/components/Button';
import Select from 'react-rainbow-components/components/Select';

const entityContainerStyles = {
    margin: 'auto',
    maxWidth: 150
}

const fnameContainerStyles = {
    margin: 'auto',
    maxWidth: 300,
    top: 25
}

const lnameContainerStyles = {
    margin: 'auto',
    maxWidth: 300,
    top: 50
}

const addressContainerStyles = {
    margin: 'auto',
    maxWidth: 700,
    top: 75
}

const cityContainerStyles = {
    margin: 'auto',
    maxWidth: 200,
    top: 100
}

const stateContainerStyles = {
    margin: 'auto',
    maxWidth: 200,
    top: 125
}

const zipcodeContainerStyles = {
    margin: 'auto',
    maxWidth: 200,
    top: 150
}

const emailContainerStyles = {
    margin: 'auto',
    maxWidth: 300,
    top: 175
}

const passwordContainerStyles = {
    margin: 'auto',
    maxWidth: 300,
    top: 200
}

const buttonContainerStyle = {
    backgroundColor: '#0645AE',
    borderColor: '#0645AE',
    color: '#ffffff',
    margin: 'auto',
    display: 'block',
    top: 225,
    //bottom: 200     /*does not work, need space below button*/
}

const lookup_data = [
    { label: 'AL' },
    { label: 'AK' },
    { label: 'AZ' },
    { label: 'AR' },
    { label: 'CA' },
    { label: 'CO' },
    { label: 'CT' },
    { label: 'DE' },
    { label: 'FL' },
    { label: 'GA' },
    { label: 'HI' },
    { label: 'ID' },
    { label: 'IL' },
    { label: 'IN' },
    { label: 'IA' },
    { label: 'KS' },
    { label: 'KY' },
    { label: 'LA' },
    { label: 'ME' },
    { label: 'MD' },
    { label: 'MA' },
    { label: 'MI' },
    { label: 'MN' },
    { label: 'MS' },
    { label: 'MO' },
    { label: 'MT' },
    { label: 'NE' },
    { label: 'NV' },
    { label: 'NH' },
    { label: 'NJ' },
    { label: 'NM' },
    { label: 'NY' },
    { label: 'NC' },
    { label: 'ND' },
    { label: 'OH' },
    { label: 'OK' },
    { label: 'OR' },
    { label: 'PA' },
    { label: 'RI' },
    { label: 'SC' },
    { label: 'SD' },
    { label: 'TN' },
    { label: 'TX' },
    { label: 'UT' },
    { label: 'VT' },
    { label: 'VA' },
    { label: 'WA' },
    { label: 'WV' },
    { label: 'WI' },
    { label: 'WY' }
];

const entity_lookup = [
    { label: 'Customer' },
    { label: 'Employee' }
];

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entity: "",
            fname: "",
            lname: "",
            street_address: "",
            city: "",
            state: "",
            zipcode: "",
            email: "",
            customer_password: "",
            user_id: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(document.getElementById('createUserForm'));
        alert("x0x0");
        fetch('http://localhost:5000/backend/createUser', {
            method: 'POST',
            body: form,
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                this.setState({ user_id: result });
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        alert("Create Successful!");
    }

    render() {
        return (
            <React.Fragment>

                <form id="createUserForm">
                    <h1 align='center'>Create Customer</h1>

                    <Select
                        label='Add new'
                        name='entity'
                        options={entity_lookup}
                        value={this.state.entity}
                        onChange={e => this.setState({ entity: e.target.value })}
                        id='entity'
                        style={entityContainerStyles}
                        autofocus
                    />

                    <Textarea
                        label='First Name'
                        name='fname'
                        type='text'
                        value={this.state.fname}
                        onChange={e => this.setState({ fname: e.target.value })}
                        id='fname'
                        rows='1'
                        placeholder="Mickey"
                        style={fnameContainerStyles}
                    />

                    <Textarea
                        label='Last Name'
                        name='lname'
                        type='text'
                        value={this.state.lname}
                        onChange={e => this.setState({ lname: e.target.value })}
                        id='lname'
                        rows='1'
                        placeholder="Mouse"
                        style={lnameContainerStyles}
                    />

                    <Textarea
                        label='Street address'
                        name='address'
                        type='text'
                        value= {this.state.street_address}
                        onChange= {e => this.setState({street_address: e.target.value})}
                        id= 'address'
                        rows='1' 
                        placeholder="Mickey Mouse Clubhouse, Disney World" 
                        style={addressContainerStyles}
                    />

                    <Textarea
                        label='City'
                        name='city'
                        type='text'
                        value={this.state.city}
                        onChange={e => this.setState({ city: e.target.value })}
                        id='city'
                        rows='1'
                        placeholder='Orlando'
                        style={cityContainerStyles}
                    />

                    <Select
                        label='State'
                        name='state'
                        type='text'
                        value={this.state.state}
                        onChange={e => this.setState({ state: e.target.value })}
                        id='state'
                        options={lookup_data}
                        style={stateContainerStyles}
                    />

                    <Textarea
                        label='Zipcode'
                        name='zipcode'
                        type='text'
                        value={this.state.zipcode}
                        onChange={e => this.setState({ zipcode: e.target.value })}
                        id='zipcode'
                        rows='1'
                        placeholder='66666'
                        style={zipcodeContainerStyles}
                    />

                    <Textarea
                        label='Email'
                        name='email'
                        type='email'
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                        id='email'
                        rows='1'
                        placeholder='mickey@disney.net'
                        style={emailContainerStyles}
                    />

                    <Textarea
                        label='Password'
                        name='customer_password'
                        type='password'
                        value={this.state.customer_password}
                        onChange={e => this.setState({ customer_password: e.target.value })}
                        id='customer_password'
                        rows='1'
                        placeholder='Minnie#1'
                        style={passwordContainerStyles}
                    />

                    <Button
                        label='Submit'
                        name='submitButton'
                        size='medium'
                        onClick={this.handleSubmit}
                        type='submit'
                        style={buttonContainerStyle}
                    />

                </form>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p align='center'>User ID: {this.state.user_id}</p>
                </div>
            </React.Fragment>
        );
    }
}
export default Profile;
