import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Textarea from 'react-rainbow-components/components/Textarea';
import { useState } from 'react';
import Button from 'react-rainbow-components/components/Button';
import './css_folder/orderHistory-styles.css';

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

function createData(tracking_id, reciever, shipped, delivered) {
    return { tracking_id, reciever, shipped, delivered };
}

const rows = [
    createData(12345, 'Nick Grimes', '2021-03-02 10:23:54', '2021-03-09 12:00:00'),
    createData(45678, 'Rick Jones', '2021-02-04 09:22:18', '2021-02-14 06:13:44')
];

const useStyles = makeStyles({
    table: {
        maxWidth: 1200,
        margin: 'auto'
    }
});
const filterData = (value) => {


}

export default function OrderHistory() {

    function handleSubmit(event) {
        event.preventDefault();
        const form = new FormData(document.getElementById('form4'));

        fetch('http://localhost:5000/backend/orderHistory', {
            method: 'POST',
            body: form,
        })
            .then(response => response.json())
            .then(result => {
                console.log('Works..:', result);                console.log("hiiii");
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Caught an error..", error)
            });

        console.log("this.state.zipcode");
        alert("Success!");

    };

    const classes = useStyles();
    const [DateFrom, setDateFrom] = useState("");
    const [DateTo, setDateTo] = useState("");
    //2021-02-04 09:22:18

    return (
        //add Date To and Date From to make this form a report
        <form className="orderContainer" id='form4'>
                <div className="header">
                <h1 align='center'>Order History</h1>
                    </div>
            <Textarea
                className="DateFrom"
                type='date'
                name="DateFrom" //make sure this is right in app.py
                value={DateTo}
                onChange={(e) => setDateTo(e.target.value)}
                placeholder="YYYY-MM-DD HH:MM:SS"
                id="box 1"
                label="DateFrom"
                rows={1}
            />

            <Textarea
                className="DateTo"
                type='date'
                name="DateTo"  //make sure this is right in app.py
                value={DateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                placeholder="YYYY-MM-DD HH:MM:SS"
                id="box 1"
                label="DateTo"
                rows={1}
            />

            <Button className="buttonFilter" label="Delete" onClick={(e) => handleSubmit(e)} variant="base" type='submit'>Filter</Button>

            <div className="Table">
                <TableContainer component={Paper}>
                    <Table className={"Table"} >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Tracking Number</StyledTableCell>
                                <StyledTableCell>Recipient Name</StyledTableCell>
                                <StyledTableCell>Shipped On</StyledTableCell>
                                <StyledTableCell>Delivered On</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.tracking_id}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.tracking_id}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.reciever}</StyledTableCell>
                                    <StyledTableCell align="left">{row.shipped}</StyledTableCell>
                                    <StyledTableCell align="left">{row.delivered}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </form >
    );
}