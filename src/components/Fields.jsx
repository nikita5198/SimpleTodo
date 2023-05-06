import React from 'react'
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
const Fields = (props) => {
  return (
    <div className='data'>
       <div className='data_val'>
            <h4>{props.name}</h4>
            <h4>{props.email}</h4>
            <Button variant="contained" color="error"><RemoveIcon/></Button>

          </div>
    </div>
  )
}

export default Fields
