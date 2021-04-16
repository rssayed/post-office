import React from 'react';

//import useState from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import './deletepage-styles.css';
import Button from 'react-rainbow-components/components/Button';


class DeletePackage extends React.Component{
    
    constructor(props)
    {        
        super(props);
        this.state = {
            value: "",
            // Note: think carefully before initializing
            // state based on props!
            someInitialValue: this.props.initialValue
          }
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleChange = this.handleChange.bind(this);   
    }

    componentDidMount() {
    fetch("https://blahblah").then(results => {
    // Do something with the results
    
    })}    
                 
    componentWillUnmount() {
          
        
    }
                  
    handleSubmit(e){
        // pass the onclick through the handle submit function.
        e.preventDefault();
        console.log('A value was submitted: ' + this.state.value); 
    }
          

     handleChange(e){
            this.setState({value: e.target.value});
     }
     // const [count,setCount] = useState(0);
     
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
                value = {this.state.value}
                onChange = {(e) => this.handleChange(e.target.value)}
                > </Textarea>
                
                <Button 
                 className = "button_2_delete"
                 label = "Delete"
                 onClick = {(e) => this.handleSubmit(e.target.value)}
                 variant = "base"
                >Delete</Button>

            </div>
        )
    }

}

export default DeletePackage
