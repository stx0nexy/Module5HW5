import React, {ReactElement, FC, useEffect, useState} from "react";
import {
    Card,
    CardContent,
    CircularProgress,
    Container,
    Grid,
    Typography
} from '@mui/material'
import * as resourceApi from "../../../api/modules/resources"
import {IResources} from "../../../interfaces/resources";
import {useParams} from "react-router-dom";

const Resource: FC<any> = (): ReactElement => {
    const [resource, setResources] = useState<IResources | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            const getResource = async () => {
                try {
                    setIsLoading(true)
                    const res = await resourceApi.getById(id)
                    setResources(res.data)
                } catch (e) {
                    if (e instanceof Error) {
                        console.error(e.message)
                    }
                }
                setIsLoading(false)
            }
            getResource()
        }
    }, [id])

    return (
        <Container>
            <Grid container spacing={4} justifyContent="center" m={4}>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <>
                        <Card  sx={{ maxWidth: 250,
                                    background: resource?.color}}>
                            <CardContent>
                                <Typography noWrap gutterBottom variant="h6" component="div">
                                    {resource?.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {resource?.year} {resource?.color}
                                </Typography>
                                <Typography noWrap>
                                    {resource?.pantone_value}
                                </Typography>
                            </CardContent>
                        </Card>
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default Resource;