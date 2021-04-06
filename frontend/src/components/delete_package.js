import React from 'react';
import { Textarea } from 'react-rainbow-components';
import style from './deletepage-styles.css';
import { Button } from 'react-rainbow-components';



function Delete_package()
{
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
                    id="example-textarea-1"
                    rows={1}
                    style={containerStyles}
                
                >
                </Textarea>
            </div>

            <div class = "big_blue_butt">
            
                <Button
                    shaded
                    label = "Delete"
                    onClick={() => alert('Deleted')}
                    variant = "base"
                    shaded = "true"
                    className = "button"
                >

                </Button>
            

            </div>


           

        </div>
    )
}

export default Delete_package