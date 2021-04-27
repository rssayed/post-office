import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
//ian is working on this swag..??

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

//passing in props to the orderHistory..
export default function OrderHistory() {

    const classes = useStyles();

    return (
        //add Date To and Date From to make this form a report
        <div>
            <TableContainer component={Paper}>
                <h1 align='center'>Order History</h1>
                <Table className={classes.table} >
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
    );
}