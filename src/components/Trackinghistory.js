import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import './tracking_history-styles.css';
import Button from 'react-rainbow-components/components/Button';




//still need to fix the formatting for this!!
class Trackinghistory extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state = {  //initialize state properties to empty strings
            tracking_value: ""
        }
        this.onSubmit= this.onSubmit.bind(this);
    }
        
    validateForm()
    {
        return this.state.tracking_value != null;
    }
    
    onSubmit(event) 
    {
          if(this.validateForm)
          {
            event.preventDefault();
            const state= this.setState;
            this.state.tracking_value= event.tracking_value;
            this.setState(state);
            /*backend axios code for HTTP request*/
            
            console.log("this.state.tracking_value");
            alert("Tracking Successful!");
          }
          else{
              alert("Tracking Number missing, please enter tracking number for delivery");
          }
    }
    
    /*handleClick()
        { 
            this.setState(state => {
                var inputVal = document.getElementById("tracking_value").value;
                return {input: inputVal}
            })
            console.log(this.state.input)
        }
    }*/

    render() {
    
        return(
            <form className ="container_track">  
                <h1 className = "header_track" align='center'>Tracking History</h1>
                
                <Textarea
                    className = "delete_box_track"
                    type= 'tracking_value'
                    value = {this.state.tracking_value}
                    onChange= {e => this.setState({tracking_value: e.target.value})}
                    id="tracking_value"
                    label = "Tracking Number"
                    rows={1}
                />
                
                <Button className = "button_2_track" label = "Track" disabled={!this.validateForm()} onClick = {this.onSubmit} variant = "base"></Button>
            </form>
        )
    }
}

export default Trackinghistory
