import {Card, CardContent, CardMedia, Paper} from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Action({actionName, image}) {
    return (
        <Grid item xs>
            <Card className="contribute-section">
                <CardMedia className="action-image" image={image} />
                <CardContent>
                    {actionName}
                </CardContent>
            </Card>
        </Grid>
    )
}
