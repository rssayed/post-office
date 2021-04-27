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

    handleLoad = (event) => {
        event.preventDefault();
    }
    
    handleSubmit = (event) =>
    {
        event.preventDefault();
        console.log("Testing");
    // return this.setState({
    //     username: this.state.username,
    //     password: this.state.password
    // });
    }

    render() {
        return (
            <form className='profile' onLoad={this.handleLoad}>
                <h1 align='center'>Profile Settings</h1>

                <Textarea
                    label='Customer ID'
                    name='customer_id'
                    rows='1'
                    placeholder='1234'
                    style={customer_idContainerStyles}
                    disabled
                />

                <Textarea
                    label='First Name'
                    name='fname'
                    rows='1'
                    placeholder="Mickey"
                    style={fnameContainerStyles}
                    autofocus
                />

                <Textarea
                    label='Last Name'
                    name='lname'
                    rows='1'
                    placeholder="Mouse"
                    style={lnameContainerStyles}
                />

                <Textarea
                    label='Street address'
                    name='address'
                    rows='1'
                    placeholder="Mickey Mouse Clubhouse, Disney World"
                    style={addressContainerStyles}
                />

                <Textarea
                    label='City'
                    name='city'
                    rows='1'
                    placeholder='Orlando'
                    style={cityContainerStyles}
                />

                <Select
                    label='State'
                    name='state'
                    options={lookup_data}
                    style={stateContainerStyles}
                />

                <Textarea
                    label='Zipcode'
                    name='zipcode'
                    rows='1'
                    placeholder='66666'
                    style={zipcodeContainerStyles}
                />

                <Textarea
                    label='Email'
                    name='email'
                    rows='1'
                    placeholder='mickey@disney.net'
                    style={emailContainerStyles}
                />

                <Textarea
                    label='Password'
                    name='password'
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