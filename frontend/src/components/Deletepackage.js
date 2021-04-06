import React from 'react';
import { Spinner, Textarea } from 'react-rainbow-components';

import style from './deletepage-styles.css';

import { Button } from 'react-rainbow-components';
import { render } from 'react-dom';


class Deletepackage extends React.Component{
    
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
            <div className ="container2">
            
            

               

                 
                    <div className = "nav_bar" align = "center"> 
                    <h1> hello there</h1>
                    </div>
                    <h1 
                        className = "header"
                        align='center'>
                        Delete Delivery</h1>
               
           
                    <Textarea
                        className = "delete_box"
                        id="tracking_value"
                        label = "Tracking number"
                        rows={1}

                    >
                    </Textarea>
               

                
            
                    <Button 
                        className = "button_2"
                        label = "Delete"
                     //   onClick = {() => this.setState({ input: document.getElementById("tracking_value").value})}
                        variant = "base"
                        
                    >

                    </Button>
            

               


           

            </div>
        )
    }

}

export default Deletepackage
