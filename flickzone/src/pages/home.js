import React from 'react';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
import { OptForm, Feature } from '../components';

// The Home page is used to display the header, jumbotron, faqs, and footer containers.
export default function Home() {
  return (
    <>
	  <HeaderContainer>
	  	<Feature>
	  		<Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
	  		<Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
	  		<OptForm>
	  			<OptForm.Input placeholder="Email address" />
	  			<OptForm.Button>Try it now</OptForm.Button>
	  			<OptForm.Break />
	  			<OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
	  		</OptForm>
	  	</Feature>
	  </HeaderContainer>

	  <JumbotronContainer />
	  <FaqsContainer />
	  <FooterContainer />
    </>
  );
}
