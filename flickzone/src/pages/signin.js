import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import { signInWithEmailAndPassword } from 'firebase/auth';

// The SignIn page is used to display the sign in form.
export default function SignIn() {
  // The useNavigate hook is used to navigate to the browse page.
  const navigate = useNavigate();
  const { auth } = useContext(FirebaseContext);

  // The emailAddress and password state variables are used to store the email address and password.
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  // The error state variable is used to store the error message.
  const [error, setError] = useState('');
  // The isInvalid variable is used to check if the email address or password is empty.
  const isInvalid = password === '' || emailAddress === '';

  // The handleSignin function is used to sign in the user.
  // preventDefault is used to prevent the default form submission behavior.
  // The signInWithEmailAndPassword function is used to sign in the user with the specified email address and password.
  // The navigate function is used to navigate to the browse page.
  // The error state variable is used to store the error message.
  const handleSignin = (event) => {
    event.preventDefault();

    return signInWithEmailAndPassword(auth, emailAddress, password)
      .then(() => {
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
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
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
