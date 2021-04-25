import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import './tracking_history-styles.css';
import Button from 'react-rainbow-components/components/Button';


class Trackinghistory extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            tracking_value: ""
        }
        this.handleSubmit= this.handleSubmit.bind(this);
    }
        
    validateForm()
    {
        return this.state.tracking_value != null;
    }
    
    handleSubmit = (event) =>
    {
            event.preventDefault();
        
            //const state= this.setState;
            // this.state.tracking_value= event.tracking_value;
            // this.setState(state);

            //const form='12345';

            const form = new FormData(document.getElementById('form1'));

            alert("x0x0");

            fetch('http://localhost:5000/backend/Tracking_history', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: form,
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                var obj = JSON.parse(result);
                console.log(obj['delivers.tracking_id']);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

            alert("Tracking Successful!");
    }

    render() {
    
        return(
            <form className ="container_track" /*onSubmit={this.handleSubmit}*/ id='form1'>  
                <h1 className = "header_track" align='center'>Tracking History</h1>
                
                <Textarea                          
                    className = "delete_box_track"
                    type= 'text'
                    value = {this.state.tracking_value}
                    onChange= {e => this.setState({tracking_value: e.target.value})}
                    id="tracking_value"
                    label = "Tracking Number"
                    rows={1}
                    required
                />
                <strong>The typed value is:</strong><span>{this.state.tracking_value}</span>    {/*debug onChange---> works */}
                <Button className= "button_2_track" label= "Track" disabled={!this.validateForm()} onClick = {this.handleSubmit} variant = "base" type='submit'></Button>
            </form>
        )
    }
}

export default Trackinghistory;