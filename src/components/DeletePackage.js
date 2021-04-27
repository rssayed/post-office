import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import './css_folder/deletepage-styles.css';
import Button from 'react-rainbow-components/components/Button';


class DeletePackage extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
          tracking_id: "",
          status: ""
        }
        this.handleSubmit= this.handleSubmit.bind(this);
    }


    handleSubmit = (event) => {
        
        event.preventDefault();

        const form = new FormData(document.getElementById('deleteForm'));

        alert('start fetching');;

        fetch('http://localhost:5000/backend/delete', {
            method: 'POST',
            body: form,
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                this.setState({status: result}); 
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        alert("finish fetch!");
    }

    render() {
            
        return(
            <React.Fragment>
                <form className ="container_delete" id='deleteForm'>
                    <h1 className = "header_delete" align='center'>Delete Package</h1>
                
                    <Textarea
                    className = "delete_box_delete"
                    value = {this.state.tracking_id}
                    onChange= {e => this.setState({tracking_id: e.target.value})}
                    id="tracking_id"
                    name="tracking_id"
                    label = "Tracking Number"
                    rows={1}
                    required
                    />
    
                    <Button className="button_2_delete" label="Delete" onClick={this.handleSubmit} variant = "base" type='submit'>Delete</Button>
                </form>

                <span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p align='center'>{this.state.status}</p>
                </span>
            </React.Fragment>
            
        )
    }
}

export default DeletePackage;