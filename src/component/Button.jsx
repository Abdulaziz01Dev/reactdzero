import React from 'react'
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

const MyButton = () => {
    return (
        <div>
            <Button variant="contained" color="secondary">Click me</Button>
            <Button
                loading
                variant="outlined"
                loadingPosition="end"
                startIcon={<SaveIcon />}
            >
                Save
            </Button>
        </div>
    )
}
export default MyButton
