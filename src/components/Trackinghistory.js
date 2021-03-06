import React from 'react';
import Textarea from 'react-rainbow-components/components/Textarea';
import styles from "./css_folder/tracking_history-styles.css";
import Button from 'react-rainbow-components/components/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const printStyle = {
    margin: 'auto'
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#0645AE',
        color: theme.palette.common.white,
        fontSize: 18
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        }
    }
}))(TableRow);

class Trackinghistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tracking_value: "",
            tracking_history: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.tracking_value != null;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(document.getElementById('form1'));
        alert("start fetching!");
        fetch('http://localhost:5000/backend/Tracking_history', {
            method: 'POST',
            body: form,
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                this.setState({ tracking_history: result });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        alert("Tracking Successful!");
    }

    renderHistory(history, idx) {
        return (
            <TableContainer componenet={Paper}>
                <Table >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Time in</StyledTableCell>
                            <StyledTableCell>Time out</StyledTableCell>
                            <StyledTableCell>Delivery Status</StyledTableCell>
                            <StyledTableCell>Location</StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            {history.map((item, idx) => (
                                <StyledTableCell key={idx}>{(item)}</StyledTableCell>
                            ))}
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

    render() {
        return (
            <React.Fragment>
                <form className="container_track" id='form1'>
                    <div className="h1" align='center'>
                        <h1> Tracking History</h1>
                    </div>

                    <Textarea
                        className="delete_box_track"
                        type='text'
                        value={this.state.tracking_value}
                        onChange={e => this.setState({ tracking_value: e.target.value })}
                        id="tracking_value"
                        name="tracking_id"
                        label="Tracking Number"
                        rows={1}
                        required
                    />

                    <Button className="button_2_track" label="Track" disabled={!this.validateForm()} onClick={this.handleSubmit} variant="base" type='submit'></Button>

                    <div className="printBlock">
                        <br></br>
                        <br></br>
                        <br></br>
                        {this.state.tracking_history.map(this.renderHistory)}

                    </div>
                </form>
            </React.Fragment>
        )
    }
}
export default Trackinghistory;