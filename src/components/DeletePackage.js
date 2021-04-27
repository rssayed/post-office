import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import styles from "./css_folder/deletepage-styles.css";
import Button from 'react-rainbow-components/components/Button';

class DeletePackage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tracking_value: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    validateForm() {
        return this.state.tracking_value != null;
    }

    onSubmit(event) {
        if (this.validateForm) {
            event.preventDefault();
            const state = this.setState;
            this.state.tracking_value = event.tracking_value;
            this.setState(state);
            console.log("this.state.tracking_value");
            alert("Delivery deleted");
        }

        else {
            alert("Tracking Number missing, please enter tracking number for delivery");
        }
    }

    render() {
        return (
            <form className="container_delete">
                <h1 className="header_delete" align='center'>Delete Package</h1>
                <Textarea
                    className="delete_box_delete"
                    type='tracking_value'
                    value={this.state.tracking_value}
                    onChange={e => this.setState({ tracking_value: e.target.value })}
                    id="tracking_value"
                    label="Tracking Number"
                    rows={1}
                />
                <Button className="button_2_delete" label="Delete" disabled={!this.validateForm()} onClick={this.onSubmit} variant="base">Delete</Button>
            </form>
        )
    }
}
export default DeletePackage;