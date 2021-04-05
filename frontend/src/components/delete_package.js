import React from 'react';
import { Textarea } from 'react-rainbow-components';
import style from './deletepage-styles.css';




function Delete_package()
{
    const containerStyles = {
        maxWidth: 700
    }
    
          
    return(
        <div className ="delete">
            
            

            <div class = "header1">
            <h1 className= "header">Delete This!</h1>
            </div>
           
  
           <div class = "box">
            <Textarea className = "delete_box">
                id="example-textarea-1"
                label="Textarea Label"
                rows={4}
                placeholder="Delete_this"
                style={containerStyles}
                className = "text"
            </Textarea>
            </div>


           

        </div>
    )
}

export default Delete_package