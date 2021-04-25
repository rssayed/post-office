import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import './tracking_history-styles.css';
import Button from 'react-rainbow-components/components/Button';



const printStyle = {
        margin: 'auto'
}

class Trackinghistory extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
            tracking_value: "",
            tracking_history: [],
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

    renderHistory(history, idx) {
        return (
            <div align='center'>
                <h2>Delivery Stop#{idx}</h2>
                {history.map((item, idx) => (
                    <div key={idx}>{JSON.stringify(item)}</div>
                ))}
            </div>
        )
    }

    render() {
    
        return(
            <React.Fragment>
                <form className ="container_track" /*onSubmit={this.handleSubmit}*/ id='form1'>  
                    <h1 className = "header_track" align='center'>Tracking History</h1>
                    
                    <Textarea                          
                        className = "delete_box_track"
                        type= 'text'
                        value = {this.state.tracking_value}
                        onChange= {e => this.setState({tracking_value: e.target.value})}
                        id="tracking_value"
                        name= "tracking_id"
                        label = "Tracking Number"
                        rows={1}
                        required
                    />
               
                <div>
                    <strong>The typed value is:</strong><span>{this.state.tracking_id}</span>
                </div>

                    <Button className= "button_2_track" label= "Track" disabled={!this.validateForm()} onClick = {this.handleSubmit} variant = "base" type='submit'></Button>
                </form>

                <div className="printBlock">
                    {this.state.tracking_history.map(this.renderHistory)}
                </div>
            </React.Fragment>
        )
    }
}

export default Trackinghistory;