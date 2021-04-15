import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import './deletepage-styles.css';
import Button from 'react-rainbow-components/components/Button';

class DeletePackage extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            
            loggedIn: "testing",
            currentState: "not-panic",
            
            // Note: think carefully before initializing
            // state based on props!
            someInitialValue: this.props.initialValue
          }
        }
        componentDidMount() {
           
          }
          componentWillUnmount() {
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
