import React from 'react'
import { CheckCircle } from '@mui/icons-material';
import "./OrderSuccess.css";
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
        <CheckCircle/>

        <Typography>Your Order has been Placed Successfully</Typography>
        <Link to = "/orders"  >View Orders</Link>
    </div>
  )
}

export default OrderSuccess