import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import styles from "./css_folder/createpackage-styles.css";
import Button from 'react-rainbow-components/components/Button';


async function validateForm() {
    return this.state.date != 0 && this.state.weight > 0 && this.state.weight < 300 && this.state.customer_id > 0 && this.state.name.length > 2 && this.state.address.length > 0 && this.state.city.length > 0 && this.state.zipcode.length > 0 && this.state.zipcode.length < 9 && this.state.gallons !== 0;
}
class CreatePackage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: "",
            shipping_type: "",
            weight: "",
            customer_id: "",
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: ""
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {

        console.log("Hello..", this.date, this.shipping_type)
        event.preventDefault();
            const form = new FormData(document.getElementById('form3'));
            
            fetch('http://localhost:5000/backend/CreatePackage', {
                method: 'POST',
                body: form,
            })
                .then(response => response.json())          //need to send back a string..
                .then(result => {
                    console.log('Works..:', result);
                    //i need it to pass back the role permission through login..
                    //else pass back "no_permission"
                    console.log("hiiii");
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert("Caught an error..", error)
                });

        console.log("this.state.zipcode");
        alert("Success!");

    }
    async validateForm() {
        return this.state.date != 0 && this.state.weight > 0 && this.state.weight < 300 && this.state.customer_id > 0 && this.state.name.length > 2 && this.state.address.length > 0 && this.state.city.length > 0 && this.state.zipcode.length > 0 && this.state.zipcode.length < 9 && this.state.gallons !== 0;
    }
    render() {
        console.log("Do you get to the create package page..?")
        return (
            <div>
                <form className="container_login" /*onSubmit={this.handleSubmit}*/ id='form3'>
                <div>
                    <div className="containerCreate">
                        <h1 className="header_create"> Create Package</h1>
                    </div>

                    <Textarea
                        className="textUp1"
                        type='date'
                        name = "shipping_date"
                        value={this.state.date}
                        onChange={e => this.setState({ date: e.target.value })}
                        id="box 1"
                        label="Shipping date"
                        rows={1}
                    />

                    <Textarea
                        className="textUp2"
                        type='shipping_type'
                        name = "type"
                        value={this.state.shipping_type}
                        onChange={e => this.setState({ shipping_type: e.target.value })}
                        id="box 2"
                        label="Shipping Type"
                        rows={1}
                    />

                    <Textarea
                        className="textUp3"
                        type='weight'
                        name = "weight"
                        value={this.state.weight}
                        onChange={e => this.setState({ weight: e.target.value })}
                        id="box 3"
                        label="Weight"
                        rows={1}
                    />

                    <Textarea
                        className="textUp4"
                        type='customer_id'
                        name = "customer_id"
                        value={this.state.customer_id}
                        onChange={e => this.setState({ customer_id: e.target.value })}
                        id="box 4"
                        label="CustomerID"
                        rows={1}
                    />

                    <Textarea
                        className="textUp5"
                        type='name'
                        name = "name"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                        id="box 5"
                        label="Name"
                        rows={1}
                    />

                    <Textarea
                        className="textUp6"
                        type='address'
                        name = "return_street_address"
                        value={this.state.address}
                        onChange={e => this.setState({ address: e.target.value })}
                        id="box 6"
                        label="Street Address"
                        rows={1}
                    />

                    <Textarea
                        className="textUp7"
                        name = "return_city"
                        type='city'
                        value={this.state.city}
                        onChange={e => this.setState({ city: e.target.value })}
                        id="up7"
                        label="City"
                        rows={1}
                    />

                    <Textarea
                        className="textUp8"
                        type='state'
                        value={this.state.state}
                        onChange={e => this.setState({ state: e.target.value })}
                        id="up8"
                        label="State"
                        rows={1}
                        name = "return_state"
                    />

                    <Textarea
                        className="textUp9"
                        type='zipcode'
                        value={this.state.zipcode}
                        onChange={e => this.setState({ zipcode: e.target.value })}
                        id="up9"
                        name = "return_zipcode"
                        label="Zipcode"
                        rows={1}
                    />

                    <Button className="buttonCreate" label="Create" variant="base" disabled={!this.validateForm()} onClick={this.onSubmit}>Create</Button>

                </div>
                </form>
            </div>
        )
        console.log("Do you get to the create package page..?")
    }
}
export default CreatePackage;