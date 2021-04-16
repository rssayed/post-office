import React from "react";
import Navigation from './Navigation';

//need to do authentication stuff up here..
// eslint-disable-next-line no-use-before-define

    //props.history.push
    //auth.logout
    //onclick
    class Home extends React.Component{
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
        
        
        
        <Navigation />

        )

        //need to do authentication stuff up here..
        // eslint-disable-next-line no-use-before-define

        //props.history.push
        //auth.logout
        //onclick
        //need to have the props in here so I can assign the navbar
        //to the user session and the app pretty much..

        //(Only show the navbar when you are logged in)
        
    }
        }
        export default Home;