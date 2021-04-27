import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import "./css_folder/update_package-styles.css";
import Button from 'react-rainbow-components/components/Button';
import Select from 'react-rainbow-components/components/Select';

const is_deliveredData = [
    { label: 'No' },
    { label: 'Yes' }
]
class UpdatePackage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  //initialize state properties to empty strings
            tracking_id: "",
            facility_id: "",
            time_in: "",
            time_out: "",
            is_delivered: "",
            status: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const form = new FormData(document.getElementById('updateForm'));

        alert("start fetching!");

        fetch('http://localhost:5000/backend/Update_Package', {
            method: 'POST',
            body: form,
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                this.setState({ status: result });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        alert("finished fetching!");
    }

    render() {
        return (
            <React.Fragment>

                <form className="container_update" id="updateForm">
                    <div className="h1" align='center'>
                        <h1> Update Tracking History</h1>
                    </div>

                    <div className="text_grid">

                        <Textarea
                            className="text_box1"
                            onChange={e => this.setState({ tracking_id: e.target.value })}
                            id="tracking_id"
                            name="tracking_id"
                            label="Tracking number"
                            rows={1}
                        />

                        <Textarea
                            className="text_box2"
                            onChange={e => this.setState({ facility_id: e.target.value })}
                            id="facility_id"
                            name="facility_id"
                            label="Post office ID"
                            rows={1}
                        />

                        <Textarea
                            className="text_box3"
                            onChange={e => this.setState({ time_in: e.target.value })}
                            id="time_in"
                            name="time_in"
                            label="Time in"
                            placeholder="YYYY-MM-DD HH:MM:SS"
                            rows={1}

                        />

                        <Textarea
                            className="text_box4"
                            onChange={e => this.setState({ time_out: e.target.value })}
                            id="time_out"
                            name="time_out"
                            label="Time out"
                            placeholder="YYYY-MM-DD HH:MM:SS"
                            rows={1}
                        />

                        <Select
                            className='text_box5'
                            id="id_delivered"
                            label="Delivery Status"
                            name="is_delivered"
                            options={is_deliveredData}
                        />

                        <Button
                            className="button_update"
                            label="Update"
                            variant="base"
                            type='submit'
                            onClick={this.handleSubmit}
                        />
                    </div>

                    <div className="printBlock">
                        <p align='center'>{this.state.status}</p>
                        <br></br>
                    </div>

                </form>

            </React.Fragment>
        )
    }
}
export default UpdatePackage;