import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import './tracking_history-styles.css';
import Button from 'react-rainbow-components/components/Button';

class Tracking_history extends React.Component{
    
    constructor(props)
    {
        super(props);
    
        this.state = {  //initialize state properties to empty strings
            input: ""
        };
        
        function handleClick()
        {
            
            this.setState(state => {
                var inputVal = document.getElementById("tracking_value").value;
                return {input: inputVal}
            })
            console.log(this.state.input)
        }
    }

    render() {
    
        return(
            <div className ="container_track">  
                    
                    <h1 
                        className = "header_track"
                        align='center'>
                        Tracking History</h1>
               
           
                    <Textarea
                        className = "delete_box_track"
                        id="tracking_value"
                        label = "Tracking number"
                        rows={1}

                    >
                    </Textarea>

                    <Button 
                        className = "button_2_track"
                        label = "Track"
                     //   onClick = {() => this.setState({ input: document.getElementById("tracking_value").value})}
                        variant = "base"
                        
                    >

                    </Button>
            </div>
        )
    }

}

export default Tracking_history