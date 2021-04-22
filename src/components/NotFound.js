import React from "react";


    class NotFound extends React.Component{
        constructor(props)
        {
            super(props);
            this.state = {  //initialize state properties to empty strings
                input: ""
            };
                  
        }

    render() 
    {
      return (
        
        <div className = "container"> 
        <h1> 404 error</h1>
        <h1> Please return to the home page.</h1>
        </div>
        
        

        )      
    }
        }
        export default NotFound;