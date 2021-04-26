import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import './createpackage-styles.css';
import Button from 'react-rainbow-components/components/Button';

//If you don’t use it in render(), 
//it shouldn’t be in the state. For example, you can put timer IDs directly on the instance


class CreatePackage extends React.Component{
    
    constructor(props)
    {
        super(props);
    
        this.state = {  //initialize state properties to empty strings
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
        this.onSubmit= this.onSubmit.bind(this);  
    }

    validateForm() {
        return this.state.date != 0 && this.state.weight > 0 && this.state.weight < 300 && this.state.customer_id > 0 && this.state.name.length > 2 && this.state.address.length > 0 && this.state.city.length > 0 && this.state.zipcode.length > 0 && this.state.zipcode.length < 9 && this.state.gallons !== 0;
    }

    onSubmit(event)
    {
            event.preventDefault();
            /*code from backend for axios*/
            const state= this.setState;
            this.state.date= event.date;
            this.state.shipping_type = event.shipping_type;
            this.state.weight= event.weight;
            this.state.customer_id= event.customer_id;
            this.state.name= event.name;
            this.state.address= event.address;
            this.state.city= event.city;
            this.state.state= event.state;
            this.state.zipcode= event.zipcode;
            this.setState(state);

            console.log("this.state.zipcode");
            alert("Success!");
        
        // else
        // {
        //     alert('Errors in form, please review before submitting');
        // }
    }

render() 
{ 
        console.log("Do you get to the create package page..?")
        return(
    <div> 
        <div className ="containerCreate">    
            <h1 className = "header_create"> Create Package</h1>
        </div>
        <form className ="gridCreate" onSubmit={this.onSubmit}>
            <Textarea
            className = "textUp1"
            type= 'date'
            value= {this.state.date}
            onChange= {e => this.setState({date: e.target.value})}
            id="box 1"
            label = "Shipping date"
            rows={1}
            />          
            <Textarea
            className = "textUp2"
            type= 'shipping_type'
            value= {this.state.shipping_type}
            onChange= {e => this.setState({shipping_type: e.target.value})}
            id="box 2"
            label = "Shipping Type"
            rows={1}
            />
            <Textarea
            className = "textUp3"
            type= 'weight'
            value= {this.state.weight}
            onChange= {e => this.setState({weight: e.target.value})}
            id="box 3"
            label = "Weight"
            rows={1}
            />           
            <Textarea
            className = "textUp4"
            type= 'customer_id'
            value= {this.state.customer_id}
            onChange= {e => this.setState({customer_id: e.target.value})}
            id="box 4"
            label = "CustomerID"
            rows={1}
            />
            <Textarea
            className = "textUp5"
            type= 'name'
            value= {this.state.name}
            onChange= {e => this.setState({name: e.target.value})}
            id="box 5"
            label = "Name"
            rows={1}
            />
            <Textarea
            className = "textUp6"
            type= 'address'
            value= {this.state.address}
            onChange = {e => this.setState({address: e.target.value})}
            id="box 6"
            label = "Street Address"
            rows={1}
            />
            <Textarea
            className = "textUp7"
            type= 'city'
            value= {this.state.city}
            onChange= {e => this.setState({city: e.target.value})}
            id="up7"
            label = "City"
            rows={1}
            />
            <Textarea
            className = "textUp8"
            type= 'state'
            value= {this.state.state}
            onChange= {e => this.setState({state: e.target.value})}
            id="up8"
            label = "State"
            rows={1}
            />  
            <Textarea
            className = "textUp9"
            type= 'zipcode'
            value= {this.state.zipcode}
            onChange= {e => this.setState({zipcode: e.target.value})}
            id="up9"
            label = "Zipcode"
            rows={1}
            />
            <Button className= "buttonCreate" label= "Create" variant= "base" disabled={!this.validateForm()} onClick={this.onSubmit}>Create</Button>                 
        </form>                
    </div>           
        )
        console.log("Do you get to the create package page..?")
}
}

export default CreatePackage;