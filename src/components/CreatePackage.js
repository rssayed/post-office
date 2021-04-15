import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import './createpackage-styles.css';
import Button from 'react-rainbow-components/components/Button';

class CreatePackage extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state = {  //initialize state properties to empty strings
            input: ""
        };

        function handleClick(event)
        {
            this.setState(state => {
                var inputVal = document.getElementById("tracking_value").value;
                return {input: inputVal}
            })
            console.log(this.state.input)
        }
    }

    render(){

        return(
            <div> 
                <div className ="containerCreate">
                <h1 className = "header_create"> Create Package</h1>
                </div>

                <div className ="gridCreate">
                    <Textarea
                        className = "textUp1"
                        id="box 1"
                        label = "Shipping date"
                        rows={1}
                    />
                    <Textarea
                        className = "textUp2"
                        id="box 2"
                        label = "Shipping Type"
                        rows={1}
                    />
                    <Textarea
                        className = "textUp3"
                        id="box 3"
                        label = "Weight"
                        rows={1}
                    />
                    <Textarea
                        className = "textUp4"
                        id="box 4"
                        label = "CustomerID"
                        rows={1}
                    />
                    <Textarea
                        className = "textUp5"
                        id="box 5"
                        label = "Name"
                        rows={1}
                    />
                    <Textarea
                        className = "textUp6"
                        id="box 6"
                        label = "Street Address"
                        rows={1}
                    />
                    <Textarea
                        className = "textUp7"
                        id="up7"
                        label = "City"
                        rows={1}
                    />
                    <Textarea
                        className = "textUp8"
                        id="up 8"
                        label = "State"
                        rows={1}
                    />
                    <Textarea
                        className = "textUp9"
                        id="up 9"
                        label = "Zipcode"
                        rows={1}
                    />
                    <Button 
                        className = "buttonCreate"
                        label = "Update"
                        variant = "base"
                    />
                </div>
                    
            </div>
        )
    }
}

export default CreatePackage;