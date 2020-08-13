import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function DirectionSnackbar({ handleCloseSnack, openSnack }) {

    return (
        <Snackbar
            open={openSnack}
            onClose={handleCloseSnack}
            autoHideDuration={6000}
            message="message has been sent"
        >
            <Alert onClose={handleCloseSnack} severity="success">
                This is a success message!
        </Alert>
        </Snackbar>
    );
}