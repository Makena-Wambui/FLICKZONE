// We import React, useState, useContext, and createContext from 'react' and ReactDOM from 'react-dom.They are used to create the Player component and its subcomponents.
import React, { useState, useContext, createContext } from 'react';

// ReactDOM is used to create a portal for the Player component.
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/player';

// PlayerContext is a context object that is used to share the state of the player between the Player component and its subcomponents.
export const PlayerContext = createContext();

// Player is a compound component that composes the Container component. It is used to create a player that contains a video and a button.
export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

// The Video component renders a video element. It is used to create a video player.
Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

// The Button component renders a button. It is used to create a button that plays the video.
Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
      Play
    </Button>
  );
};
