import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_PHONE,
  VALIDATOR_PASSWORD
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './Auth.css';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { useHistory } from 'react-router';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const history = useHistory();


  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          address: undefined,
          contact_no: undefined,
          confirm_password:undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          },
          address: {
            value: '',
            isValid: false
          },
          contact_no: {
            value: '',
            isValid: false
          },
          confirm_password: {
            value: '',
            isValid: false
          }
          //add other fields
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = async event => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData =await sendRequest(
          'http://localhost:5000/auth/login',
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          }),
          {
            'Content-Type': 'application/json'
          }
        );
        auth.login(responseData.userId, responseData.token);
      } catch (err) {}
    } else {
      try {
        // const formData = new FormData();
        // formData.append('email', formState.inputs.email.value);
        // formData.append('name', formState.inputs.name.value);
        // formData.append('password', formState.inputs.password.value);
        // formData.append('address', formState.inputs.address.value);
        // formData.append('contact_no', formState.inputs.contact_no.value);
        
        // const responseData = await sendRequest(
        //   'http://localhost:5000/auth/signup',
        //   'POST',
        //   formData,
        //     {
        //     'Content-Type': 'application/json'
        //   }
        // );
        // console.log(responseData.userId);
        // auth.login(responseData.userId, responseData.token);
        const responseData =await sendRequest(
          'http://localhost:5000/auth/signup',
          'POST',
          JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
            address: formState.inputs.address.value,
            contact_no: formState.inputs.contact_no.value
          }),
          {
            'Content-Type': 'application/json'
          }
        );
        // console.log(responseData.userId);
        // auth.login(responseData.userId, responseData.token);
        history.push('/signup');
        
      } catch (err) {
        console.log(err);
      }
    }
  };


  return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    <Card className="authentication">
    {isLoading && <LoadingSpinner asOverlay />}
        <h2>{isLoginMode ? 'Login Required' : 'Sign Up'}</h2>
        <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid password, at least 6 characters."
          onInput={inputHandler}
        />
        {!isLoginMode && (
          <Input
          element="input"
          id="confirm_password"
          type="password"
          label="Confirm Password"
          validators={[VALIDATOR_PASSWORD(formState.inputs.password.value)]}
          errorText="Please confirm password."
          onInput={inputHandler}
        />
        )}
        {!isLoginMode && (
        <Input
          element="input"
          id="address"
          type="text"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter an address."
          onInput={inputHandler}
        />
        )}
        {!isLoginMode && (
        <Input
          element="input"
          id="contact_no"
          type="text"
          label="Contact no"
          validators={[VALIDATOR_PHONE()]}
          errorText="Please enter a valid contact no."
          onInput={inputHandler}
        />
        )}
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>
    </Card>
    </React.Fragment>
  );
};

export default Auth;
