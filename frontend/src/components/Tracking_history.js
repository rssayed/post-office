import React from 'react';
import { Spinner, Textarea } from 'react-rainbow-components';

import style from './tracking_history-styles.css';

import { Button } from 'react-rainbow-components';
import { render } from 'react-dom';


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
            <div className ="container">
            
            

               

                 
                    <div className = "nav_bar" align = "center"> 
                    <h1> hello there</h1>
                    </div>
                    <h1 
                        className = "header"
                        align='center'>
                        Tracking History</h1>
               
           
                    <Textarea
                        className = "delete_box"
                        id="tracking_value"
                        label = "Tracking number"
                        rows={1}

                    >
                    </Textarea>
               

                
            
                    <Button 
                        className = "button_2"
                        label = "Tracking"
                     //   onClick = {() => this.setState({ input: document.getElementById("tracking_value").value})}
                        variant = "base"
                        
                    >

                    </Button>
            

               


           

            </div>
        )
    }

}

export default Tracking_history