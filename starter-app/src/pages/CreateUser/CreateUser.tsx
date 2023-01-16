import React, {ReactElement, FC} from "react";
import { Grid,TextField,Typography,CircularProgress,} from '@mui/material'
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { observer } from "mobx-react-lite";
import { useNavigate} from "react-router-dom";
import CreateUserStore from "./CreateUserStore";
import NewUserCard from "./components/NewUserCard";

const store = new CreateUserStore();

const CreateUser: FC<any> = (props): ReactElement => {
    const navigate = useNavigate();
    return (
        <>
            <Box 
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    CREATE NEW USER
                </Typography>
                <Button onClick={() => navigate(`/user/update`)} color="secondary">
                    update existing user</Button>
                    {!!store.userResponse &&(
                <>
                <Grid container spacing={4} justifyContent="center" my={4}>
                    {store.isLoading ? (
                        <CircularProgress />
                    ) : (
                            <Grid item xs={12}>
                                <NewUserCard {...(store.userResponse)}/>
                            </Grid>
                        )}
                </Grid>
                </>
            )}
                <Box component="form"
                    onSubmit={async (event) =>{
                        event.preventDefault()
                        await store.prefetchData()
                    }}
                    noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="name"
                            label="User name"
                            name="name"
                            onChange={(event) => store.addName(event.target.value)}
                            autoFocus
                            error={store.name === ""}
                            helperText={store.name === "" ? 'Empty field' : ' '}
                            required variant="outlined"
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="job"
                            label="User job"
                            name="job"
                            onChange={(event) => store.addJob(event.target.value)}
                            autoFocus
                            error={store.job === ""}
                            helperText={store.job === "" ? 'Empty field' : ' '}
                            required variant="outlined"
                        />
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
                    </Box>
                </Box>
        </>
   )
}

export default observer(CreateUser);