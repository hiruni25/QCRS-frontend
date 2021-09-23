import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./UserDetailsUpdate.styles.js";

export default function UserDetailsUpdate() {
  const classes = useStyles();

  //to be implemented
  //function to handle update request
  function update(e) {
    e.preventDefault();
  }

  return (
    <div className={classes.root}>



      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            User Details Update
          </Typography>
          <form className={classes.form} noValidate onSubmit={update}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  defaultValue="Nethmi"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  defaultValue="Sankalpana"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  defaultValue="nethmiwijebandara@gmail.com"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="curr_pwd"
                  label="Current Pasword"
                  name="curr_pwd"
                  autoComplete="curr_pwd"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="new_pwd"
                  label="New Pasword"
                  name="new_pwd"
                  autoComplete="new_pwd"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              href="./"
            >
              change password
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href="./"
            >
              Update
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}