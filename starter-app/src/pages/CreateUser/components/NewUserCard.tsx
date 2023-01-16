import { Card, CardContent, Typography, Container, Grid } from "@mui/material";
import { FC, ReactElement } from "react";
import { IUserCreate } from "../../../interfaces/userCreate";

const NewUserCard: FC<IUserCreate | any> = (props): ReactElement => {

    return (
        <Container>
            <Grid container  justifyContent="center" alignItems="center">
                <Card sx={{ maxWidth: 250, backgroundColor: "primary.main" }}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                new user
                            </Typography>
                            <Typography  noWrap gutterBottom variant="h6" component="div">
                             {props.name} 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Id: {props.id} Job: {props.job}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {props.createdAt}
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>
        </Container>
    )
}

export default NewUserCard;