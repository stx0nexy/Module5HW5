import { Card, CardContent, Typography, Container, Grid } from "@mui/material";
import { FC, ReactElement } from "react";
import { IUserUpdate } from "../../../interfaces/userUpdate";

const UpdateUserCard: FC<IUserUpdate | any> = (props): ReactElement => {

    return (
        <Container>
            <Grid container  justifyContent="center" alignItems="center">
                <Card sx={{ maxWidth: 250, backgroundColor: "primary.main" }}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                update user
                            </Typography>    
                                <Typography  noWrap gutterBottom variant="h6" component="div">
                             {props.name} 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Id: {props.id} Job: {props.job}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               {props.updatedAt}
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>
        </Container>
    )
}

export default UpdateUserCard;