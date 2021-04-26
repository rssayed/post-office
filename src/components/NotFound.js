import React from "react";

//cannot read property of map undefined
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
        console.log(this.props)
      return (    
        <div className = "container"> 
        <h1> Cannot read property map of undefined.. inside props.routes.map in..</h1>
        <h1> Nav bar.. which means there is no path??</h1>
        </div>
        )      
    }
        }
        export default NotFound;