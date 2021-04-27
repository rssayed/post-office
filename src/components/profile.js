import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import Button from 'react-rainbow-components/components/Button';
import Select from 'react-rainbow-components/components/Select';

const customer_idContainerStyles = {
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
    bottom: 200     /*does not work, need space below button*/
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

// function filter(query, options) {
//     if (query) {
//         return options.filter(item => {
//             const regex = new RegExp(query, 'i');
//             return regex.test(item.label);
//         });
//     }
//     return [];
// }

// function lookup_search(value) {
//     if (this.state.options && this.state.value && value.length > this.state.value.length) {
//         this.setState({
//             options: filter(value, this.state.options),
//             value,
//         });
//     } else if (value) {
//         this.setState({
//             value,
//         });
//         this.setState({
//             options: filter(value, lookup_data),
//             value,
//         });
//     } else {
//         this.setState({
//             value: '',
//             options: null,
//         });
//     }
// }

class Profile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            customer_id: "",
            fname: "",
            lname: "",
            street_address: "",
            city: "",
            state: "",
            zipcode: "",
            email: "",
            customer_password: ""
        }
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleLoad = (event) => {
    //     event.preventDefault();
    // }
    
    componentDidMount(){
        const form = new FormData(document.getElementById('profileForm'))
        fetch('http://localhost:5000/backend/getProfile', {
            method: 'POST',
            body: form,
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                this.setState({ 
                    customer_id: result['customer_id'],
                    fname: result['fname'],
                    lname: result['lname'],
                    street_address: result['street_address'],
                    city: result['city'],
                    state: result['state'],
                    zipcode: result['zipcode'],
                    email: result['email'],
                    customer_password: result['customer_password']
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        alert("Get Successful!");
    }

    render() {
        return (
            <form className='profile' id='profileForm'>
                <h1 align='center'>Profile Settings</h1>

                <Textarea
                    label='Customer ID'
                    name='customer_id'
                    value={this.state.customer_id}
                    onChange={e => this.setState({ customer_id: e.target.value })}
                    id='customer_id'
                    rows='1'
                    placeholder='1234'
                    style={customer_idContainerStyles}
                    disabled
                />

                <Textarea
                    label='First Name'
                    name='fname'
                    value={this.state.fname}
                    onChange={e => this.setState({ fname: e.target.value })}
                    id='fname'
                    rows='1'
                    placeholder="Mickey"
                    style={fnameContainerStyles}
                    autofocus
                />

                <Textarea
                    label='Last Name'
                    name='lname'
                    value={this.state.lname}
                    onChange={e => this.setState({ lname: e.target.value })}
                    id='lname'
                    rows='1'
                    placeholder="Mouse"
                    style={lnameContainerStyles}
                />

                <Textarea
                    label='Street address'
                    name='street_address'
                    value={this.state.street_address}
                    onChange={e => this.setState({ street_address: e.target.value })}
                    id='street_address'
                    rows='1'
                    placeholder="Mickey Mouse Clubhouse, Disney World"
                    style={addressContainerStyles}
                />

                <Textarea
                    label='City'
                    name='city'
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
                    value={this.state.state}
                    onChange={e => this.setState({ state: e.target.value })}
                    id='state'
                    options={lookup_data}
                    style={stateContainerStyles}
                />

                <Textarea
                    label='Zipcode'
                    name='zipcode'
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
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                    id='email'
                    rows='1'
                    placeholder='mickey@disney.net'
                    style={emailContainerStyles}
                />

                <Textarea
                    label='Password'
                    name='password'
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                    id='password'
                    rows='1'
                    placeholder='Minnie#1'
                    style={passwordContainerStyles}
                />

                <Button
                    label='Update'
                    name='updateButton'
                    size='medium'
                    onClick = {this.handleSubmit}
                    style={buttonContainerStyle}
                />

            </form>
        );
    }
}
export default Profile;