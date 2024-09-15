import React, { useState, useEffect, useContext } from 'react';

// The Fuse library is a lightweight fuzzy-search library that allows you to search through a collection of data with a single query.
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

// The FirebaseContext is a React context that provides the Firebase instance to the entire application.
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

// The BrowseContainer component is a container that displays the browse page.
export function BrowseContainer({ slides }) {
  // category is a state variable that stores the category of the slide.
  const [category, setCategory] = useState('series');
  
  // profile is a state variable that stores the profile of the user.
  const [profile, setProfile] = useState({});
  
  // loading is a state variable that stores the loading state of the browse page.
  const [loading, setLoading] = useState(true);

  // searchTerm is a state variable that stores the search term.
  const [searchTerm, setSearchTerm] = useState('');
  
  // slideRows is a state variable that stores the slide rows.
  const [slideRows, setSlideRows] = useState([]);

  // The auth property is a Firebase authentication object that provides methods for signing in, signing out, and getting the current user.
  const { auth } = useContext(FirebaseContext);

  // The user property is a Firebase user object that represents the currently authenticated user.
  const user = auth.currentUser || {};

  // The useEffect hook is used to set the loading state to false after 3 seconds. 
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  // The useEffect hook is used to set the slide rows based on the category.
  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  // The useEffect hook is used to filter the slide rows based on the search term.
  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  // The BrowseContainer component returns a header, a card group, and a footer container.
   return profile.displayName ? (
  <>
    {loading ? (
      <Loading src="/images/misc/loading.gif" />
    ) : (
      <Loading.ReleaseBody />
    )}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>
              Series
            </Header.TextLink>
            <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => auth.signOut()}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
