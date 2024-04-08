import { TextField, Typography, Button } from '@mui/material'
import React from 'react'

const Addbolg = () => {
  return (
    <div>
        <Typography variant='h4'>ADD BLOG</Typography>
        <br /><br /><br /><br />
        <TextField id="outlined-basic" label="BLOG NAME" varrint="outlined"/>
        <br /><br />
        <TextField
          id="standard-textarea"
          label="BLOG DISCRIPITON"
          placeholder="Type"
          multiline
          variant="standard"
        />
        <br /><br /><br />
        <TextField id="outlined-basic" label="Author" variant="outlined" />
        <br /><br /><br />
        <Button variant="contained">SUBMIT</Button>
    </div>
  )
}

export default Addbolg