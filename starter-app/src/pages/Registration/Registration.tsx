import React, {useContext} from 'react'
import {Box, Button, CircularProgress, TextField, Typography, Snackbar} from '@mui/material'
import RegistrationStore from "./RegistrationStore";
import {AppStoreContext} from "../../App";
import {observer} from "mobx-react-lite";
import { useNavigate} from "react-router-dom";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Registration = () => {
    const navigate = useNavigate();
    const appStore = useContext(AppStoreContext);
    const store = new RegistrationStore(appStore.authStore);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
     };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
     };

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h5">
                Registration
            </Typography>
            <Button onClick={() => navigate(`/login`)} color="secondary">
            Already have an account?? Sign in</Button>
            <Box component="form"
                 onSubmit={async (event) =>
                 {
                     event.preventDefault()
                     await store.registration()
                     handleClick()
                 }}
                 noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(event) => store.changeEmail(event.target.value)}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={(event) => store.changePassword(event.target.value)}
                    autoComplete="current-password"
                />
                {!!store.error && (
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Somethig is wrong. ${store.error}
                    </Alert>
                </Snackbar>
                )}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    {store.isLoading ? (
                        <CircularProgress />
                    ) : (
                        'Submit'
                    )}
                </Button>
                {!!appStore.authStore.token && (
                    <Box>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Success! Token is: ${appStore.authStore.token}
                        </Alert>
                    </Snackbar>
                </Box>
                )}
            </Box>
        </Box>
    )
}

export default observer(Registration)