import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

// The SignUp page is used to display the sign up form.
export default function SignUp() {
  const navigate = useNavigate();
  const { auth } = useContext(FirebaseContext);
  // The firstName, emailAddress, and password state variables are used to store the first name, email address, and password.
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  // The error state variable is used to store the error message.
  const [error, setError] = useState('');
  // The isInvalid variable is used to check if the first name, email address, or password is empty.
  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  // The handleSignUp function is used to sign up the user.
  // The createUserWithEmailAndPassword function is used to create a new user account with the specified email address and password.
  // The updateProfile function is used to update the user's profile data.
  // The navigate function is used to navigate to the browse page. 
  // The error state variable is used to store the error message. 
  const handleSignUp = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((result) => {
        return updateProfile(result.user, {
          displayName: firstName,
	  photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(() => {
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a User? <Form.Link to="/signin">Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

