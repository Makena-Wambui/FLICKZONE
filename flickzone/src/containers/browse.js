import React, { useContext, useEffect, useState }from 'react';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { Loading, Header } from '../components';
export function BrowseContainer({ slides }) {
	const [profile, setProfile] = useState({})
	const [loading, setLoading] = useState(true)
	const { auth } = useContext(FirebaseContext);
	const user = auth.currentUser || {};

	useEffect(() => {
		console.log('profile', profile);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [profile.displayName]);
	
	return  profile.displayName ? (
		<>
		{loading ? (
			<Loading src={user.photoURL} />
		) : (
			<Loading.ReleaseBody />
	)}
		<Header src="joker1">
			<p>Hello</p>
		</Header>
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	);
}
