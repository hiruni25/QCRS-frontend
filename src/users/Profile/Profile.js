import React, { useState, useCallback, useEffect, useReducer } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./UserProfile.styles.js";
import jwt from "jwt-decode";

export default function Profile() {
  const classes = useStyles();
  const [editProfile, setEditProfile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: "",
      address: "",
      contact_no: "",
      curr_pwd: "",
      new_pwd: "",
      cnfrm_pwd: ""

    }
  );
  const details = [
    "112233KL",
    "Nethmi Sankalpana",
    "No 269/5/E, Mudungoda Waththa, Mudungoda",
    "Nethmi@gmail.com",
    "0112233456",
  ];
  const labels = [
    "User ID: ",
    "Name: ",
    "Address: ",
    "Email: ",
    "Contact NO: ",
  ];
  const data = [];
  var arrayLength = details.length;
  for (var i = 0; i < arrayLength; i++) {
    data[i] = labels[i] + details[i];
  }

  useEffect(() => {
    if (loading) {
      // setFields([]);
      getUserDetails();
    }
  }, []);
  //to be implemented
  //function to handle update request
  function update(e) {
    e.preventDefault();
  }

  const getUserDetails = async () => {
    const headers = new Headers();
    const token = JSON.parse(localStorage.getItem("userData"));
    const userData = jwt(token.token);
    // console.log(userData, "user")
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", token);
    const response = await fetch(
      `http://localhost:5000/auth/user-by-email?email=${userData.email}`,
      {
        method: "GET",
        headers: headers,
      }
    );
    const responseData = await response.json();
    // console.log(responseData)
    setLoading(false);
    setUser(responseData.user);
    setFormInput(responseData.user)
  };

  const makeEditProfile = (e) => {
    console.log(e);
    e.preventDefault();
    
    console.log("edit profile");
    setEditProfile(!editProfile);
  };

  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };


  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };

    console.log(data)

    fetch("http://localhost:5000/auth/user", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log("Success:", JSON.stringify(response))
        alert( JSON.stringify(response))
        setEditProfile(false)
      })
      .catch(error => console.error("Error:", error));
  };

  if (!user) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className={classes.root}>
        <p>{user.userId}</p>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              User Profile
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="usr_id"
                    name="usr_id"
                    variant="outlined"
                    fullWidth
                    id="usr_id"
                    //   label="User ID"
                    disabled={true}
                    defaultValue={user && user.userId}
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
                    disabled={editProfile ? false : true}
                    defaultValue={user.name}
                    onChange={handleInput}
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
                    disabled={editProfile ? false : true}
                    defaultValue={user.address}
                    onChange={handleInput}
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
                    disabled={editProfile ? false : true}
                    defaultValue={user && user.email}
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="contact_no"
                    //   label="Contact Number"
                    name="contact_no"
                    autoComplete="contact"
                    disabled={editProfile ? false : true}
                    defaultValue={user.contact_no}
                    onChange={handleInput}
                  />
                </Grid>
                {editProfile ? (
                  <>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="curr_pwd"
                        label="Current Pasword"
                        name="curr_pwd"
                        autoComplete="curr_pwd"
                        onChange={handleInput}
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
                        onChange={handleInput}
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
                        onChange={handleInput}
                      />
                    </Grid>
                  </>
                ) : (
                  <></>
                )}
              </Grid>
              {editProfile ? (
                <>
                  <Button
                    type="save"
                    variant="contained"
                    color="primary"
                    // className={classes.submit}
                    
                  >
                    Save Chnages
                  </Button>
                  <Button
                    type="cancel"
                    variant="contained"
                    color="#fc0320"
                    // className={classes.submit}
                    onClick={(e) => makeEditProfile(e)}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <Button
                  //  type="submit"
                    variant="contained"
                    color="primary"
                    // className={classes.submit}
                    onClick={(e) => makeEditProfile(e)}
                  >
                    Edit Details
                  </Button>
                </>
              )}

              <Button
                type="cancel"
                variant="contained"
                color="#fc0320"
                // className={classes.submit}
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
}
