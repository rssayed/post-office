import React from 'react';

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
            <table style={conatinerStyles}>
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
                
            </table>
        </div>
    );
}

export default orderHistory;