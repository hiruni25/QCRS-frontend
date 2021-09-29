import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
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
              <Grid item xs={12}>
                <TextField
                  autoComplete="usr_id"
                  name="usr_id"
                  variant="outlined"
                  fullWidth
                  id="usr_id"
                  label="User ID"
                  defaultValue="112233LB"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  defaultValue="Nethmi Sankalpana"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  defaultValue="No 269/5/E, Mudungoda Waththa, Mudungoda"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  defaultValue="nethmiwijebandara@gmail.com"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="contact"
                  label="Contact Number"
                  name="contact"
                  autoComplete="contact"
                  defaultValue="0112233345"
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
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="cnfrm_pwd"
                  label="Confirm Pasword"
                  name="cnfrm_pwd"
                  autoComplete="cnfrm_pwd"
                />
                </Grid>
            </Grid>
            <Button
              type="save"
              variant="contained"
              color="primary"
              className={classes.submit}
              href="./"
            >
              Save Chnages
            </Button>
            <Button
              type="cancel"
              variant="contained"
              color="#fc0320"
              className={classes.submit}
              href="./UserDetailsUpdate"
            >
              Canncel
            </Button>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              color="#fc0320"
              className={classes.submit}
              href="./"
            >
              Delete your account
            </Button> */}
          </form>
        </div>
      </Container>
    </div>
  );
}