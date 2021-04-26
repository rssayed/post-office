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
              
    }

    render() {
        return(    
            <div> 
            <div className ="container_update">
                <h1 className = "header_update"> Update Tracking History</h1>
            </div>

            <div className ="text_grid">
                <Textarea
                        className = "text_box1"
                        id="box 1"
                        label = "Tracking number"
                        rows={1}
                />
                <Textarea
                        className = "text_box2"
                        id="box 2"
                        label = "Post office ID"
                        rows={1}

                />
                <Textarea
                        className = "text_box3"
                        id="box 3"
                        label = "Time in"
                        rows={1}

                />
                <Textarea
                        className = "text_box4"
                        id="box 4"
                        label = "Time out"
                        rows={1}
                />
                <Textarea
                        className = "text_box5"
                        id="box 5"
                        label = "Delivery Status"
                        rows={1}
                />
                <Button 
                    className = "button_update"
                    label = "Track"
                    variant = "base"
                />
            </div>      
        </div>    
        )
    }
}

export default UpdatePackage;