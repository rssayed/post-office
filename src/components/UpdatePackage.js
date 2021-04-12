import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import './update_package-styles.css'
import Button from 'react-rainbow-components/components/Button';



class UpdatePackage extends React.Component{
    
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
            <div className ="container_update">
            

  
                        <h1 
                        className = "header_update">
        

                        Testing up</h1>

           
            

               


           

            </div>
        )
    }

}

export default UpdatePackage
