import {Card, CardActionArea, CardContent, Typography} from "@mui/material"
import {FC, ReactElement} from "react";
import {IResources} from "../../../interfaces/resources";
import {useNavigate} from "react-router-dom";

const ResourceCard: FC<IResources> = (props): ReactElement => {

    const navigate = useNavigate()

     return (
        <Card sx={{ maxWidth: 250,
                    background: props.color}}>
            <CardActionArea onClick={() => navigate(`/resource/${props.id}`)}>
                <CardContent>
                    <Typography noWrap gutterBottom variant="h6" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.year}, {props.color}
                    </Typography>
                    <Typography noWrap>
                    {props.pantone_value}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ResourceCard