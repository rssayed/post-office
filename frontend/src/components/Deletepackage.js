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
    

    
        const containerStyles = {
            maxWidth: 500
        }
        
 
        return(
            <div className ="delete">
            
            

                <div class = "header1">
            
                    <div className = "fake_nav">
                    <h3>This is navbar</h3>


                    </div>
            
            
                    <h1 className= "header">Delete Delivery</h1>
                </div>
           
  
                <div class = "box">
                    <h1 className = "Tracking_num">
                        Tracking number:
                    </h1>
                    <Textarea className = "delete_box"
                        id="tracking_value"
                        rows={1}
                        style={containerStyles}
                
                    >
                    </Textarea>
                </div>

                <div class = "big_blue_butt">
            
                    <Button
                        label = "Delete"
                     //   onClick = {() => this.setState({ input: document.getElementById("tracking_value").value})}
                        variant = "base"
                        className = "button"
                    >

                    </Button>
            

                </div>


           

            </div>
        )
    }

}

export default Deletepackage
