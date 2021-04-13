import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import './deletepage-styles.css';
import Button from 'react-rainbow-components/components/Button';

class DeletePackage extends React.Component{
    
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
            <div className ="container_delete">
            
            

               

                 
                   
                    <h1 
                        className = "header_delete"
                        align='center'>
                        Delete</h1>
               
           
                    <Textarea
                        className = "delete_box_delete"
                        id="tracking_value"
                        label = "Tracking number"
                        rows={1}

                    >
                    </Textarea>
               

                
            
                    <Button 
                        className = "button_2_delete"
                        label = "Delete"
                     //   onClick = {() => this.setState({ input: document.getElementById("tracking_value").value})}
                        variant = "base"
                        
                    >

                    </Button>
            

               


           

            </div>
        )
    }

}

export default DeletePackage
