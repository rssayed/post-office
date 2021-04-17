import React from 'react';

//import useState from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import './deletepage-styles.css';
import Button from 'react-rainbow-components/components/Button';


class DeletePackage extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
          textareaValue: '',
          savedVar: ''
        }
      
    }
   
    
    handleSubmit(e) {
        this.setState({ savedVar: this.state.textareaValue}, () => {
            console.log("                       ");
            console.log("Printing out this submit.."+ this.state.savedVar);
            console.log("                       ");
          });
    }

    handleChange(e) {
        this.setState({ textareaValue: e.target.value}, () => {
            console.log("Printing out this change.."+ e.target.value);
          });
        

    }

    componentDidMount() {

    //thinking about using axios..
    fetch("https://blahblah").then(results => {
    // Do something with the results
    
    })}    
                 
    componentWillUnmount() {
            
    }

        render() {
    
        return(
            <div className ="container_delete">
              
                <h1 
                    className = "header_delete"
                    align='center'>
                    Delete
                </h1>
               
           
                <Textarea
                className = "delete_box_delete"
                id="tracking_value"
                label = "Tracking number"
                rows={1}
                //value = {this.state.textareaValue}
                onChange={(e) => this.handleChange(e)}
                > </Textarea>
                
                <Button 
                 className = "button_2_delete"
                 label = "Delete"
                 onClick={(e) => this.handleSubmit(e)}
                 variant = "base"
                >Delete</Button>

            </div>
        )
    }

}

export default DeletePackage
