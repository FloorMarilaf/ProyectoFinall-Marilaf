import React from 'react'
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const CartWidget = ({ cartLength }) => {
  return (
    <IconButton aria-label="delete">
        <Badge badgeContent={2} color="error">
            <ShoppingCartIcon htmlColor='#fff' />
        </Badge>
    </IconButton>
  )
}

export default CartWidget;