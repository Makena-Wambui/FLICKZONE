import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

// The Loading Component is used to render a spinner while the data is being fetched
export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
}

// The Loading.ReleaseBody component is used to release the body of the page
Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
