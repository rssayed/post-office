import React from 'react';
import { Textarea } from 'react-rainbow-components';
import 'deletepage.css';

function Text_box()
{
    const containerStyles = {
        maxWidth: 700
    }
    return(
        <div className = "blah">
            
            

            <div class = "header"> 
            <h1>Delete this</h1>
            </div>
           
  
           <delete_box>
            <Textarea
                id="example-textarea-1"
                label="Textarea Label"
                rows={4}
                placeholder="Delete_this"
                style={containerStyles}
                className = "text"
            />
            </delete_box>


           

        </div>
    )
}

export default Text_box