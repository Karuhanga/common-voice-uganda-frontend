import {AppBar, Toolbar, Typography} from "@material-ui/core";
import React from "react";

export default () => {
    return (
        <AppBar>
            <Toolbar className="center">
                <Typography variant="h5">
                    <strong>Common Voice Uganda</strong>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
