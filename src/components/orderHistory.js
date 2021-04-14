import React from 'react';
import './orderHistory.css';

const conatinerStyles = {
    margin: 'auto',
    top: 150,
    border: 1,
    display: 'block'
}

function orderHistory(){

    return(
        <div className='orderHistoryForm'>
            <h1 align='center'>Order History</h1>
            <table id='orderHistoryTable' align='center' cellSpacing='0'>
                <tr>
                    <td>Tracking Number</td>
                    <td>Recipient Name</td>
                    <td>Address</td>
                    <td>City</td>
                    <td>State</td>
                    <td>Zipcode</td>
                    <td>Shipped On</td>
                    <td>Delivered On</td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>Rick Grimes</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>Nick Jones</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    );
}

export default orderHistory;