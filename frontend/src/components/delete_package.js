import React from 'react';
import { Textarea } from 'react-rainbow-components';

import './deletepage.css';




function Delete_package()
{
    const containerStyles = {
        maxWidth: 700
    }
    
          
    return(
        <div className = "blah">
            
            

            <div class = "header">
            <h1>Delete this</h1>
            </div>
           
  
           <div class = "delete_box">
            <Textarea
                id="example-textarea-1"
                label="Textarea Label"
                rows={4}
                placeholder="Delete_this"
                style={containerStyles}
                className = "text"
            />
            </div>


           

        </div>
    )
}

export default Delete_package()