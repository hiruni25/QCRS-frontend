import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./UserProfile.styles.js";

export default function UserDetailsUpdate() {
  const classes = useStyles();

  const details= ["112233KL", "Nethmi Sankalpana", "No 269/5/E, Mudungoda Waththa, Mudungoda","Nethmi@gmail.com","0112233456"];
  const labels=["User ID: ","Name: ","Address: ","Email: ", "Contact NO: "]
  const data = []
  var arrayLength = details.length;
  for (var i = 0; i < arrayLength; i++) {
    data[i]= labels[i]+details[i]
}

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
            User Profile
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
                //   label="User ID"
                  defaultValue={data[0]}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="name"
                //   label="Name"
                  name="name"
                  autoComplete="name"
                  defaultValue={data[1]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="address"
                //   label="Address"
                  name="address"
                  autoComplete="address"
                  defaultValue={data[2]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                //   label="Email"
                  name="email"
                  autoComplete="email"
                  defaultValue={data[3]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="contact"
                //   label="Contact Number"
                  name="contact"
                  autoComplete="contact"
                  defaultValue={data[4]}
                />
              </Grid>
              
              
              
            </Grid>
            <Button
              type="save"
              variant="contained"
              color="primary"
              className={classes.submit}
              href="./UserDetailsUpdate"
            >
              Edit Details
            </Button>
            <Button
              type="cancel"
              variant="contained"
              color="#fc0320"
              className={classes.submit}
              href="./"
            >
              Delete Account
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