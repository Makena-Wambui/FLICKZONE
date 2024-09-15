import { createGlobalStyle } from 'styled-components';

// The GlobalStyles component is used to set the global styles for the application.
// These styles are applied to the html and body elements. 
export const  GlobalStyles = createGlobalStyle`
	html, body {
	 height: 100%;
	 font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	 -webkit-font-smoothing: antialiased;
	 -moz-osx-font-smoothing: grayscale;
	 background-color: black;
	 color: #333333;
	 font-size: 16px;
	}
`;
